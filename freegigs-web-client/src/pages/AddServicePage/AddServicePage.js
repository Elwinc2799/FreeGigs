import LeftNavBar from "../SharedComponents/LeftNavBar";
import AddServiceForm from "./components/AddServiceForm";
import styled from "styled-components";
import NavigationBar from "../SharedComponents/NavigationBar";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddServicePage = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <LeftNavBar />
        <AddServiceForm />
      </Container>
    </>
  );
};

export default AddServicePage;
