import styled from "styled-components";
import Service from "./Service";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 0px 0px 50px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 30px;
  border: 1px solid #f5f5f5;
`;

const TitleHeader = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22.5px;
  color: black;
  font-weight: 700;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  margin-top: 10px;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-color: grey;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const UserServicesContainer = ({ user, additional }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const headers = {
          token: `Bearer ${user.accessToken}`,
        };

        const res = await axios.get(
          "https://freegigs.herokuapp.com/services/" + user._id,
          { headers }
        );

        setServices(res.data);
      } catch {}
    };

    getServices();
  }, [user._id, user.accessToken]);

  return (
    <Container>
      <TitleHeader>Services by {user.name}</TitleHeader>
      <ServicesContainer>
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            additional={additional}
            user={user}
          />
        ))}
      </ServicesContainer>
    </Container>
  );
};

export default UserServicesContainer;
