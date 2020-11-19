import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SelectDates from './components/selectDates.jsx';
import axios from 'axios';
import moment from 'moment';

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

const ReserveContainer = styled(Container)`
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 4fr 2fr repeat(1fr, 5) 2fr;
grid-template-areas:  "price rating"
                      "calendar calendar"
                      "button button"
                      "note note"
                      "night nightFee"
                      "clean cleanFee"
                      "service serviceFee"
                      "tax taxFee"
                      "total totalFee";
height: 511px;
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

const Text = styled.div`
font-size: 14px;
color: #222;
align-self: center;
`;

const Fee = styled(Text)`
font-size: 16px;
text-decoration: underline;
justify-self: start;
cursor: pointer;
`;

const Cost = styled(Text)`
font-size: 16px;
justify-self: end;
`;

function App() {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [guests, setGuests] = useState(0);
  const [clean, setClean] = useState(0);
  const [service, setService] = useState(0);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [checkIn, setCheckIn] = useState('Add date');
  const [checkOut, setCheckOut] = useState('Add date');
  const [booked, setBooked] = useState([]);
  const [click, setClick] = useState(1);
  const [nights, setNights] = useState(0);
  const [change, setChange] = useState(false);


  useEffect(() => {
    let url = window.location.href;

    axios.get('/api/homes/75/reservation')
    .then((res) => {
      let data = res.data[0];
      setPrice(data.pricePerNight);
      setRating(data.rating);
      setReviews(data.numRatings);
      setClean(data.cleaningFee);
      setService(data.serviceFee);
      setGuests(data.guestMax);
    })
    .catch(err => console.log(err));

    axios.get('/api/homes/75/listing')
    .then((res) => {
      setBooked(res.data)
    })
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (checkOut.length === 10) {
      console.log('checkout: ', checkOut)
      let date1 = new Date(checkIn);
      let date2 = new Date(checkOut);
      let diffTime = Math.abs(date2-date1);
      let diffDays = Math.ceil(diffTime / (1000*60*60*24));
      setNights(diffDays);
    }
  }, [checkOut]);

  let cost = price * nights;
  let taxes = cost * 0.18;
  let total = (cost + clean + service + taxes).toFixed(2);

  return (
    <>
    { (!change || (checkIn === checkOut)) && (
      <Container>
        <Price>
          <span style={{'font-size': '22px'}}><b>${price}</b></span> <span style={{'font-size': '16px'}}> /</span> night
        </Price>
        <Rating>
          <span class="red-star">{`\u2605`}</span> <b>{rating}</b> <span style={{'color': 'grey'}}>({reviews})</span>
        </Rating>
        <SelectDates change={change} setChange={setChange} click={click} setClick={setClick} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked} adult={adult} setAdult={setAdult} child={child} setChild={setChild} infant={infant} setInfant={setInfant}/>
        <Button className='mouse-cursor'>Check availability</Button>
      </Container>
    )}

    { (change && (checkIn !== checkOut)) && (
      <ReserveContainer>
        <Price>
          <span style={{'font-size': '22px'}}><b>${price}</b></span> <span style={{'font-size': '16px'}}> /</span> night
        </Price>
        <Rating>
          <span class="red-star">{`\u2605`}</span> <b>{rating}</b> <span style={{'color': 'grey'}}>({reviews})</span>
        </Rating>
        <SelectDates change={change} setChange={setChange} click={click} setClick={setClick} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked}/>
        <Button className='mouse-cursor'>Reserve</Button>
        <Text style={{'grid-area': 'note', 'text-align': 'center'}}>You won't be charged yet</Text>
        <Fee style={{'grid-area': 'night'}}>${price} x {nights} nights</Fee>
        <Cost style={{'grid-area': 'nightFee'}}>${price * nights}</Cost>
        <Fee style={{'grid-area': 'clean'}}>Cleaning fee</Fee>
        <Cost style={{'grid-area': 'cleanFee'}}>${clean}</Cost>
        <Fee style={{'grid-area': 'service'}}>Service fee</Fee>
        <Cost style={{'grid-area': 'serviceFee'}}>${service}</Cost>
        <Fee style={{'grid-area': 'tax'}}>Occupancy taxes and fees</Fee>
        <Cost style={{'grid-area': 'taxFee'}}>${(price*nights)*0.18}</Cost>
        <Fee style={{'grid-area': 'total', 'text-decoration': 'none', 'cursor': 'none'}}><b>Total</b></Fee>
    <Cost style={{'grid-area': 'totalFee'}}><b>${total}</b></Cost>
      </ReserveContainer>
    )}
    </>
  );
}

export default App;