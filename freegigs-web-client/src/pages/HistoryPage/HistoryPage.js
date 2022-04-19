import LeftNavBar from "../SharedComponents/LeftNavBar";
import styled from "styled-components";
import NavigationBar from "../SharedComponents/NavigationBar";
import HistoryContainer from "./Components/HistoryContainer"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const OverviewPage = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <LeftNavBar />
        <HistoryContainer />
      </Container>
    </>
  );
};

export default OverviewPage;
