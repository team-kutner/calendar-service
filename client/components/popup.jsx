import React, { useState, useEffect, Component } from 'react';
import styled, { css } from 'styled-components';
import Calendar from './calendar.jsx';

const Modal = styled.div`
position: absolute;
width: 661px;
height: 464px;
display: grid;
grid-template-columns: repeat(1fr, 4);
grid-template-rows: 2fr, 7fr, 1fr;
grid-template-areas:  "select select check check"
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

const CheckinInput = styled.span`
display: grid;
grid-template-rows: 50% 50%;
grid-template-areas: "label"
                    "input";
border: 1px solid	#717171;
border-radius: 15px;
font-size: 14px;
width: 135px;
height: 54px;
padding-left: 5px;
`;

const CheckoutInput = styled.span`
display: grid;
grid-template-rows: 50% 50%;
grid-template-areas: "label2"
                    "input2";
border: 1px solid #717171;
border-radius: 15px;
font-size: 12px;
background: rgb(0,0,0,0.4);
width: 135px;
height: 54px;
padding-left: 5px;
`;

const Header = styled.div`
font-size: 22px;
grid-area: select;
`;

const Notes = styled.div`
font-size: 14px;
`;

const Close = styled.button`
cursor: pointer;
padding: 0;
border-radius: 15px;
background: #222;
height: 34px;
width: 69px;
font-size: 14px;
color: white;
&:hover {
  background: black;
}
`;

const Clear = styled.button`
cursor: pointer;
font-size: 14px;
height: 34px;
width: 91px;
border: none;
background: white;
text-decoration: underline;
&:hover {
  background: #D3D3D3;
  border-radius: 15px;
}
`;

function Popup(props) {


  return (

    <Modal>

      <Header>Select dates<br/>
        <Notes>Add your travel dates for exact pricing</Notes>
      </Header>
      <div style={{'display': 'flex', 'grid-area': 'check', 'justify-content': 'flex-end'}}>
        <CheckinInput>
          <div style={{'grid-area': 'label', 'font-size': '12px', 'align-self': 'end'}}>CHECK-IN</div>
          <input maxlength='10' placeholder='MM/DD/YYYY' style={{'grid-area': 'input', 'border': 'none', 'width': '90px', 'align-self': 'start'}} type='text'></input>

        </CheckinInput>
        <CheckoutInput><b style={{'grid-area': 'label2', 'align-self': 'end'}}>CHECK-OUT</b>
          <div style={{'color': '#717171', 'font-size': '14px', 'grid-area': 'input2', 'align-self': 'start'}}>Add date</div>
        </CheckoutInput>
      </div>

      <Calendar click={props.click} setClick={props.setClick} checkIn={props.checkIn} checkOut={props.checkOut}setCheckIn={props.setCheckIn} setCheckOut={props.setCheckOut} booked={props.booked}/>

      <div style={{'display': 'flex', 'grid-area': 'close', 'justify-content': 'flex-end', 'align-items': 'flex-end'}}>
        <Clear> Clear dates </Clear>
        <Close onClick={props.close}>Close</Close>
      </div>
    </Modal>

  )
}

export default Popup;