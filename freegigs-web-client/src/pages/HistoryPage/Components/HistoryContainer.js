import styled from "styled-components";
import FilterContainer from "./FilterContainer";
import Table from "./Table";
import { useState} from "react";

const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TitleBar = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 30px;
  color: black;
  font-weight: 700;
  margin: 10px 0px 10px 0px;
`;

const HistoryContainer = () => {
  const [statusFilValue, setStatusFilValue] = useState(null);
  const [serviceFilValue, setServiceFilValue] = useState(null);
  const [monthFilValue, setMonthFilValue] = useState(null);

  return (
    <Container>
      <TitleBar>History</TitleBar>
      <FilterContainer
        statusFilValue={statusFilValue}
        serviceFilValue={serviceFilValue}
        monthFilValue={monthFilValue}
        setStatusFilValue={setStatusFilValue}
        setServiceFilValue={setServiceFilValue}
        setMonthFilValue={setMonthFilValue}
      />
      <Table
        statusFilValue={statusFilValue}
        serviceFilValue={serviceFilValue}
        monthFilValue={monthFilValue}
      />
    </Container>
  );
};

export default HistoryContainer;
