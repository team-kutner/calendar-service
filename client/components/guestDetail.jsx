// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {styled} = global;
import {GuestExpand, GuestType, GuestNote, GuestNote12, Close, Button, ButtonContainer, Span} from './styles/guestDetail.styles.js';

function GuestDetail(props) {
  // add in conditional css formatting for button shadding and hover circle X
  const adultMin = () => {if(props.adult > 1) {props.setAdult(props.adult - 1)}};
  const adultPlus = () => {if (props.adult < props.guests) {props.setAdult(props.adult + 1)}};
  const childMin = () => {if(props.child > 0) {props.setChild(props.child - 1)}};
  const childPlus = () => {if((props.adult + props.child) < props.guests) {props.setChild(props.child + 1)}};
  const infantMin = () => {if (props.infant > 0) {props.setInfant(props.infant - 1)}};
  const infantPlus = () => {props.setInfant(props.infant + 1)};

  return (

    <GuestExpand>
      <GuestType style={{'grid-area': 'adult'}}>Adults</GuestType>
      <ButtonContainer style={{'grid-area': 'adultbutton'}}>
        <Button onClick={adultMin}>-</Button>
        <Span>{props.adult} </Span>
        <Button onClick={adultPlus}>+</Button>
      </ButtonContainer>

      <GuestType style={{'grid-area': 'child'}}>Children
         <GuestNote12>Ages 2-12</GuestNote12>
      </GuestType>
      <ButtonContainer style={{'grid-area': 'childbutton'}}>
        <Button onClick={childMin}>-</Button>
        <Span>{props.child} </Span>
        <Button onClick={childPlus}>+</Button>
      </ButtonContainer>

      <GuestType style={{'grid-area': 'infant'}}>Infants
         <GuestNote12>Under 2</GuestNote12>
      </GuestType>
      <ButtonContainer style={{'grid-area': 'infantbutton'}}>
        <Button onClick={infantMin}>-</Button>
        <Span>{props.infant} </Span>
        <Button onClick={infantPlus}>+</Button>
      </ButtonContainer>

      <GuestNote id='limit' style={{'grid-area': 'note'}}>{props.guests} guests maximum. Infants don't count toward the number of guests.</GuestNote>

      <Close onClick={props.click}>Close</Close>
    </GuestExpand>
  )
}

export default GuestDetail;