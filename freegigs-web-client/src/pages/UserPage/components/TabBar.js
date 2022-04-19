import styled from "styled-components";

const TabBarRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 100px;
`;

const TabBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TabBarText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
  margin-right: 30px;
  cursor: pointer;
`;

const UnderlinedTabBar = styled.hr`
  border: 0;
  width: 67.5%;
  background-color: black;
  height: 2px;
  position: absolute;
  bottom: -1.5px;
  border-radius: 10px;
`;

const TabBar = ({ select, handleOnChange }) => {
  return (
    <TabBarRow>
      <TabBarContainer>
        <TabBarText onClick={() => handleOnChange("OVERVIEW")}>
          OVERVIEW
        </TabBarText>
        {select === "OVERVIEW" && <UnderlinedTabBar />}
      </TabBarContainer>

      <TabBarContainer>
        <TabBarText onClick={() => handleOnChange("SERIVCES")}>
          SERIVCES
        </TabBarText>
        {select === "SERIVCES" && <UnderlinedTabBar />}
      </TabBarContainer>

      <TabBarContainer>
        <TabBarText onClick={() => handleOnChange("REVIEWS")}>
          REVIEWS
        </TabBarText>
        {select === "REVIEWS" && <UnderlinedTabBar />}
      </TabBarContainer>
    </TabBarRow>
  );
};

export default TabBar;
