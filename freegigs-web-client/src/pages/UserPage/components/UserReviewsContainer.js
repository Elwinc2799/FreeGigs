import styled from "styled-components";
import Review from "./Review";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 0px 0px 50px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 30px;
  border: 1px solid #f5f5f5;
`;

const TitleHeader = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 22.5px;
  color: black;
  font-weight: 700;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  margin-top: 10px;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-color: grey;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const UserReviewsContainer = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const headers = {
          token: `Bearer ${user.accessToken}`,
        };

        const res = await axios.get(
          "https://freegigs.herokuapp.com/reviews/" + user._id,
          { headers }
        );

        setReviews(res.data.reviews);
        setUsers(res.data.users);
      } catch {}
    };

    getReviews();
  }, [user._id, user.accessToken]);

  return (
    <Container>
      <TitleHeader>Reviews of {user.name}</TitleHeader>
      <ReviewsContainer>
        {reviews?.map((review, i) => (
          <Review
            key={review.info}
            review={review}
            user={users[i]}
          />
        ))}
      </ReviewsContainer>
    </Container>
  );
};

export default UserReviewsContainer;
