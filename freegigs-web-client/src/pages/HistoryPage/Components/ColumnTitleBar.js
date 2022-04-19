import styled from "styled-components";

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

const LogoContainer = styled.div`
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
  font-weight: 300;
  text-align: center;
`;
const ServiceTitle = styled.div`
  width: 300px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 300;
  text-align: left;
`;

const CustNameTitle = styled.div`
  width: 325px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 300;
  text-align: left;
`;

const PriceTitle = styled.div`
  width: 175px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 300;
  text-align: center;
`;

const DateTitle = styled.div`
  width: 175px;
  height: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 300;
  text-align: center;
`;

const ColumnTitleBar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <StatusTitle>Status</StatusTitle>
      <ServiceTitle>Service</ServiceTitle>
      <CustNameTitle>Customer Name</CustNameTitle>
      <PriceTitle>Price</PriceTitle>
      <DateTitle>Date</DateTitle>
    </Container>
  );
};

export default ColumnTitleBar;
