import NavigationBar from "../SharedComponents/NavigationBar";
import LeftChatBar from "./components/LeftChatBar";
import { useState } from "react";
import RightConversationBar from "./components/RightConversationBar";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChatPage = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [currentUser, setCurrentUser] = useState("");

  const onUserChange = (user) => {
    setCurrentUser(user);
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <LeftChatBar
          user={user}
          currentUser={currentUser}
          onUserChange={onUserChange}
        />
        <RightConversationBar currentUser={currentUser} />
      </Container>
    </>
  );
};

export default ChatPage;
