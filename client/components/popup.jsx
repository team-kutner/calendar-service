// import React, { useState, useEffect, Component } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {styled} = global;
import Calendar from './calendar.jsx';

import {Modal, CheckinInput, CheckoutInput, Header, Notes, Close, Clear, Dates, Footer, Label, Label2, Checkout, Input} from './styles/popup.styles.js';

function Popup({prevButtonValid, setPrevButtonValid, invalid, setInvalid, change, setChangeAppView, close, checkIn, checkOut, setCheckIn, setCheckOut, booked, setBooked, month, setCurrMonth, next, setNextMonth}) {

  return (

    <Modal>
      <Header>Select dates<br/>
        <Notes>Add your travel dates for exact pricing</Notes>
      </Header>
      <Dates id='checkin'>
        <CheckinInput>
          <Label>CHECK-IN</Label>
          <Input className='form' maxlength='10' placeholder={checkIn} type='text'></Input>

        </CheckinInput>
        <CheckoutInput><Label2>CHECK-OUT</Label2>
          <Checkout id='checkout'>{checkOut}</Checkout>
        </CheckoutInput>
      </Dates>

      <Calendar prevButtonValid={prevButtonValid} setPrevButtonValid={setPrevButtonValid} month={month} setCurrMonth={setCurrMonth} next={next} setNextMonth={setNextMonth} invalid={invalid} setInvalid={setInvalid} setChangeAppView={setChangeAppView} close={close} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked} />

      <Footer>
        <Clear onClick={() => {
          setCheckIn('Add date');
          setCheckOut('Add date');
          setChangeAppView(false);
          setInvalid([]);
          }}> Clear dates </Clear>
        <Close onClick={close}>Close</Close>
      </Footer>
    </Modal>
  )
}

export default Popup;

