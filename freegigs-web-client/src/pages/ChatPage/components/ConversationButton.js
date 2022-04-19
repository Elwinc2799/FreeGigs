import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  background-color: ${(props) => (props.currentUser ? "#f5f9fc" : "#fff")};
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  height: 75px;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  padding-left: 20px;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.currentUser ? "#f5f9fc" : "#F5F5F5")};
    transition: 0.5s;
  }
`;

const ImageContainer = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50px;
`;

const NameText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: ${(props) => (props.currentUser ? "black" : "grey")};
  font-weight: 700;
  margin-left: 20px;
`;

const ConversationButton = ({
  id,
  user,
  conversation,
  currentUser,
  onUserChange,
}) => {
  const [friendUser, setFriendUser] = useState(null);
  const [friendUserDetails, setFriendUserDetails] = useState(null);

  useEffect(() => {
    const friendID = conversation.members.find((member) => member !== user._id);

    const getFriendUser = async () => {
      try {
        const res = await axios.get("https://freegigs.herokuapp.com/users/" + friendID);
        setFriendUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getFriendUserDetails = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/additional/" + friendID
        );
        setFriendUserDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getFriendUser();
    getFriendUserDetails();
  }, [user._id, conversation]);

  return (
    <Container
      onClick={() => onUserChange(friendUser?._id)}
      currentUser={currentUser === friendUser?._id}
    >
      <ImageContainer
        src={
          friendUserDetails?.profileImage
            ? friendUserDetails?.profileImage
            : "https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80"
        }
      />
      <NameText currentUser={currentUser === friendUser?._id}>
        {friendUser?.name}
      </NameText>
    </Container>
  );
};

export default ConversationButton;
