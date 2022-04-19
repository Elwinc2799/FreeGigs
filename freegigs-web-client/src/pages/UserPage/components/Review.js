import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  height: 175px;
  width: 450px;
  background-color: white;
  border-radius: 15px;
  margin: 0px 30px 30px 0px;
  padding: 20px 50px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  algin-items: space-between;
`;

const RowContainer = styled.div`
  height: 50%;
  width: 100%;
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

const UserName = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: 700;
`;

const DatePosted = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 10px;
  color: grey;
  font-weight: 800;
`;

const ReviewsContainer = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 12.5px;
  color: black;
  font-weight: 700;
  text-align: justify;
  overflow: scroll;
`;

const Review = ({ review, user }) => {
  return (
    <Container>
      <RowContainer>
        <ImageContainer
          src={
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          }
        />
        <UserDetailColumn>
          <UserName>{user?.name}</UserName>
          <DatePosted>
            {moment(review.createdAt.substring(0, 10)).format("D MMM YYYY")}
          </DatePosted>
        </UserDetailColumn>
      </RowContainer>

      <RowContainer style={{ marginTop: "10px" }}>
        <ReviewsContainer>{review.description}</ReviewsContainer>
      </RowContainer>
    </Container>
  );
};

export default Review;
