import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  height: 130px;
  width: 450px;
  background-color: white;
  border-radius: 15px;
  margin: 0px 30px 30px 0px;
  padding: 20px 50px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`;

const RowContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const InnerLowerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const UserDetailColumn = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const ServiceTitle = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 700;
`;

const UserLocation = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: #bfc3d2;
  font-weight: 700;
`;

const ColoredContainer = styled.div`
  height: 22.5px;
  width: ${(props) => props.length * 10}px;
  background-color: #e5e5ed;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
  margin-right: 10px;
`;

const DaysLabel = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
`;

const Service = ({ service, additional, user }) => {
  return (
    <Container>
      <RowContainer>
        <ImageContainer
          src={
            additional.profileImage === ""
              ? "https://images.unsplash.com/photo-1485811843447-c0989c7b9aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
              : additional.profileImage
          }
        />
        <UserDetailColumn>
          <ServiceTitle>
            {service.name} by {user.name}
          </ServiceTitle>
          <UserLocation>{additional.location}</UserLocation>
        </UserDetailColumn>
      </RowContainer>

      <RowContainer
        style={{ alignItems: "flex-end", justifyContent: "space-between" }}
      >
        <InnerLowerRow>
          <ColoredContainer length={`${service.category}`.length}>
            {service.category}
          </ColoredContainer>

          <ColoredContainer length={`RM ${service.price}`.length}>
            RM {service.price}
          </ColoredContainer>
        </InnerLowerRow>

        <DaysLabel>{moment(service.createdAt, "YYYYMMDD").fromNow()}</DaysLabel>
      </RowContainer>
    </Container>
  );
};

export default Service;
