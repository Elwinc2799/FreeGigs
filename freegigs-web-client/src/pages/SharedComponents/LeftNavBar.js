import styled from "styled-components";
import { ButtonLists } from "./ButtonLists.js";
import Button from "./Button.js";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ButtonColumn = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 10px;
  background-color: transparent;
`;

const LeftNavBar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.currentUser);
  const selected =
    location.pathname === "/overview/" + user._id
      ? 1
      : location.pathname === "/history/" + user._id
      ? 2
      : location.pathname === "/addservice/" + user._id
      ? 3
      : "";

  return (
    <>
      <ButtonColumn>
        {ButtonLists.map((list) => (
          <Link key={list.id} to={list.link + user._id}>
            <Button list={list} selected={selected} />
          </Link>
        ))}
      </ButtonColumn>
    </>
  );
};

export default LeftNavBar;
