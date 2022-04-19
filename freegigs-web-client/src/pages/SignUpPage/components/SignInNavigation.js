import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const OrContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  font-size: 12px;
`;

const HorizontalLine = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: black;
  height: 1px;
  margin-left: ${(props) => (props.left ? "75px" : "10px")};
  margin-right: ${(props) => (props.left ? "10px" : "75px")};
`;

const AlreadyHaveAnAccountText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: #acaaaa;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const HighlightedText = styled.span`
  color: black;
  cursor: pointer;
  margin-left: 5px;
`;

const SignInNavigation = () => {
  return (
    <Container>
      <OrContainer>
        <HorizontalLine left={true} />
        or
        <HorizontalLine left={false} />
      </OrContainer>

      <AlreadyHaveAnAccountText>
        Already have an account?
        <Link to="/signin">
          <HighlightedText>Sign In</HighlightedText>
        </Link>
      </AlreadyHaveAnAccountText>
    </Container>
  );
};

export default SignInNavigation;
