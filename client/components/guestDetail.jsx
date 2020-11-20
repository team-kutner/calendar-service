import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {GuestExpand, GuestType, GuestNote, Close, Button, ButtonContainer} from './styles/guestDetail.styles.js';

function GuestDetail(props) {

  return (

    <GuestExpand>
      <GuestType style={{'grid-area': 'adult'}}>Adults</GuestType>
      <ButtonContainer style={{'grid-area': 'adultbutton'}}>
        <Button
        onClick={() => {if(props.adult > 1) {props.setAdult(props.adult - 1)}}}>-</Button>
        <span style={{'grid-area': 'num', 'align-self': 'center'}}>{props.adult} </span>
        <Button
        onClick={() => {
          if (props.adult < props.guests) {
            props.setAdult(props.adult + 1)
          }
          }}>+</Button>
      </ButtonContainer>

      <GuestType style={{'grid-area': 'child'}}>Children
         <GuestNote style={{'font-size': '12px'}}>Ages 2-12</GuestNote>
      </GuestType>
      <ButtonContainer style={{'grid-area': 'childbutton'}}>
        <Button
        onClick={() => {if(props.child > 0) {props.setChild(props.child - 1)}}}>-</Button>
        <span style={{'grid-area': 'num', 'align-self': 'center'}}>{props.child} </span>
        <Button
        onClick={() => {if((props.adult + props.child) < props.guests) {props.setChild(props.child + 1)}}}>+</Button>
      </ButtonContainer>

      <GuestType style={{'grid-area': 'infant'}}>Infants
         <GuestNote style={{'font-size': '12px'}}>Under 2</GuestNote>
      </GuestType>
      <ButtonContainer style={{'grid-area': 'infantbutton'}}>
        <Button onClick={() => {if (props.infant > 0) {props.setInfant(props.infant - 1)}}}>-</Button>
        <span style={{'grid-area': 'num', 'align-self': 'center'}}>{props.infant} </span>
        <Button onClick={() => props.setInfant(props.infant + 1)}>+</Button>
      </ButtonContainer>

      <GuestNote id='limit' style={{'grid-area': 'note'}}>{props.guests} guests maximum. Infants don't count toward the number of guests.</GuestNote>

      <Close onClick={props.click}>Close</Close>
    </GuestExpand>
  )
}

export default GuestDetail;