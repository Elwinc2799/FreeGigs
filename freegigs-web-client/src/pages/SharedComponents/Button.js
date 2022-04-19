import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 175px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 12.5px 0px;
`;

const ButtonText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 600;
`;

const LogoContainer = styled.div`
  height: 25px;
  width: 25px;
  margin-right: 20px;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: cover;
`;

const Button = ({ list, selected }) => {
  return (
    <>
      <ButtonContainer
       
        style={{
          backgroundColor: list.id === selected ? "black" : "white"
        }}
      >
        <LogoContainer>
          <Logo
            src={
              list.id === selected ? list.logoSelected : list.logoNotSelected
            }
          />
        </LogoContainer>
        <ButtonText style={{ color: list.id === selected ? "white" : "black" }}>
          {list.title}
        </ButtonText>
      </ButtonContainer>
    </>
  );
};

export default Button;
