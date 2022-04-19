import styled from "styled-components";
import NavigationBar from "../../SharedComponents/NavigationBar";

const Container = styled.div`
  height: 600px;
  width: 100%;
  position: relative;
`;

const UserProfileContainer = styled.div`
  height: 400px;
  width: 650px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-top: 30px;
  padding-left: 50px;
  justify-content: center;
  align-items: center;
`;

const AdditionalDetailContainer = styled.div`
  height: 400px;
  width: 650px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-left: 50px;
  padding-top: 30px;
  padding-left: 50px;
  justify-content: center;
  align-items: center;
`;

const BackgroundDecoration = styled.div`
  height: 95%;
  width: 50%;
  background-color: #f6f8ff;
  z-index: -2;
  position: absolute;
  border-radius: 0px 0px 450px 450px;
`;

const BoxTitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 27.5px;
  color: black;
  font-weight: 700;
`;

const EmptyBox = styled.div`
  height: 41px;
`;

const TitleText = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 35px;
  color: black;
  font-weight: 800;
  padding-left: 100px;
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
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  position: relative;
`;

const TopRow = styled.div`
  width: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
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
  background-color: #FFFFFF;
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

const LogoInput = styled.input`
  position: relative;
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 500;
  width: 250px;
  margin-top: 10px;
  text-align: center;
  ::-webkit-file-upload-button {
  height: 37.5px;
  background: #FFFFFF;
  color: #CCC;
  border-radius: 5px;
  border: ${(props) => (props.error ? "1.5px solid red" : "1px solid #CCC")};
  padding: 20 20 20 20px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.currentUser ? "#f5f9fc" : "#F5F5F5")};
    border: 1px solid grey;
    color: grey;
    transition: 0.5s;
  }
  }
`;

const TopContainer = ({name, university, setName, setUniversity, contacts, setContacts, major, setMajor, isRegister,
                      languages, setLanguages, skills, setSkills, location, setLocation, email, setEmail}) => {
    return (
        <Container>
          <BackgroundDecoration />
          <NavigationBar />
          
          <TitleText>{isRegister ? "Create Profile" : "Edit Profile"}</TitleText>
          
          <TopRow>
            <UserProfileContainer>
              <RowContainer>
                <ColumnContainer>
                  <BoxTitleText>User Profile</BoxTitleText>
                  <TextFieldLabel>Name</TextFieldLabel>
                  <TextFieldInput
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <TextFieldLabel>Location</TextFieldLabel>
                  <TextFieldInput
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />

                  <TextFieldLabel>Email</TextFieldLabel>
                  <TextFieldInput
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </ColumnContainer>
                
                <ColumnContainer>
                  <EmptyBox/> 
                  <TextFieldLabel>Banner Image</TextFieldLabel>
                  <LogoInput type="file" accept="image/png, image/jpeg" />

                  <TextFieldLabel>Profile Image</TextFieldLabel>
                  <LogoInput type="file" accept="image/png, image/jpeg" />

                  <TextFieldLabel>Contacts</TextFieldLabel>
                  <TextFieldInput
                    placeholder="Enter your contacts"
                    value={contacts}
                    onChange={(e) => setContacts(e.target.value)}
                  />
                </ColumnContainer>
              </RowContainer>  
            </UserProfileContainer>

            <AdditionalDetailContainer>
             <RowContainer>
                <ColumnContainer>
                  <BoxTitleText>Additional Details</BoxTitleText>
                  <TextFieldLabel>University</TextFieldLabel>
                  <TextFieldInput
                    placeholder="Enter your university"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                  />

                  <TextFieldLabel>Major</TextFieldLabel>
                  <TextFieldInput
                    placeholder="Enter your major"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                  />

                  <TextFieldLabel>Languages</TextFieldLabel>
                  <TextFieldInput
                    placeholder="Enter your languages"
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                  />
                </ColumnContainer>
                
                <ColumnContainer>
                  <EmptyBox/> 
                  <TextFieldLabel>Skills</TextFieldLabel>
                  <TextFieldInput
                    placeholder="Enter your skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />

                </ColumnContainer>
              </RowContainer>
            </AdditionalDetailContainer>

          </TopRow>

        </Container>
      );
};

export default TopContainer;