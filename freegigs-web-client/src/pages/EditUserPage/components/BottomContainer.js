import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BoxTitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 27.5px;
  color: black;
  font-weight: 700;
`;

const OverviewContainer = styled.div`
  height: 350px;
  width: 1350px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 50px;
`;

const TextArea = styled.textarea`
  height: 220px;
  width: 95%;
  background-color: #FFFFFF;
  border: ${(props) => (props.error ? "1.5px solid red" : "1px solid #CCC")};
  border-radius: 5px;
  padding: 10px 0 0 10px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 500;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.5;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const SaveButton = styled.button`
  height: 40px;
  width: 150px;
  background-color: black;
  border: ${(props) => (props.error ? "1.5px solid red" : "1px solid #CCC")};
  border-radius: 5px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 17.5px;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 70px;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const BottomContainer = ({overview, setOverview, handleOnClick}) => {
  return (
    <Container>
      <OverviewContainer>
        <BoxTitleText>Overview</BoxTitleText>
        <TextArea
                    placeholder="Enter your overview"
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                  />
        <Row>
          <SaveButton onClick={handleOnClick}>Save</SaveButton>
        </Row>
      </OverviewContainer>
    </Container>
  );
};

export default BottomContainer;
