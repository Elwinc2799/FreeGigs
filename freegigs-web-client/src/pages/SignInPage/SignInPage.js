import styled from "styled-components";
import FormContainer from "./components/FormContainer";
import ParticleBackground from "./components/ParticleBackground";

const Container = styled.div`
  height: 750px;
  width: 100%;
  background-color: #f6f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInPage = () => {
  return (
    <Container>
      <ParticleBackground />
      <FormContainer />
    </Container>
  );
};

export default SignInPage;
