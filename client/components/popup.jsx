import React, { useState, useEffect, Component } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment'

const Modal = styled.div`
position: absolute;
max-width: 661px;
width: 661px;
max-height: 464px;
height: 464px;
display: grid;
grid-template-columns: repeat(1fr, 4);
grid-template-rows: 20%, 71%, 9%;
grid-template-areas:  "select select checkIn checkOut"
                      "calendar calendar calendar calendar"
                      "blank blank close close";
padding: 24px;
background: white;
right: -15%;
border-radius: 15px;
z-index: 12;
box-shadow: 0 0 20px #DCDCDC;
column-gap: 0px;
`;

const CheckinInput = styled.input`
grid-area: checkIn;
border: 1px solid	#717171;
border-radius: 15px;
align-self: start;
justify-self: end;
font-size: 14px;
width: 135px;
height: 54px;
`;

const CheckoutInput = styled.div`
grid-area: checkOut;
border: 1px solid #717171;
border-radius: 15px;
font-size: 12px;
align-self: start;
justify-self: start;
background: rgb(0,0,0,0.4);
width: 135px;
height: 54px;
`;

const Header = styled.div`
font-size: 22px;
grid-area: select;
`;

const Notes = styled.div`
font-size: 14px;
`;

const Close = styled.button`
grid-area: close;
cursor: pointer;
padding: 0;
border-radius: 15px;
background: #222;
height: 34px;
width: 69px;
justify-self: end;
align-self: end;
font-size: 14px;
color: white;
&:hover {
  background: black;
}
`;

const Day = ({ day }) => {
  return (
    <>
      <p className='date'>{day.format('DD')}</p>
    </>
  )
}

function Popup(props) {


  return (

    <Modal>

      <Header>Select dates<br/>
        <Notes>Add your travel dates for exact pricing</Notes>
      </Header>

      <CheckinInput placeholder='MM/DD/YYYY'></CheckinInput>
      <CheckoutInput><b>CHECK-OUT</b>
        <div style={{'color': '#717171', 'font-size': '14px'}}>Add date</div>
      </CheckoutInput>







      <Close onClick={props.close}>Close</Close>
    </Modal>

  )
}

export default Popup;