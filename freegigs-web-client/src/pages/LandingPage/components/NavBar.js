import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
`;

const BrandLogo = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  font-weight: 800;
`;

const MenuRowContainer = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItems = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const SignInSignUpButton = styled.button`
  height: 40px;
  width: 130px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

const SignInSignUpText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 17.5px;
  color: white;
  font-weight: 600;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <BrandLogo>FreeGigs</BrandLogo>

      <MenuRowContainer>
        <MenuItems>About</MenuItems>
        <MenuItems>Us</MenuItems>
        <Link to="/signin">
          <SignInSignUpButton>
            <SignInSignUpText>Sign In</SignInSignUpText>
          </SignInSignUpButton>
        </Link>
        <Link to="/signup">
          <SignInSignUpButton>
            <SignInSignUpText>Sign Up</SignInSignUpText>
          </SignInSignUpButton>
        </Link>
      </MenuRowContainer>
    </NavBarContainer>
  );
};

export default NavBar;
