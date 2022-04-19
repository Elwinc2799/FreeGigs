import LeftNavBar from "../SharedComponents/LeftNavBar";
import OverviewContainer from "./Components/OverviewContainer";
import styled from "styled-components";
import NavigationBar from "../SharedComponents/NavigationBar"

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
        <OverviewContainer />
      </Container>
    </>
  );
};

export default OverviewPage;
