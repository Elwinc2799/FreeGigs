import styled from "styled-components";
import React from "react";
import { ServiceData } from "./PopularServicesData";
import Service from "./Service";

const Container = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 100px;
  margin-top: 20px;
`

const TitleHeader = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 50px;
  margin-top: 20px;
  color: black;
  font-weight: 800;
  line-height: 120%;
`

const ServicesRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`

const PopularServices = () => {
  return (
    <Container>
      <TitleHeader>Popular Services</TitleHeader>

      <ServicesRow>
        {
          ServiceData.map(
            (service) => <Service service={service} key={service.id} />
          )
        }
      </ServicesRow>
    </Container>
  );
};

export default PopularServices;
