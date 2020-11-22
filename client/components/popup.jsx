// import React, { useState, useEffect, Component } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {styled} = global;
import Calendar from './calendar.jsx';
import {Modal, CheckinInput, CheckoutInput, Header, Notes, Close, Clear, Dates, Footer, Label, Label2, Checkout, Input} from './styles/popup.styles.js';

function Popup(props) {
  return (

    <Modal>
      <Header>Select dates<br/>
        <Notes>Add your travel dates for exact pricing</Notes>
      </Header>
      <Dates id='checkin'>
        <CheckinInput>
          <Label>CHECK-IN</Label>
          <Input className='form' maxlength='10' placeholder={props.checkIn} type='text'></Input>

        </CheckinInput>
        <CheckoutInput><Label2>CHECK-OUT</Label2>
          <Checkout id='checkout'>{props.checkOut}</Checkout>
        </CheckoutInput>
      </Dates>

      <Calendar change={props.change} setChange={props.setChange} close={props.close} click={props.click} setClick={props.setClick} checkIn={props.checkIn} checkOut={props.checkOut} setCheckIn={props.setCheckIn} setCheckOut={props.setCheckOut} booked={props.booked}/>

      <Footer>
        <Clear onClick={() => {
          props.setCheckIn('Add date');
          props.setCheckOut('Add date');
          props.setClick(1);
          props.setChange(false);
          }}> Clear dates </Clear>
        <Close onClick={props.close}>Close</Close>
      </Footer>
    </Modal>
  )
}

export default Popup;