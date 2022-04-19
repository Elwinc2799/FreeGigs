import styled from "styled-components";
import NavBar from "./NavBar";
import { BsSearch } from "react-icons/bs";

const Container = styled.div`
  height: 700px;
  width: 100%;
  position: relative;
`;

const BackgroundDecoration = styled.div`
  height: 95%;
  width: 50%;
  background-color: #f6f8ff;
  z-index: -2;
  position: absolute;
  border-radius: 0px 0px 450px 450px;
`;

const TitleContainer = styled.div`
  height: 60%;
  width: 50%;
  margin-left: 100px;
  z-index: -1;
  padding-top: 125px;
  position: absolute;
`;

const SubtitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 27.5px;
  color: black;
  font-weight: 600;
`;

const TitleText = styled.div`
  margin-top: 25px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 75px;
  color: black;
  font-weight: 900;
`;

const HighlightedText = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 75px;
  color: #6895e7;
  font-weight: 900;
`;

const SearchBarContainer = styled.div`
  height: 75px;
  width: 50%;
  padding: 20px;
  background-color: #fefefe;
  margin: 0px 200px;
  position: absolute;
  bottom: 130px;
  left: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const SearchBarText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
`;

const SearchButton = styled.div`
  height: 40px;
  width: 150px;
  background-color: #f6f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const SearchText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: #7f94dc;
  font-weight: 700;
`;

const HomeContainer = () => {
  return (
    <Container>
      <BackgroundDecoration />
      <NavBar />

      <TitleContainer>
        <SubtitleText>No longer looking for a freelance</SubtitleText>
        <TitleText>
          Sign up & let your job <HighlightedText>find</HighlightedText> you
        </TitleText>
      </TitleContainer>

      <SearchBarContainer>
        <BsSearch size="25px" />
        <SearchBarText>Search a service here</SearchBarText>
        <SearchButton>
          <SearchText>Search</SearchText>
        </SearchButton>
      </SearchBarContainer>
    </Container>
  );
};

export default HomeContainer;
