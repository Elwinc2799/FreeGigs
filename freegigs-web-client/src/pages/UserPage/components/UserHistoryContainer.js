import styled from "styled-components";
import ServiceHistory from "./ServiceHistory";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 50px 0px 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #e6e9ec;
`;

const TitleHeader = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22.5px;
  color: black;
  font-weight: 700;
  margin-bottom: 15px;
`;

const ServiceHistoryContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-color: grey;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const HeaderRow = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const HeaderTitle = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: grey;
  font-weight: 700;
`;

const UserHistoryContainer = () => {
  return (
    <Container>
      <TitleHeader>Services requested</TitleHeader>

      <HeaderRow>
        <HeaderTitle style={{ flex: "4" }}>Provider</HeaderTitle>
        <HeaderTitle style={{ flex: "4" }}>Service</HeaderTitle>
        <HeaderTitle style={{ flex: "4" }}>Category</HeaderTitle>
        <HeaderTitle style={{ flex: "2" }}>Status</HeaderTitle>
        <HeaderTitle style={{ flex: "4" }}>Date</HeaderTitle>
      </HeaderRow>

      <ServiceHistoryContainer>
        <ServiceHistory />
      </ServiceHistoryContainer>
    </Container>
  );
};

export default UserHistoryContainer;
