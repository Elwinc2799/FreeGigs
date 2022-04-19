import styled from "styled-components";
import OverviewWallpaper from "../../../assets/overview-wallpaper.jpg";
import ApproachesContainer from "./ApproachesContainer";
import SalesContainer from "./SalesContainer";
import EarningsContainer from "./EarningsContainer";
import { HistoryData } from "../../HistoryPage/Components/HistoryData";
import { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const WallpaperContainer = styled.div`
  padding: 20px 40px 20px 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 40px;
  width: 100%;
  height: 240px;
  position: relative;
`;

const Image = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Message1 = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 40px;
  color: #ffffff;
  font-weight: 600;
`;

const Message2 = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 25px;
  color: #ffffff;
  font-weight: 400;
  margin-bottom: 10%;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 30px;
  width: 180px;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`;

const ButtonText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 700;
`;

const DashboardTitle = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 28px;
  color: black;
  font-weight: 700;
  margin-bottom: 0px;
`;

const DashboardRow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const OverviewContainer = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [allData, setAllData] = useState([]);
  const [currentSales, setCurrentSales] = useState();
  const [totalSales, setTotalSales] = useState();

  const COLORS = [
    "#ff6b6b",
    "#ffa66b",
    "#ffdf6b",
    "#dcff6b",
    "#8eff6b",
    "#6bffcb",
    "#6bdfff",
    "#6b95ff",
    "#846bff",
    "#cb6bff",
    "#ff6be6",
    "#ff6bb3",
  ];
  useEffect(() => {
    var lookup = {};
    var total = {};
    var results = [];
    var datas = [];
    var currentSales = 0;
    var totalSales = 0;
    var month = moment().month();
    var year = moment().year();

    for (var item, i = 0; (item = HistoryData[i++]); ) {
      var name = item.service;

      if (!(name in lookup)) {
        lookup[name] = 1;
        total[name] = 0;
        results.push(name);
      }
    }

    for (var data, k = 0; (data = HistoryData[k++]); ) {
      if (moment(data.date, "YYYY-MM-DD").year() === year - 1) {
        totalSales = totalSales + data.price;
        total[data.service] = total[data.service] + data.price;
      }
      if (
        moment(data.date, "YYYY-MM-DD").year() === year &&
        moment(data.date, "YYYY-MM-DD").month() === month
      ) {
        currentSales = currentSales + data.price;
      }
    }
    setCurrentSales(currentSales);
    setTotalSales(totalSales);

    for (var j = 0; j < results.length; j++) {
      var obj = {
        name: results[j],
        value: total[results[j]],
        color: COLORS[j],
      };
      datas.push(obj);
    }
    setAllData(datas);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container>
        <WallpaperContainer>
          <Image src={OverviewWallpaper} />
          <Message1>Your new freelancing workspace</Message1>
          <Message2>Get started by adding a new service now</Message2>
          <Link to={"/addservice/" + user._id}>
            <AddButton>
              <ButtonText>Add Services</ButtonText>
            </AddButton>
          </Link>
        </WallpaperContainer>
        <DashboardTitle>Dashboard</DashboardTitle>
        <DashboardRow>
          <ApproachesContainer />
          <SalesContainer currentSales={currentSales} totalSales={totalSales} />
          <EarningsContainer allData={allData} />
        </DashboardRow>
      </Container>
    </>
  );
};

export default OverviewContainer;
