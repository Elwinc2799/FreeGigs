import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

const TextHeader = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ImageContainer = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cotain;
`;

const ServiceHistory = () => {
  return (
    <Container>
      <ProfileContainer style={{ flex: "4" }}>
        <ImageContainer
          src={
            "https://images.unsplash.com/photo-1485811843447-c0989c7b9aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          }
        />
        <TextHeader>Sarah Anderson</TextHeader>
      </ProfileContainer>
      <TextHeader style={{ flex: "4" }}>Web Development</TextHeader>
      <TextHeader style={{ flex: "4" }}>Web Development</TextHeader>
      <TextHeader style={{ flex: "2" }}>On going</TextHeader>
      <TextHeader style={{ flex: "4" }}>13 October 2021</TextHeader>
    </Container>
  );
};

export default ServiceHistory;
