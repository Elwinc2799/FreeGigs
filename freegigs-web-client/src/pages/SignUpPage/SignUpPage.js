import ParticleBackground from "./components/ParticleBackground";
import styled from "styled-components";
import FormContainer from "./components/FormContainer";

const Container = styled.div`
  height: 750px;
  widht: 100%;
  background-color: #f6f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpPage = () => {
  return (
    <Container>
      <ParticleBackground />
      <FormContainer />
    </Container>
  );
};

export default SignUpPage;
