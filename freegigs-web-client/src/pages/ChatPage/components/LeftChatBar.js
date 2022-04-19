import styled from "styled-components";
import ConversationList from "./ConversationList";
import CurrentChatUser from "./CurrentChatUser";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  height: 675px;
  width: 25%;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;

const ConversationContainer = styled.div`
  height: 57.5%;
  width: 100%;
  margin-top: 20px;
`;

const ConversationHeader = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 17.5px;
  color: black;
  font-weight: 700;
  margin-bottom: 15px;
`;

const LeftChatBar = ({ user, currentUser, onUserChange }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const headers = {
      token: `Bearer ${user.accessToken}`,
    };

    const getConversations = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/conversations/" + user._id,
          { headers }
        );

    
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getConversations();
  }, [user._id, user.accessToken]);

  return (
    <Container>
      <CurrentChatUser currentUser={currentUser} />

      <ConversationContainer>
        <ConversationHeader>Conversation</ConversationHeader>
        <ConversationList
          user={user}
          conversations={conversations}
          currentUser={currentUser}
          onUserChange={onUserChange}
        />
      </ConversationContainer>
    </Container>
  );
};

export default LeftChatBar;
