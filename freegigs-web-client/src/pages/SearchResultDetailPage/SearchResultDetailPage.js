import styled from "styled-components";
import FilterContainer from "./components/FilterContainer";
import JobDetailContainer from "./components/JobDetailContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import JobList from "./components/JobList";

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
`;

const SearchResultDetailPage = () => {

  const [service, setService] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [serviceList, setServiceList] = useState([]);
  const [currentServices, setCurrentServices] = useState("");

  useEffect(() => {
    const getServices = async () => {
      try {
        
        const  res = await axios.get(
            "https://freegigs.herokuapp.com/services/",
          );
  
        setServiceList(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getServices();
  }, [service, minPrice, maxPrice])

  const handleOnFilter = async () => {
    let res;

    try {
      if (service !== "" && minPrice !== 0) {
        res = await axios.get(
          `https://freegigs.herokuapp.com/services/?category=${service}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        );

      } else if (minPrice !== 0) {
        res = await axios.get(
          `https://freegigs.herokuapp.com/services/?category=${service}`,
        );

      } else {
        res = await axios.get(
          `https://freegigs.herokuapp.com/services/?minPrice=${minPrice}&maxPrice=${maxPrice}`,
        );

      }
      setServiceList(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <RowContainer>
        <FilterContainer setService={setService} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} handleOnFilter={handleOnFilter}/>
        <JobList serviceData={serviceList} setCurrentServices={setCurrentServices} currentServices={currentServices}/>
        <JobDetailContainer currentServices={currentServices}/>
      </RowContainer>
      
    </>
  );
};

export default SearchResultDetailPage;
