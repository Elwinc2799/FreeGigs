import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  width: 350px;
  height: 355px;
  background-color: #fbfbfb;
  border-radius: 20px;
  padding: 0px 30px 32px 30px;
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
`;

const SubTitle = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  color: gray;
  font-weight: 700;
  margin-bottom: 5px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 5px;
`;

const Value = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 40px;
  color: black;
  font-weight: bold;
  margin-right: 10px;
`;

const Unit = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 32px;
  color: black;
  font-weight: 600;
`;

const ApproachesContainer = () => {
  return (
    <>
      <Container>
        <Title>Approaches</Title>
        <SubTitle>
          {moment().month(moment().month()).format("MMM") +
            " " +
            moment().year()}
        </SubTitle>
        <ContentContainer>
          <Value>25</Value>
          <Unit>people</Unit>
        </ContentContainer>
        <Title>Average Per Month</Title>
        <SubTitle>{moment().year()-1}</SubTitle>
        <ContentContainer>
          <Value>36</Value>
          <Unit>people</Unit>
        </ContentContainer>
      </Container>
    </>
  );
};

export default ApproachesContainer;
