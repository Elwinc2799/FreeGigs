import styled from "styled-components";
import ChatBubbles from "./ChatBubbles";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import Lottie from "react-lottie";
import animationData from "../../../assets/Puzzle.json";

const Container = styled.div`
  height: 650px;
  width: 75%;
  margin: 10px 70px 0px 70px;
  border-radius: 20px;
  background-color: #f5f9fc;
  padding: 30px 0px;
`;

const ConversationContainer = styled.div`
  height: 94.5%;
  width: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-color: grey;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const TextContainer = styled.div`
  height: 7.5%;
  width: 100%;
  background-color: white;
  margin: 10px 0px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  display: flex;
  flex-direction: row;
  padding: 7.5px 20px;
  justify-content: flex-end;
`;

const TextInput = styled.input`
  width: 90%;
  height: 100%;
  background-color: white;
  padding: 0px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid lightgrey;
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 500;
  border-radius: 5px;
  padding-left: 10px;
  margin-right: 20px;

  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.5;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const SendButton = styled.button`
  height: 100%;
  width: 10%;
  background-color: #014dfc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: white;
  font-weight: 800;
`;

const ConversationPlaceholderContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 100px;
`;

const ConversationPlaceholder = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Nunito Sans", sans-serif;
  font-size: 50px;
  color: lightgrey;
  font-weight: 700;
  text-align: center;
`;

const RightConversationBar = ({ currentUser }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [conversation, setConversation] = useState([]);
  const [chats, setChats] = useState([]);
  const [arrivalChats, setArrivalChats] = useState(null);
  const [text, setText] = useState("");
  const socket = useRef();
  const scrollRef = useRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalChats({
        senderID: data.senderID,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalChats &&
      conversation?.members.includes(arrivalChats.senderID) &&
      setChats((prev) => [...prev, arrivalChats]);
  }, [arrivalChats, conversation]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [user]);

  useEffect(() => {
    const headers = {
      token: `Bearer ${user.accessToken}`,
    };

    const getConversation = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/conversations/find/" +
            user._id +
            "/" +
            currentUser,
          {
            headers,
          }
        );
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    currentUser && getConversation();
  }, [user, currentUser]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/chats/" + conversation?._id
        );
        setChats(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getChats();
  }, [conversation]);

  const handleOnClick = async () => {
    const chat = {
      conversationID: conversation._id,
      text: text,
    };

    const receiverID = conversation.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderID: user._id,
      receiverID: receiverID,
      text: text,
    });

    try {
      const res = await axios.post(
        "https://freegigs.herokuapp.com/chats/" + user._id,
        chat
      );
      setChats([...chats, res.data]);
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <Container>
      <ConversationContainer>
        {chats?.map((chat) => (
          <div ref={scrollRef} key={chat._id}>
            <ChatBubbles
              key={chat._id}
              isSender={chat.senderID !== user._id}
              chat={chat}
            />
          </div>
        ))}
        {!currentUser && (
          <ConversationPlaceholderContainer>
            <ConversationPlaceholder>
              Please start a conversation by clicking on the user
              <Lottie options={defaultOptions} height={400} width={400} />
            </ConversationPlaceholder>
          </ConversationPlaceholderContainer>
        )}
      </ConversationContainer>
      {currentUser && (
        <TextContainer>
          <TextInput
            placeholder={"Enter your message here"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <SendButton onClick={handleOnClick}>Send</SendButton>
        </TextContainer>
      )}
    </Container>
  );
};

export default RightConversationBar;
