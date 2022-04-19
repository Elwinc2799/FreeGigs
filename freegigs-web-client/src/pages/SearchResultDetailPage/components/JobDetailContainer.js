import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 620px;
  width: 30%;
  padding-bottom: 30px;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-color: grey;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const BackgroundContainer = styled.div`
  height: 160px;
  width: 100%;
  color: black;
  position: relative;
`;

const ContextColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 165px;
`;

const LogoContainer = styled.div`
  height: 100px;
  width: 100px;
  padding-top: 12.5px;
  padding-left: 12.5px;
  background-color: #F4F5FF;
  box-shadow: rgba(172, 180, 236, 0.5) 2px 3px 8px 3px;
  border-radius: 10px;
`;

const LogoImage = styled.img`
  height: 75px;
  width: 75px;
  object-fit: cover;
  border-radius: 10px;
`;

const Line = styled.div`
  height: 1px;
  border-top: 1.5px solid #ADB2DA;
  margin: 10px 30px 5px 30px;
`;

const TitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22.5px;
  color: black;
  font-weight: 700;
  padding-top: 15px;
  padding-left: 35px;
`;

const SubTitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: #5C5C5C;
  font-weight: 600;
  padding-left: 35px;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
`;

const ColumnHeader = styled.div`
  width: 100%;
  padding-right: 25px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  align-items: flex-start;
  justify-content: start;
  text-align: justify;
  text-justify: inter-word;
`;

const CategoriesBar = styled.div`
  height: 25px;
  width: 100px;
  margin-top: 10px;
  margin-right: 10px;
  padding-top: 5px;
  background-color: #E6E9FE;
  border: 1px solid #BCC1E8;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align:center;
`;

const TypeText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 10px;
  color: #EC7931;
  font-weight: 700;
`;

const PriceText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 10px;
  color: #9295E3;
  font-weight: 700;
`;

const SubText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: #5C5C5C;
  font-weight: 600;
`;

const Text = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 17.5px;
  color: black;
  font-weight: 700;
`;

const TextContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  color: ${(props) => (props.isSelected ? "black" : "#B0B0B0")};
  display: flex;
  flex-direction: column;
`;

const ContactButton = styled.button`
  height: 25px;
  width: 80px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 45px;
  background-color: black;
  border-radius: 5px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 10px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;


const JobDetailContainer = ({currentServices}) => {
  const user = useSelector((state) => state.user.currentUser);
  const [provider, setProvider] = useState({});
  const [providerDetails, setProviderDetails] = useState({});
  const navigate = useNavigate();

  const handleOnMessage = async () => {
    const data = {
      receiverID: provider._id,
    };

    const headers = {
      token: `Bearer ${user.accessToken}`,
    };

    try {
      const res = await axios.post(
        "https://freegigs.herokuapp.com/conversations/" + user._id,
        data,
        {
          headers,
        }
      );
      
      if (res.status === 201 || res.status === 203) 
        navigate(`/chat/${user._id}`)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const getProvider = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/users/" + currentServices?.userID,
        );
        setProvider(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    const getProviderInfo = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/additional/" + currentServices?.userID,
        );

        setProviderDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (currentServices) {
      getProvider();
      getProviderInfo();
    }
  }, [currentServices])

    return (
        <Container>
            {
              currentServices 
              ? <>
              <BackgroundContainer>
              <ContextColumn>
                <LogoContainer>
                  <LogoImage src={currentServices?.icon}/>
                </LogoContainer>
              </ContextColumn>
            </BackgroundContainer>
            <ColumnHeader>
              <TitleText>{currentServices?.name}</TitleText>
              <SubTitleText>By {provider?.name}</SubTitleText>
            </ColumnHeader>
      
            <Line/>

            <ColumnContainer>
              <RowContainer>
                <CategoriesBar>
                  <TypeText>{currentServices?.category}</TypeText>
                </CategoriesBar>
                <CategoriesBar>
                  <PriceText>RM {currentServices?.price}</PriceText>
                </CategoriesBar>
                <ContactButton onClick={handleOnMessage}>Contact Me</ContactButton>
              </RowContainer>

              <RowContainer>
                <TextContainer>
                  <Text>Education</Text>
                  <SubText>{providerDetails?.university}</SubText>
                  <SubText>{providerDetails?.major}</SubText>
                </TextContainer>

                <TextContainer>
                  <Text>Contacts</Text>
                  <SubText>{providerDetails?.contacts}</SubText>
                </TextContainer>
              </RowContainer>

              <RowContainer>
                <TextContainer>
                  <Text>Language</Text>
                  {
                    providerDetails?.languages?.map((providerLanguage) => (
                      <SubText key={providerLanguage}>{providerLanguage}</SubText>

                    ))
                  }
                </TextContainer>

                <TextContainer>
                  <Text>Skills</Text>
                  {
                    providerDetails?.skills?.map((providerSkill) => (
                      <SubText key={providerSkill}>{providerSkill}</SubText>

                    ))
                  }
                </TextContainer>
              </RowContainer>              
            </ColumnContainer>
            <Line/>

            <ColumnContainer>
              <TextContainer>
                <Text>Description</Text>
                <SubText>{currentServices?.description}</SubText>
              </TextContainer>        
            </ColumnContainer>
            </>
            : <div></div>


            
            }
        </Container>
      );
};

export default JobDetailContainer;