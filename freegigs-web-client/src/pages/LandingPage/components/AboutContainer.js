import styled from "styled-components";
import About from "../../../assets/About.png";
import Express from "../../../assets/express.png";
import MongoDB from "../../../assets/mongodb.png";
import NodeJS from "../../../assets/nodejs.png";
import ReactJS from "../../../assets/reactjs.png";

const Container = styled.div`
  height: 1100px;
  width: 100%;
  padding-left: 100px;
`;

const AboutText = styled.div`
  font-family: "Rajdhani";
  font-size: 80px;
  font-weight: 800;
  opacity: 0.2;
`;

const RowContainer = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ColumnContainer = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const TitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 40px;
  color: black;
  font-weight: 900;
`;

const HighlightedText = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 40px;
  color: #6895e7;
  font-weight: 900;
`;

const SubtitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22.5px;
  color: black;
  font-weight: 500;
  margin-top: 50px;
`;

const BackgroundDecoration = styled.div`
  height: 400px;
  width: 400px;
  background-color: #f6f8ff;
  border-radius: 400px 50px 300px 50px;
  z-index: -1;
  right: 0px;
  position: absolute;
`;

const AboutImage = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
  position: absolute;
  right: 50px;
`;

const FrameworkRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
`;

const FrameworkContainer = styled.div`
  height: 150px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 5px #ccc;
  margin-right: 30px;
`;

const FrameworkImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const FrameworkName = styled.div`
  font-family: "Rajdhani";
  font-size: 25px;
  color: #616160;
  font-weight: 500;
`;

const AboutContainer = () => {
  return (
    <Container>
      <AboutText>About</AboutText>

      <RowContainer>
        <ColumnContainer>
          <TitleText>
            More than 100000 <HighlightedText>people</HighlightedText> engaged
          </TitleText>
          <SubtitleText>
            Do you know how to beat the exciting feeling of having a new
            computer? Making your own!
          </SubtitleText>
          <SubtitleText>
            Here, you could offer your services globally and interconnect with
            others through our platform.
          </SubtitleText>
        </ColumnContainer>

        <ColumnContainer>
          <BackgroundDecoration />
          <AboutImage src={About} />
        </ColumnContainer>
      </RowContainer>

      <RowContainer>
        <ColumnContainer>
          <TitleText>CMT 322: Project</TitleText>
          <SubtitleText>
            This is a project of CMT 322 done by Group 13. The framework used
            are as shown. The stack we used is MERN stack.
          </SubtitleText>

          <FrameworkRow style={{ marginLeft: "315px" }}>
            <FrameworkContainer>
              <FrameworkImage src={MongoDB} />
              <FrameworkName>Mongo DB</FrameworkName>
            </FrameworkContainer>

            <FrameworkContainer>
              <FrameworkImage src={Express} />
              <FrameworkName>Express JS</FrameworkName>
            </FrameworkContainer>
          </FrameworkRow>
        </ColumnContainer>

        <FrameworkRow>
          <FrameworkContainer>
            <FrameworkImage src={ReactJS} />
            <FrameworkName>React JS</FrameworkName>
          </FrameworkContainer>

          <FrameworkContainer>
            <FrameworkImage src={NodeJS} />
            <FrameworkName>Node JS</FrameworkName>
          </FrameworkContainer>
        </FrameworkRow>
      </RowContainer>
    </Container>
  );
};

export default AboutContainer;
