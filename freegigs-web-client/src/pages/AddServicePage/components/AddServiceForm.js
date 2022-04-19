import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Container = styled.div`
  height: 600px;
  width: 100%;
  position: relative;
  padding: 0px 20px;
`;

const FormContainer = styled.div`
  height: 550px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-top: 30px;
  padding-left: 50px;
  justify-content: center;
  align-items: center;
`;

const BoxTitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 27.5px;
  color: black;
  font-weight: 700;
`;

const TitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 30px;
  color: black;
  font-weight: 700;
  margin: 10px 0px 10px 0px;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
`;

const ColumnContainer = styled.div`
  display: flex;
  width: 27%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  position: relative;
`;

const Column = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  margin-left: 25px;
  align-items: flex-start;
  justify-content: start;
  position: relative;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  padding-top: 35px;
  padding-bottom: 15px;
  padding-right: 70px;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const TextFieldLabel = styled.label`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 600;
  margin-top: 15px;
`;

const TextFieldInput = styled.input`
  height: 37.5px;
  width: 85%;
  background-color: #ffffff;
  border: ${(props) => (props.error ? "1.5px solid red" : "1px solid #CCC")};
  border-radius: 5px;
  padding: 0 0 0 10px;
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

const TextArea = styled.textarea`
  height: 320px;
  width: 100%;
  background-color: #ffffff;
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

const Select = styled.select`
  width: 85%;
  height: 40px;
  padding: 0 0 0 10px;
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: white;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const TopContainer = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [logo, setLogo] = useState("");
  const [overview, setOverview] = useState("");

  const handleOnClick = async () => {
    const service = {
      name: serviceName,
      category: category,
      description: overview,
      price: price,
      icon: logo,
    };

    const headers = {
      token: `Bearer ${user.accessToken}`,
    };

    try {
      await axios.post("https://freegigs.herokuapp.com/services/" + user._id, service, {
        headers,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <TitleText>Add Service</TitleText>

      <FormContainer>
        <BoxTitleText>Service Details</BoxTitleText>
        <RowContainer>
          <ColumnContainer>
            <TextFieldLabel>Service Name</TextFieldLabel>
            <TextFieldInput
              placeholder="Enter your service name"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />

            <TextFieldLabel>Price</TextFieldLabel>
            <TextFieldInput
              placeholder="Enter your price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <TextFieldLabel>Category</TextFieldLabel>
            <Select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Web Design">Web Design</option>
              <option value="App Design">App Design</option>
              <option value="UX Design">UX Design</option>
              <option value="Icon Design">Icon Design</option>
              <option value="Photoshop Editing">Photoshop Editing</option>
              <option value="Flyer Design">Flyer Design</option>
              <option value="Poster Design">Poster Design</option>
            </Select>

          </ColumnContainer>

          <Column>
            <TextFieldLabel>Overview</TextFieldLabel>
            <TextArea
              placeholder="Tell us more about yourself"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </Column>
        </RowContainer>
        <Row>
          <SaveButton onClick={handleOnClick}>Save</SaveButton>
        </Row>
      </FormContainer>
    </Container>
  );
};

export default TopContainer;
