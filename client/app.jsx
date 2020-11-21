import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SelectDates from './components/selectDates.jsx';
import axios from 'axios';
import moment from 'moment';
import {Container, ReserveContainer, Price, Rating, Button, Text, Fee, Cost, TwentyTwo, Sixteen, TextNote, FeeNight, CostNight, FeeClean, CostClean, FeeService, CostService, FeeTax, CostTax, FeeTotal, CostTotal} from './components/styles/app.styles.js';

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
  const [click, setClick] = useState(0);
  const [nights, setNights] = useState(0);
  const [change, setChange] = useState(false);

  useEffect(() => {
    let url = (window.location.href).split('/');
    let homeId = url[url.length-1] || '75';

    axios.get(`/api/homes/${homeId}/reservation`)
    .then((res) => {
      let data = res.data[0];
      setGuests(data.guestMax);
      setPrice(data.pricePerNight);
      setRating(data.rating);
      setReviews(data.numRatings);
      setClean(data.cleaningFee);
      setService(data.serviceFee);
    })
    .catch(err => console.log(err));

    axios.get(`/api/homes/${homeId}/listing`)
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
          <TwentyTwo><b>${price}</b></TwentyTwo>
          <Sixteen> /</Sixteen> night
        </Price>
        <Rating>
          <span className="red-star">{`\u2605`}</span> <b>{rating}</b> <span style={{'color': 'grey'}}>({reviews})</span>
        </Rating>
        <SelectDates change={change} setChange={setChange} click={click} setClick={setClick} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked} adult={adult} setAdult={setAdult} child={child} setChild={setChild} infant={infant} setInfant={setInfant} guests={guests}/>
        <Button className='mouse-cursor'>Check availability</Button>
      </Container>
    )}

    { (change && (checkIn !== checkOut)) && (
      <ReserveContainer>

        <Price>
          <TwentyTwo><b>${price}</b></TwentyTwo>
          <Sixteen> /</Sixteen> night
        </Price>

        <Rating>
          <span className="red-star">{`\u2605`}</span> <b>{rating}</b> <span style={{'color': 'grey'}}>({reviews})</span>
        </Rating>

        <SelectDates change={change} setChange={setChange} click={click} setClick={setClick} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked} adult={adult} setAdult={setAdult} child={child} setChild={setChild} infant={infant} setInfant={setInfant} guests={guests}/>

        <Button className='mouse-cursor'>Reserve</Button>
        <TextNote>You won't be charged yet</TextNote>
        <FeeNight>${price} x {nights} nights</FeeNight>
        <CostNight>${price * nights}</CostNight>
        <FeeClean>Cleaning fee</FeeClean>
        <CostClean>${clean}</CostClean>
        <FeeService>Service fee</FeeService>
        <CostService>${service}</CostService>
        <FeeTax>Occupancy taxes and fees</FeeTax>
        <CostTax>${((price*nights)*0.18).toFixed(2)}</CostTax>
        <FeeTotal><b>Total</b></FeeTotal>
        <CostTotal><b>${total}</b></CostTotal>
      </ReserveContainer>
    )}
    </>
  );
}

export default App;