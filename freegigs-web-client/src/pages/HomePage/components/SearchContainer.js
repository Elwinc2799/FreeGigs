import styled from "styled-components";
import NavigationBar from "../../SharedComponents/NavigationBar";
import home from "../../../assets/home.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 500px;
  width: 100%;
  background-color: #faf6f3;
  position: relative;
`;

const RowContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 100px;
  display: flex;
  flex-direction: row;
`;

const ColumnContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const SubtitleContainer = styled.div`
  height: 30px;
  width: 200px;
  border-radius: 10px;
  background-color: #e5e8df;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: #507456;
  font-weight: 800;
`;

const TitleContainer = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 50px;
  margin-top: 20px;
  color: black;
  font-weight: 800;
  line-height: 120%;
`;

const LowerSubtitleContainer = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 800;
  margin-top: 20px;
`;

const ImageContainer = styled.img`
  height: 450px;
  width: 300px;
  object-fit: cover;
  position: absolute;
  right: 200px;
  bottom: 0px;
`;

const SearchRowForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const TextFieldInput = styled.input`
  height: 37.5px;
  width: 75%;
  background-color: white;
  border-radius: 20px 10px 10px 20px;
  padding: 0 0 0 20px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 500;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
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

const SearchButton = styled.button`
  height: 37.5px;
  width: 100px;
  background-color: #3f6745;
  border-radius: 10px 20px 20px 10px;
`;

const SearchText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: white;
  font-weight: 700;
`;

const SearchContainer = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <NavigationBar />

      <RowContainer>
        <ColumnContainer>
          <SubtitleContainer>Looking for a service</SubtitleContainer>
          <TitleContainer>Explore more than 7000+ services here</TitleContainer>
          <LowerSubtitleContainer>
            Experience the freelance services - and finding the right employee
            for your startups.
          </LowerSubtitleContainer>

          <SearchRowForm>
            <TextFieldInput placeholder="Search a service" />
            <Link to={"/searchresult/" + user._id}>
              <SearchButton>
                <SearchText>Search</SearchText>
              </SearchButton>
            </Link>
          </SearchRowForm>
        </ColumnContainer>

        <ImageContainer src={home} />
      </RowContainer>
    </Container>
  );
};

export default SearchContainer;
