import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 850px;
  height: 300px;
  margin-top: 50px;
  border: 1px solid #e6e9ec;
  border-radius: 30px;
  position: relative;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 3px solid white;
  position: absolute;
  border-radius: 50%;
  top: 50px;
  left: 50px;
`;

const UpperRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
`;

const ProfileDetails = styled.div`
  height: 50%;
  width: 65%;
  display: flex;
  flex-direction: column;
  margin-left: 35%;
`;

const ProfileName = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 27.5px;
  color: black;
  font-weight: 700;
  margin-top: 10px;
`;

const EditColoredContainer = styled.button`
  height: 25px;
  width: 130px;
  background-color: #f5f5f8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  cursor: pointer;
`;

const ColoredContainer = styled.div`
  height: 25px;
  width: ${(props) => props.length * 9.25}px;
  background-color: #f5f5f8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const DetailsLabel = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
`;

const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const InnerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const DetailsCategory = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: #bfc3d2;
  font-weight: 700;
`;

const UserProfileContainer = ({ user, additional }) => {
  return (
    <Container>
      <ImageContainer
        src={
          additional.bannerImage === ""
            ? "https://images.unsplash.com/photo-1542219550-76864b1bc385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80"
            : additional.bannerImage
        }
      />
      <ProfileImage
        src={
          additional.profileImage === ""
            ? "https://images.unsplash.com/photo-1485811843447-c0989c7b9aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
            : additional.profileImage
        }
      />

      <ProfileDetails>
        <UpperRow>
          <ProfileName>{user.name}</ProfileName>
          <Link to={"/edituser/" + user._id}>
            <EditColoredContainer>
              <DetailsLabel>Edit Profile</DetailsLabel>
            </EditColoredContainer>
          </Link>
        </UpperRow>

        <ColoredContainer length={`${additional.location}`.length}>
          <DetailsLabel>{additional.location}</DetailsLabel>
        </ColoredContainer>

        <DetailsRow>
          <InnerColumn>
            <DetailsCategory>EMAIL</DetailsCategory>
            <DetailsLabel>{user.email}</DetailsLabel>
          </InnerColumn>

          <InnerColumn>
            <DetailsCategory>CONTACTS</DetailsCategory>
            <DetailsLabel>{additional.contacts}</DetailsLabel>
          </InnerColumn>
        </DetailsRow>
      </ProfileDetails>
    </Container>
  );
};

export default UserProfileContainer;
