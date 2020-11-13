import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import Calendar from './components/calendar.jsx';
import axios from 'axios';

function App() {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    let url = window.location.href;

    axios.get('/api/homes/75/reservation')
      .then((res) => {
        let data = res.data[0];
        setPrice(data.pricePerNight);
        setRating(data.rating);
        setReviews(data.numRatings);
      })
      .catch(err => console.log(err));
  })

  const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr 2fr;
  grid-template-areas:  "price rating"
                        "calendar calendar"
                        "button button";
  grid-row-gap: 20px;
  height: 372px;
  width: 418px;
  border-radius: 15px;
  border: 1px solid #D3D3D3;
  box-shadow: 0 0 20px #DCDCDC;
  padding: 35px;
`;

  const Price = styled.div`
  grid-area: price;
  `;

  const Rating = styled.div`
  grid-area: rating;
  text-align: right;
  `;

  const Button = styled.button`
  grid-area: button;
  background: #dc1f60;
  border-radius: 15px;
  border: 2px solid #dc1f60;
  color: white;
  font-size: 25px;
  padding: 20px;
  `;

  return (
    <Container>
      <Price>$ {price} / night</Price>
      <Rating><span class="red-star">{`\u2605`}</span> {rating} ({reviews})</Rating>
      <Calendar/>
      <Button className='mouse-cursor'>Check availability</Button>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));