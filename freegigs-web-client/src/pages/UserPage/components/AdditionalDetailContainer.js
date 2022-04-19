import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 350px;
  border: 1px solid #e6e9ec;
  border-radius: 30px;
  margin: 50px 0px 0px 75px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22.5px;
  color: black;
  font-weight: 700;
`;

const DetailsLabel = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: #bfc3d2;
  font-weight: 700;
  margin-top: 25px;
`;

const DetailsText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
  margin-top: 5px;
`;

const SkillsText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ColoredContainer = styled.div`
  height: 25px;
  width: ${(props) => props.length * 9.25}px;
  background-color: #f5f5f8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 0px 0px;
`;

const AdditionalDetailContainer = ({ additional }) => {
  return (
    <Container>
      <TitleText>Additional Details</TitleText>

      <DetailsLabel>EDUCATION</DetailsLabel>
      <DetailsText>{additional.university}</DetailsText>
      <DetailsText>{additional.major}</DetailsText>

      <DetailsLabel>SKILLS</DetailsLabel>
      <SkillsRow>
        {additional.skills?.map((skill) => (
          <ColoredContainer length={`${skill}`.length} key={skill}>
            <SkillsText>{skill}</SkillsText>
          </ColoredContainer>
        ))}
      </SkillsRow>

      <DetailsLabel>LANGUAGES</DetailsLabel>
      <DetailsText>English, Chinese, Malay</DetailsText>
    </Container>
  );
};

export default AdditionalDetailContainer;
