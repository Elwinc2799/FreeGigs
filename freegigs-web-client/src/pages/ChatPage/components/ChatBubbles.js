import styled from "styled-components";
import { format } from "timeago.js";
import axios from "axios";
import { useState, useEffect } from "react";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${(props) => (props.isSender ? "flex-start" : "flex-end")};
  padding: ${(props) =>
    props.isSender ? "10px 0px 0px 30px" : "10px 30px 0px 0px"};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${(props) => (props.isSender ? "flex-start" : "flex-end")};
`;

const UserPicter = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 40px;
`;

const ChatContainer = styled.div`
  border-radius: 10px;
  max-width: 500px;
  background-color: ${(props) => (props.isSender ? "white" : "#19233b")};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin: ${(props) =>
    props.isSender ? "0px 0px 0px 10px" : "0px 10px 0px 0px"};
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: ${(props) => (props.isSender ? "black" : "white")};
  font-weight: 500;
  text-align: justify;
`;

const TimeContainer = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12px;
  color: grey;
  font-weight: 500;
  margin: ${(props) =>
    props.isSender ? "5px 0px 0px 50px" : "5px 50px 0px 0px"};
`;

const ChatBubbles = ({ isSender, chat }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSender = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/additional/" + chat.senderID
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getSender();
  }, [chat.senderID]);

  return (
    <OuterContainer isSender={isSender}>
      <Container isSender={isSender}>
        {isSender ? (
          <>
            <UserPicter
              src={
                user?.profileImage
                  ? user?.profileImage
                  : "https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80"
              }
            />
            <ChatContainer isSender={isSender}>{chat.text}</ChatContainer>
          </>
        ) : (
          <>
            <ChatContainer>{chat.text}</ChatContainer>
            <UserPicter
              src={
                user?.profileImage
                  ? user?.profileImage
                  : "https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80"
              }
            />
          </>
        )}
      </Container>

      <TimeContainer isSender={isSender}>
        {format(chat.createdAt, "en_SG")}
      </TimeContainer>
    </OuterContainer>
  );
};

export default ChatBubbles;
