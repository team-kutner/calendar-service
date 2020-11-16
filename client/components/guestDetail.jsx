import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const GuestExpand = styled.div`
height: 320px;
width: 85.6%;
display: grid;
border-radius: 15px;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(1fr, 5);
grid-template-areas:  "adult adultbutton"
                      "child childbutton"
                      "infant infantbutton"
                      "note note"
                      "blank close";
background: white;
position: absolute;
z-index: 10;
top: 100%;
box-shadow: 0 0 20px #DCDCDC;
padding: 10px 20px;
`;

const GuestType = styled.div`
float: left;
align-self: center;
font-size: 16px;
`;

const GuestNote = styled.div`
font-weight: normal;
font-size: 14px;
align-self: center;
`;

const Close = styled.button`
grid-area: close;
cursor: pointer;
padding: 0;
border: none;
background: none;
height: 40px;
width: 62px;
text-decoration: underline;
justify-self: end;
font-size: 16px;

&:hover {
  background: #DCDCDC;
  border-radius: 15px;
}
`;

const Button = styled.button`
height: 32px;
width: 32px;
border-radius: 50%;
align-self: center;
justify-self: center;
cursor: pointer;
background: none;
border: 1px solid	#505050;
color: #717171;

font-size: 18px;
&:hover {
  border: 1px solid black;
  color: black;
}
`;

const ButtonContainer = styled.div`
display: grid;
text-align: center;

align-self: center;
justify-self: stretch;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
grid-template-areas:  "minus num plus"
`;

function GuestDetail(props) {

const [adult, setAdult] = useState(1);
const [child, setChild] = useState(0);
const [infant, setInfant] = useState(0);
const [minus, setMinus] = useState(false);
const [plus, setPlus] = useState(true);

  return (

    <GuestExpand>
      <GuestType style={{'grid-area': 'adult'}}>Adults</GuestType>
      <ButtonContainer style={{'grid-area': 'adultbutton'}}>
        <Button
        onClick={() => {if(adult > 1) {setAdult(adult - 1)}}}>-</Button>
        <span style={{'grid-area': 'num', 'align-self': 'center'}}>{adult} </span>
        <Button
        onClick={() => {if(adult < props.guests && (adult + child < props.guests)) {setAdult(adult + 1)}}}>+</Button>
      </ButtonContainer>

      <GuestType style={{'grid-area': 'child'}}>Children
         <GuestNote style={{'font-size': '12px'}}>Ages 2-12</GuestNote>
      </GuestType>
      <ButtonContainer style={{'grid-area': 'childbutton'}}>
        <Button
        onClick={() => {if(child > 0) {setChild(child - 1)}}}>-</Button>
        <span style={{'grid-area': 'num', 'align-self': 'center'}}>{child} </span>
        <Button
        onClick={() => {if(child < props.guests && (adult + child < props.guests)) {setChild(child + 1)}}}>+</Button>
      </ButtonContainer>

      <GuestType style={{'grid-area': 'infant'}}>Infants
         <GuestNote style={{'font-size': '12px'}}>Under 2</GuestNote>
      </GuestType>
      <ButtonContainer style={{'grid-area': 'infantbutton'}}>
        <Button onClick={() => {if (infant > 0) {setInfant(infant - 1)}}}>-</Button>
        <span style={{'grid-area': 'num', 'align-self': 'center'}}>{infant} </span>
        <Button onClick={() => setInfant(infant + 1)}>+</Button>
      </ButtonContainer>

      <GuestNote style={{'grid-area': 'note'}}>{props.guests} guests maximum. Infants don't count toward the number of guests.</GuestNote>

      <Close onClick={props.click}>Close</Close>
    </GuestExpand>
  )
}

export default GuestDetail;