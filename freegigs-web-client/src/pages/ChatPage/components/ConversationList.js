import styled from "styled-components";
import ConversationButton from "./ConversationButton";

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-color: grey;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const ConversationList = ({
  user,
  conversations,
  currentUser,
  onUserChange,
}) => {
  return (
    <Container>
      {conversations?.map((conversation) => (
        <ConversationButton
          key={conversation._id}
          id={conversation._id}
          user={user}
          conversation={conversation}
          currentUser={currentUser}
          onUserChange={onUserChange}
        />
      ))}
    </Container>
  );
};

export default ConversationList;
