import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const TitleHeader = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22.5px;
  color: black;
  font-weight: 700;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
  text-align: justify;
`;

const UserOverviewContainer = ({ user, additional }) => {
  return (
    <Container>
      <TitleHeader>About {user.name}</TitleHeader>
      <ContentContainer>{additional.description}</ContentContainer>
    </Container>
  );
};

export default UserOverviewContainer;
