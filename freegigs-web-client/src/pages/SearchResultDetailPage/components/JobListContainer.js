import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const JobTitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: ${(props) => (props.isSelected ? "black" : "#B0B0B0")};
  font-weight: 700;
`;

const SubText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: ${(props) => (props.isSelected ? "black" : "#B0B0B0")};
  font-weight: 600;
`;

const DetailsText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  padding-left: 10px;
  padding-right: 20px;
  color: ${(props) => (props.isSelected ? "black" : "#B0B0B0")};
  font-weight: 500;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
`;

const SubRowContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5px;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

const JobButton = styled.button`
  display: flex;
  height: 160px;
  width: 95%;
  background-color: white;
  padding-left: 50px;
  padding-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: ${(props) => (props.isSelected ? "2px solid #8c94dc" : "2px solid #DFE2F9")};
  box-shadow: ${(props) => (props.isSelected ? "rgba(172, 180, 236, 0.5) 0px 4px 12px 2px" : " ")};
  align-items: flex-start;
  justify-content: start;
  position: relative;
  transition: ease-in background-color 200ms;
  &:hover {
    background-color: white;
    border: 2px solid #8c94dc;
    transition: 0.5s;
  }
`;

const LogoContainer = styled.div`
  height: 80px;
  width: 85px;
  padding-top: 5px;
  padding-left: 3.5px;
  border: 2px solid #BCC1E8;
  background-color: white;
  border-radius: 10px;
`;

const LogoImage = styled.img`
  height: 65px;
  width: 65px;
  object-fit: cover;
  border-radius: 10px;
`;

const CategoriesBar = styled.div`
  height: 25px;
  width: 120px;
  margin-top: 10px;
  margin-right: 10px;
  padding-top: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #E6E9FE;
  border: 1px solid #BCC1E8;
  border-radius: 10px;
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

const JobListContainer = ({setCurrentServices, currentServices, data}) => {

  const [provider, setProvider] = useState({});
  const [providerDetails, setProviderDetails] = useState({});

    useEffect(() => {
      const getProvider = async () => {
        try {
          const res = await axios.get(
            "https://freegigs.herokuapp.com/users/" + data?.userID,
          );
          setProvider(res.data);
        } catch (err) {
          console.log(err);
        }
      }

      const getProviderInfo = async () => {
        try {
          const res = await axios.get(
            "https://freegigs.herokuapp.com/additional/" + data?.userID,
          );
  
          setProviderDetails(res.data);
        } catch (err) {
          console.log(err);
        }
      };
  
        getProvider();
        getProviderInfo();
  
    }, [data?.userID])

    return (
              <JobButton onClick={() => setCurrentServices(data)} isSelected={currentServices._id === data._id}>
                <RowContainer>
                  <LogoContainer>
                      <LogoImage src={data?.icon}/>
                  </LogoContainer>
                  <ColumnContainer >
                      <JobTitleText isSelected={currentServices._id === data._id}>{data?.name}</JobTitleText>
                      <SubText isSelected={currentServices._id === data._id}>{provider?.name}</SubText>
                      <SubRowContainer>
                        <FaMapMarkerAlt color="#717175"/>
                        <DetailsText isSelected={currentServices._id === data._id}>{providerDetails?.location}</DetailsText>
                        <FaEnvelope  color="#717175"/>
                        <DetailsText isSelected={currentServices._id === data._id}>{provider?.email}</DetailsText>
                      </SubRowContainer>
                
                <RowContainer>
                  <CategoriesBar isSelected={currentServices._id === data._id}>
                    <TypeText>{data?.category}</TypeText>
                  </CategoriesBar>
                  <CategoriesBar isSelected={currentServices._id === data._id}>
                    <PriceText>RM {data?.price}</PriceText>
                  </CategoriesBar>
                </RowContainer>
              </ColumnContainer>
              </RowContainer>
              </JobButton>
            
      );
};

export default JobListContainer;