// import React, { useState, useEffect, Component } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {styled} = global;
import Calendar from './Calendar.jsx';
import {Modal, CheckinInput, CheckoutInput, Header, Notes, Close, Clear, Dates, Footer, Label, Label2, Checkout, Input} from './styles/Popup.styles.js';

function Popup({invalid, setInvalid, change, setChange, close, click, setClick, checkIn, checkOut, setCheckIn, setCheckOut, booked, setBooked}) {
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

      <Calendar invalid={invalid} setInvalid={setInvalid} setChange={setChange} close={close} click={click} setClick={setClick} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked} />

      <Footer>
        <Clear onClick={() => {
          setCheckIn('Add date');
          setCheckOut('Add date');
          setClick(1);
          setChange(false);
          }}> Clear dates </Clear>
        <Close onClick={close}>Close</Close>
      </Footer>
    </Modal>
  )
}

export default Popup;