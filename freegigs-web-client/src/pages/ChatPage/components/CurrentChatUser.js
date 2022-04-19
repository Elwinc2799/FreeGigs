import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  height: 225px;
  width: 100%;
  background-color: #f5f9fc;
  margin-top: 10px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 100px;
`;

const NameText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 17.5px;
  color: black;
  font-weight: 700;
  margin-top: 10px;
`;

const Text = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12px;
  color: grey;
  font-weight: 500;
`;

const CurrentChatUser = ({ currentUser }) => {
  const [friendUser, setFriendUser] = useState(null);
  const [friendUserDetails, setFriendUserDetails] = useState(null);

  useEffect(() => {
    const getFriendUser = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/users/" + currentUser
        );
        setFriendUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getFriendUserDetails = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/additional/" + currentUser
        );
        setFriendUserDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (currentUser) {
      getFriendUser();
      getFriendUserDetails();
    }
  }, [currentUser]);

  return (
    <Container>
      {currentUser ? (
        <>
          <ImageContainer
            src={
              friendUserDetails?.profileImage
                ? friendUserDetails?.profileImage
                : "https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80"
            }
          />
          <NameText>{friendUser?.name}</NameText>
          <Text>{friendUserDetails?.university}</Text>
          <Text>{friendUserDetails?.major}</Text>
        </>
      ) : (
        <> </>
      )}
    </Container>
  );
};

export default CurrentChatUser;
