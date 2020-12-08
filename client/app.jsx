// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {useState, useEffect} = React;
const {styled} = window;
import DateGuestSelect from './components/dateGuestSelect.jsx';
import ReserveInfo from './components/reserveInfo.jsx';
import axios from 'axios';
import moment from 'moment';
import {Wrapper, Container, Price, Rating, Button, Text, Fee, Cost, TwentyTwo, Sixteen, Star} from './components/styles/app.styles.js';

var App = () => {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [maxGuests, setGuests] = useState(0);
  const [clean, setClean] = useState(0);
  const [service, setService] = useState(0);
  const [checkIn, setCheckIn] = useState('Add date');
  const [checkOut, setCheckOut] = useState('Add date');
  const [booked, setBooked] = useState([]);
  const [nights, setNights] = useState(0);
  const [changeAppView, setChangeAppView] = useState(false);

  useEffect(() => {
    let url = (window.location.href).split('/');
    let homeId = url[url.length-1] || '75';

    axios.get(`/api/homes/${homeId}/reservation`)
      .then((res) => {
        let data = res.data[0];
        setGuests(data.guestmax);
        setPrice(data.pricepernight);
        setRating(data.rating);
        setReviews(data.numratings);
        setClean(data.cleaningfee);
        setService(data.servicefee);
      })
      .catch(err => console.log(err));

    axios.get(`/api/homes/${homeId}/listing`)
      .then((res) => {
        setBooked(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (checkOut.length === 10) {
      console.log('checkout: ', checkOut);
      let date1 = new Date(checkIn);
      let date2 = new Date(checkOut);
      let diffTime = Math.abs(date2 - date1);
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    }
  }, [checkOut]);


  let buttonText = !changeAppView ? 'Check Availability' : 'Reserve';

  return (
    <>
      <Wrapper expand={changeAppView}>
        <Container expand={changeAppView}>
          <Price>
            <TwentyTwo><b>${price}</b></TwentyTwo>
            <Sixteen> /</Sixteen> night
          </Price>
          <Rating>
            <Star className="red-star">{`\u2605`}</Star> <b>{rating}</b> <span style={{'color': 'grey'}}>({reviews})</span>
          </Rating>
          <DateGuestSelect setChangeAppView={setChangeAppView} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked} maxGuests={maxGuests}/>
          <Button className='mouse-cursor'>{buttonText}</Button>
        </Container>

        { (changeAppView && (checkIn !== checkOut)) && (
          <ReserveInfo price={price} nights={nights} clean={clean} service={service}/>
        )}
      </Wrapper>
    </>
  );
};

export default App;
