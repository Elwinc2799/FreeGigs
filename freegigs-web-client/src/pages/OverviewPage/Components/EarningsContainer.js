import styled from "styled-components";
import EarningsPieChart from "./EarningsPieChart";
import moment from "moment";

const Container = styled.div`
  width: 350px;
  height: 355px;
  background-color: #fbfbfb;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22px;
  color: black;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 32px;
  padding: 0px 30px 0px 30px;
`;

const SubTitle = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  color: gray;
  font-weight: 700;
  padding: 0px 30px 0px 30px;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EarningsContainer = ({allData}) => {
  return (
    <>
      <Container>
        <Title>Earnings from Each Service</Title>
        <SubTitle>{moment().year()-1}</SubTitle>
        <ChartContainer>
          <EarningsPieChart allData={allData} />
        </ChartContainer>
      </Container>
    </>
  );
};

export default EarningsContainer;
