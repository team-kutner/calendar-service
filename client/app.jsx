import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Calendar from './components/calendar.jsx';
import axios from 'axios';

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 4fr 2fr;
grid-template-areas:  "price rating"
                      "calendar calendar"
                      "button button";
grid-row-gap: 20px;
height: 276px;
width: 30%;
max-width: 325px;
position: relative;
border-radius: 15px;
border: 1px solid #D3D3D3;
box-shadow: 0 0 20px #DCDCDC;
padding: 24px;
margin-left: auto;
margin-right: 50px;
`;

const Price = styled.div`
grid-area: price;
align-self: center;
`;

const Rating = styled.div`
grid-area: rating;
text-align: right;
align-self: center;
cursor: pointer;
`;

const Button = styled.button`
grid-area: button;
background: #dc1f60;
border-radius: 15px;
border: 2px solid #dc1f60;
color: white;
font-size: 20px;
padding: 10px;
font-family: 'Montserrat', sans-serif;
cursor: pointer;
`;

function App() {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [guests, setGuests] = useState(0);
  // const [adult, setAdult] = useState(1);
  // const [child, setChild] = useState(0);
  // const [infant, setInfant] = useState(0);
  const [checkIn, setCheckIn] = useState('YYYYMMDD');
  const [checkOut, setCheckOut] = useState('YYYYMMDD');


  useEffect(() => {
    let url = window.location.href;

    axios.get('/api/homes/75/reservation')
      .then((res) => {
        let data = res.data[0];
        setPrice(data.pricePerNight);
        setRating(data.rating);
        setReviews(data.numRatings);
        setGuests(data.guestMax);
        console.log('guests: ', data.guestMax)
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <Container>
      <Price>
        <span style={{'font-size': '22px'}}><b>${price}</b></span> <span style={{'font-size': '16px'}}> /</span> night
      </Price>
      <Rating>
        <span class="red-star">{`\u2605`}</span> <b>{rating}</b> <span style={{'color': 'grey'}}>({reviews})</span>
      </Rating>
      <Calendar guests={guests}/>
      <Button className='mouse-cursor'>Check availability</Button>
    </Container>
  );
}

export default App;