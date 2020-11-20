import React, { useState, useEffect, Component } from 'react';
import styled, { css } from 'styled-components';
import Calendar from './calendar.jsx';
import {Modal, CheckinInput, CheckoutInput, Header, Notes, Close, Clear} from './styles/popup.styles.js';

function Popup(props) {

  return (

    <Modal>

      <Header>Select dates<br/>
        <Notes>Add your travel dates for exact pricing</Notes>
      </Header>
      <div id='checkin' style={{'display': 'flex', 'grid-area': 'check', 'justify-content': 'flex-end'}}>
        <CheckinInput>
          <div style={{'grid-area': 'label', 'font-size': '12px', 'align-self': 'end'}}>CHECK-IN</div>
          <input className='form' maxlength='10' placeholder={props.checkIn} style={{'grid-area': 'input', 'border': 'none', 'width': '90px', 'align-self': 'start'}} type='text'></input>

        </CheckinInput>
        <CheckoutInput><b style={{'grid-area': 'label2', 'align-self': 'end'}}>CHECK-OUT</b>
          <div id='checkout' style={{'color': '#717171', 'font-size': '14px', 'grid-area': 'input2', 'align-self': 'start'}}>{props.checkOut}</div>
        </CheckoutInput>
      </div>

      <Calendar change={props.change} setChange={props.setChange} close={props.close} click={props.click} setClick={props.setClick} checkIn={props.checkIn} checkOut={props.checkOut} setCheckIn={props.setCheckIn} setCheckOut={props.setCheckOut} booked={props.booked}/>

      <div style={{'display': 'flex', 'grid-area': 'close', 'justify-content': 'flex-end', 'align-items': 'flex-end'}}>
        <Clear onClick={() => {props.setCheckIn('Add date'); props.setCheckOut('Add date'); props.setClick(1);}}> Clear dates </Clear>
        <Close onClick={props.close}>Close</Close>
      </div>
    </Modal>

  )
}

export default Popup;