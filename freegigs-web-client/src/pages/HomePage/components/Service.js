import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ImageContainer = styled.div`
  height: 250px;
  width: 200px;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Image = styled.img`
  height: 275px;
  width: 200px;
  object-fit: cover;
  border-radius: 20px;
  z-index: -1;
`;

const ContextColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  left: 10px;
`;

const SubtitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

const TitleText = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22.5px;
  color: white;
  font-weight: 800;
`;

const Service = ({ service }) => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Link to={"/searchresult/" + user._id}>
      <ImageContainer>
        <Image src={service.image} />
        <ContextColumn>
          <SubtitleText>{service.subtitle}</SubtitleText>
          <TitleText>{service.service}</TitleText>
        </ContextColumn>
      </ImageContainer>
    </Link>
  );
};

export default Service;