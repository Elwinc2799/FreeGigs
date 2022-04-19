import { useState, useEffect } from "react";
import styled from "styled-components";
import ExpandArrow from "../../../assets/expand-arrow.png";
import { HistoryData } from "./HistoryData";
import moment from "moment";

const Container = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const FilterMenu = styled.button`
  width: 300px;
  height: 54px;
  background-color: #f4f4f4;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-left: 10px;
  margin-right: 10px;
`;

const FilterDisplayRow = styled.div`
  width: 300px;
  height: 54px;
  background-color: #f4f4f4;
  border-radius: ${(props) => (props.expand ? `0px` : `30px`)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px 15px 35px;
  margin: 0px 50px;
  z-index: 1;
`;

const FilterTitle = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  color: black;
  font-weight: 600;
`;

const LogoContainer = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 20px;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: cover;
`;

const FilterContainer = ({
  statusFilValue,
  serviceFilValue,
  monthFilValue,
  setStatusFilValue,
  setServiceFilValue,
  setMonthFilValue,
}) => {
  const status = [true, false];
  const [statusExpand, setStatusExpand] = useState(false);

  const [service, setService] = useState([]);
  const [serviceExpand, setServiceExpand] = useState(false);

  const [month, setMonth] = useState([]);
  const [monthExpand, setMonthExpand] = useState(false);

  function handleStatusExpand() {
    setStatusExpand(!statusExpand);
  }

  useEffect(() => {
    var lookup = {};
    var items = HistoryData;
    var result = [];

    for (var item, i = 0; (item = items[i++]); ) {
      var name = item.service;

      if (!(name in lookup)) {
        lookup[name] = 1;
        result.push(name);
      }
    }
    const res = result;
    setService(res);
  }, []);

  function handleServiceExpand() {
    setServiceExpand(!serviceExpand);
  }

  useEffect(() => {
    var lookup = {};
    var items = HistoryData;
    var result = [];

    for (var item, i = 0; (item = items[i++]); ) {
      var month = moment(item.date, "YYYY-MM-DD").month();
      var year = moment(item.date, "YYYY-MM-DD").year();
      var monthYear = [month, year];

      if (!(monthYear in lookup)) {
        lookup[monthYear] = 1;
        result.push(monthYear);
      }
    }
    const res = result;
    setMonth(res);
  }, []);

  function handleMonthExpand() {
    setMonthExpand(!monthExpand);
  }

  function handleCloseExpand(){
    setStatusExpand(false)
    setServiceExpand(false)
    setMonthExpand(false)
  }

  return (
    <Container>
      <FilterMenu onClick={handleStatusExpand} onBlur={handleCloseExpand}>
        {statusExpand ? (
          <>
            {status.map((data, index) => {
              return (
                <FilterDisplayRow
                  key={data}
                  style={
                    index === 0
                      ? { borderRadius: "30px 30px 0px 0px" }
                      : index === 1
                      ? { borderRadius: "0px 0px 30px 30px" }
                      : { borderRadius: "0px" }
                  }
                  statusExpand={statusExpand}
                  onClick={() => setStatusFilValue(data)}
                >
                  <FilterTitle>{data ? "Done" : "On-going"}</FilterTitle>
                </FilterDisplayRow>
              );
            })}
          </>
        ) : (
          <FilterDisplayRow>
            <FilterTitle>
              {statusFilValue === null
                ? "Status"
                : statusFilValue
                ? "Done"
                : "On-going"}
            </FilterTitle>
            <LogoContainer>
              <Logo src={ExpandArrow} />
            </LogoContainer>
          </FilterDisplayRow>
        )}
      </FilterMenu>

      <FilterMenu onClick={handleServiceExpand} onBlur={handleCloseExpand}>
        {serviceExpand ? (
          <>
            {service.map((data, index) => {
              return (
                <FilterDisplayRow
                  key={data}
                  style={
                    index === 0
                      ? { borderRadius: "30px 30px 0px 0px" }
                      : index === service.length - 1
                      ? { borderRadius: "0px 0px 30px 30px" }
                      : { borderRadius: "0px" }
                  }
                  serviceExpand={serviceExpand}
                  onClick={() => setServiceFilValue(data)}
                >
                  <FilterTitle>{data}</FilterTitle>
                </FilterDisplayRow>
              );
            })}
          </>
        ) : (
          <FilterDisplayRow>
            <FilterTitle>
              {!serviceFilValue ? "Service" : serviceFilValue}
            </FilterTitle>
            <LogoContainer>
              <Logo src={ExpandArrow} />
            </LogoContainer>
          </FilterDisplayRow>
        )}
      </FilterMenu>

      <FilterMenu onClick={handleMonthExpand} onBlur={handleCloseExpand}>
        {monthExpand ? (
          <>
            {month.map((data, index) => {
              const m = moment().month(data[0]).format("MMMM");
              const y = moment().year(data[1]).format("YYYY");
              return (
                <FilterDisplayRow
                  key={data}
                  style={
                    index === 0
                      ? { borderRadius: "30px 30px 0px 0px" }
                      : index === month.length - 1
                      ? { borderRadius: "0px 0px 30px 30px" }
                      : { borderRadius: "0px" }
                  }
                  monthExpand={monthExpand}
                  onClick={() => setMonthFilValue(data)}
                >
                  <FilterTitle>
                    {m} {y}
                  </FilterTitle>
                </FilterDisplayRow>
              );
            })}
          </>
        ) : (
          <FilterDisplayRow>
            <FilterTitle>
              {!monthFilValue
                ? "Month / Year"
                : moment().month(monthFilValue[0]).format("MMMM") +
                  " " +
                  moment().year(monthFilValue[1]).format("YYYY")}
            </FilterTitle>
            <LogoContainer>
              <Logo src={ExpandArrow} />
            </LogoContainer>
          </FilterDisplayRow>
        )}
      </FilterMenu>
    </Container>
  );
};

export default FilterContainer;
