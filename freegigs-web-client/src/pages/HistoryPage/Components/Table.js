import styled from "styled-components";
import ColumnTitleBar from "./ColumnTitleBar";
import { HistoryData } from "./HistoryData";
import HistoryRow from "./HistoryRow";
import { useState, useEffect } from "react";
import moment from "moment";

const Container = styled.div`
  width: 100%;
  height: 425px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: white;
  border-radius: 20px;
  padding: 10px 23px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 5px;
`;

const HistoryColumn = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SaveButton = styled.button`
  width: 80px;
  height: 40px;
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 50px;
  margin: 12.5px 0px;
  background-color: black;
`;

const SaveButtonText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: white;
  font-weight: 600;
`;

const LOCAL_STORAGE_KEY = "historyData";

const Table = ({ statusFilValue, serviceFilValue, monthFilValue }) => {
  const [historyData, setHistoryData] = useState(HistoryData);
  const [initialCheckStatus, setInitialCheckStatus] = useState(
    Array(HistoryData.length).fill(false)
  );
  const [found, setFound] = useState();

  useEffect(() => {
    const storedHistoryData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storedHistoryData) setHistoryData(storedHistoryData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(historyData));
  }, [historyData]);

  function toggleCheckBox(id) {
    const newHistoryData = [...historyData];
    const newInitialCheckStatus = [...initialCheckStatus];
    const history = newHistoryData.find((history) => history.id === id);
    history.status = !history.status;
    newInitialCheckStatus[history.id - 1] =
      !newInitialCheckStatus[history.id - 1];
    setInitialCheckStatus(newInitialCheckStatus);
    setHistoryData(newHistoryData);
  }

  useEffect(() => {
    const temp = initialCheckStatus.find((element) => element === true)
      ? true
      : false;
    if (temp) {
      setFound(true);
    } else {
      setFound(false);
    }
  }, [initialCheckStatus]);

  function handleSave() {
    const newCheckStatus = [...initialCheckStatus];
    for (let i = 0; i < newCheckStatus.length; i++) {
      newCheckStatus[i] = false;
    }
    setInitialCheckStatus([...newCheckStatus]);
    window.location.reload(false);
  }

  function filterFunction(data) {
    if (statusFilValue === null && !serviceFilValue && !monthFilValue) {
      return true;
    } else {
      const status = statusFilValue !== null ? statusFilValue : "";
      const service = serviceFilValue ? serviceFilValue : "";
      const month = monthFilValue ? monthFilValue[0] : "";
      const year = monthFilValue ? monthFilValue[1] : "";

      if (statusFilValue !== null && serviceFilValue && monthFilValue) {
        return (
          data.status === status &&
          data.service === service &&
          moment(data.date, "YYYY-MM-DD").month() === month &&
          moment(data.date, "YYYY-MM-DD").year() === year
        );
      } else if (statusFilValue === null && serviceFilValue && monthFilValue) {
        return (
          data.service === service &&
          moment(data.date, "YYYY-MM-DD").month() === month &&
          moment(data.date, "YYYY-MM-DD").year() === year
        );
      } else if (statusFilValue !== null && !serviceFilValue && monthFilValue) {
        return (
          data.status === status &&
          moment(data.date, "YYYY-MM-DD").month() === month &&
          moment(data.date, "YYYY-MM-DD").year() === year
        );
      } else if (statusFilValue !== null && serviceFilValue && !monthFilValue) {
        return data.status === status && data.service === service;
      } else if (statusFilValue !== null) {
        return data.status === status;
      } else if (serviceFilValue) {
        return data.service === service;
      } else if (monthFilValue) {
        return (
          moment(data.date, "YYYY-MM-DD").month() === month &&
          moment(data.date, "YYYY-MM-DD").year() === year
        );
      }
    }
  }

  return (
    <Container>
      <ColumnTitleBar />
      <HistoryColumn>
        {historyData
          .filter((data) => filterFunction(data))
          .map((history) => (
            <HistoryRow
              history={history}
              key={history.id}
              toggleCheckBox={toggleCheckBox}
              initialCheckStatus={initialCheckStatus[history.id]}
            />
          ))}
      </HistoryColumn>
      {found && (
        <SaveButton onClick={handleSave}>
          <SaveButtonText>Save</SaveButtonText>
        </SaveButton>
      )}
    </Container>
  );
};

export default Table;
