import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px;
`;

const BrandLogo = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  font-weight: 800;
`;

const MenuItemsRow = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 800;
  cursor: pointer;
  margin-left: 50px;
`;

const NavigationBar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const isProvider = user.isProvider;
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Link to="/home">
        <BrandLogo>FreeGigs</BrandLogo>
      </Link>

      <MenuItemsRow>
        {isProvider && (
          <Link to={"/overview/" + user._id}>
            <MenuItem>My Management</MenuItem>{" "}
          </Link>
        )}
        <Link to={"/chat/" + user._id}>
          <MenuItem>My Conversation</MenuItem>
        </Link>
        <Link to={"/user/" + user._id}>
          <MenuItem>My Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </MenuItemsRow>
    </Container>
  );
};

export default NavigationBar;
