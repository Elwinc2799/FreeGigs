import React from 'react'
import styled from "styled-components";
import JobListContainer from './JobListContainer';
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  height: 720px;
  width: 55%;
  background-color: #F8F4FC;
  padding-top: 25px;
  padding-left: 40px;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-color: grey;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const SearchDeco = styled.div`
  width: 90%;
  height: 40px;
  padding-top: 8px;
  padding-left: 25px;
  background-color: white;
  border-radius: 20px 0px 0px 20px;
  text-align: start;
  align-items: center;
`;

const SearchIcon = styled.div`
  width: 10%;
  height: 40px;
  padding-top: 10px;
  padding-left: 25px;
  margin-bottom: 30px;
  margin-right: 30px;
  background-color: #5362fb;
  border-radius: 0px 20px 20px 0px;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: #858585;
  font-weight: 500;
`;


const JobList = ({serviceData, setCurrentServices, currentServices}) => {  

    return (
        <Container>
            <RowContainer>
                <SearchDeco>
                    <Text>Search by Category, Company or ...</Text>
                </SearchDeco>
                <SearchIcon><FaSearch color="white"/></SearchIcon>

            </RowContainer>
            {
                serviceData.map((data) => (
                    <JobListContainer key={data._id} data={data} setCurrentServices={setCurrentServices} currentServices={currentServices}/>
                ))
            }
        </Container>
    )
}

export default JobList
