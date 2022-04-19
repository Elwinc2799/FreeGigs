import styled from "styled-components";
import eric from "../../../assets/eric.jpeg";
import teiksean from "../../../assets/teiksean.jpeg";
import elwin from "../../../assets/elwin.jpg";
import montri from "../../../assets/montri.jpg";

const Container = styled.div`
  height: 600px;
  width: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 100px;
`;

const UsText = styled.div`
  font-family: "Rajdhani";
  font-size: 80px;
  font-weight: 800;
  opacity: 0.2;
`;

const UsContainerRow = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UsContainerIndividual = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UsIndividualImage = styled.img`
  height: 175px;
  width: 175px;
  object-fit: cover;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const IndividualName = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: black;
  font-weight: 700;
  margin-top: 15px;
`;

const IndividualRank = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 17.5px;
  color: #616160;
  font-weight: 700;
  margin-top: 10px;
`;

const UsContainer = () => {
  return (
    <Container>
      <UsText>Us</UsText>

      <UsContainerRow>
        <UsContainerIndividual>
          <UsIndividualImage src={eric} />
          <IndividualName>Cheah Chin Xiong</IndividualName>
          <IndividualRank>Software Engineer</IndividualRank>
        </UsContainerIndividual>

        <UsContainerIndividual>
          <UsIndividualImage src={teiksean} />
          <IndividualName>Tan Teik Sean</IndividualName>
          <IndividualRank>Hypermedia Engineer</IndividualRank>
        </UsContainerIndividual>

        <UsContainerIndividual>
          <UsIndividualImage src={elwin} />
          <IndividualName>Elwin Chiong Zhen Hui</IndividualName>
          <IndividualRank>Network Engineer</IndividualRank>
        </UsContainerIndividual>

        <UsContainerIndividual>
          <UsIndividualImage src={montri} />
          <IndividualName>Montri Srisuwan A/L Ia Lun </IndividualName>
          <IndividualRank>Information Engineer</IndividualRank>
        </UsContainerIndividual>
      </UsContainerRow>
    </Container>
  );
};

export default UsContainer;
