import React, { useState } from "react";
import styled from "styled-components";
import checkbox from "../../../assets/check-box.png";
import checkboxticked from "../../../assets/check-box-ticked.png";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: transparent;
  padding: 0px 15px;
`;

const LogoContainer = styled.button`
  height: 25px;
  width: 25px;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: cover;
`;

const StatusTitle = styled.div`
  width: 200px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 600;
  text-align: center;
`;
const ServiceTitle = styled.div`
  width: 300px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 600;
  text-align: left;
`;

const CustNameTitle = styled.div`
  width: 325px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 600;
  text-align: left;
`;

const PriceTitle = styled.div`
  width: 175px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 600;
  text-align: center;
`;

const DateTitle = styled.div`
  width: 175px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 600;
  text-align: center;
`;

const HistoryRow = ({ history, toggleCheckBox, initialCheckStatus }) => {
  const [checkBoxStatus, setCheckBoxStatus] = useState(initialCheckStatus);

  function HandleTickCheckBox() {
    toggleCheckBox(history.id);
    setCheckBoxStatus(!checkBoxStatus);
  }

  return (
    <Container>
      <LogoContainer>
        <Logo
          src={checkBoxStatus ? checkboxticked : checkbox}
          onClick={HandleTickCheckBox}
        />
      </LogoContainer>
      <StatusTitle>{history.status ? "Done" : "On-going"}</StatusTitle>
      <ServiceTitle>{history.service}</ServiceTitle>
      <CustNameTitle>{history.cust_name}</CustNameTitle>
      <PriceTitle>{history.price}</PriceTitle>
      <DateTitle>{history.date}</DateTitle>
    </Container>
  );
};

export default HistoryRow;
