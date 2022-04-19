import styled from "styled-components";
import NavigationBar from "../SharedComponents/NavigationBar";
import AdditionalDetailContainer from "./components/AdditionalDetailContainer";
import UserProfileContainer from "./components/UserProfileContainer";
import { useState, useEffect } from "react";
import TabBar from "./components/TabBar";
import UserOverviewContainer from "./components/UserOverviewContainer";
import UserServicesContainer from "./components/UserServicesContainer";
import UserReviewsContainer from "./components/UserReviewsContainer";
import UserHistoryContainer from "./components/UserHistoryContainer";
import { useSelector } from "react-redux";
import axios from "axios";

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px 100px;
`;

const Column = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  height: 450px;
  width: 850px;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InnerContainer = styled.div`
  height: 400px;
  width: 850px;
  border: 1px solid #e6e9ec;
  border-radius: 30px;
`;

const UserPage = () => {
  const user = useSelector((state) => state.user.currentUser);
  const isProvider = user.isProvider;
  const [select, setSelect] = useState("OVERVIEW");
  const [additional, setAdditional] = useState({});

  const handleOnChange = (newSelect) => {
    setSelect(newSelect);
  };

  useEffect(() => {
    const headers = {
      token: `Bearer ${user.accessToken}`,
    };

    const getUser = async () => {
      try {
        const res = await axios.get(
          "https://freegigs.herokuapp.com/additional/" + user._id,
          {
            headers,
          }
        );
        setAdditional(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, [user._id, user.accessToken]);

  return (
    <>
      <NavigationBar />
      <Row>
        <Column>
          <UserProfileContainer user={user} additional={additional} />
          <Container>
            {isProvider && (
              <TabBar select={select} handleOnChange={handleOnChange} />
            )}

            <InnerContainer>
              {select === "OVERVIEW" && isProvider && (
                <UserOverviewContainer user={user} additional={additional} />
              )}
              {select === "SERIVCES" && isProvider && (
                <UserServicesContainer user={user} additional={additional} />
              )}
              {select === "REVIEWS" && isProvider && (
                <UserReviewsContainer user={user} />
              )}
              {!isProvider && <UserHistoryContainer />}
            </InnerContainer>
          </Container>
        </Column>

        <AdditionalDetailContainer additional={additional} />
      </Row>
    </>
  );
};

export default UserPage;
