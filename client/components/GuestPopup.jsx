// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {styled} = global;
import {GuestExpand, GuestType, GuestNote, GuestNote12, Close, Button, ButtonContainer, Span} from './styles/GuestPopup.styles.js';


// New one - use if you can get the styling to work!

// import GuestItem from './GuestItem.jsx'

// function GuestPopup({adult, setAdult, child, setChild, infant, setInfant, maxGuests, toggleGuest}) {
//   // add in conditional css formatting for button shadding and hover circle X
//   const adultMin = () => {if(adult > 1) {setAdult(adult - 1)}};
//   const adultPlus = () => {if (adult < maxGuests) {setAdult(adult + 1)}};
//   const childMin = () => {if(child > 0) {setChild(child - 1)}};
//   const childPlus = () => {if((adult + child) < maxGuests) {setChild(child + 1)}};
//   const infantMin = () => {if (infant > 0) {setInfant(infant - 1)}};
//   const infantPlus = () => {setInfant(infant + 1)};

//   const invalidAC = adult + child === maxGuests;

//   return (

//     <GuestExpand>
//       <GuestItem guest={adult} typeStyle='adult' buttonStyle='adultButton' button1={adultMin} button2={adultPlus} invalid1={adult === 1} invalid2={invalidAC} />
//       <GuestItem guest={child} typeStyle='child' buttonStyle='childButton' button1={childMin} button2={childPlus} invalid1={child === 0} invalid2={invalidAC} />
//       <GuestItem guest={infant} typeStyle='infant' buttonStyle='infantButton' button1={infantMin} button2={infantPlus} invalid1={infant === 1} />

//       <GuestNote id='limit' style={{'grid-area': 'note'}}>{maxGuests} guests maximum. Infants don't count toward the number of guests.</GuestNote>

//       <Close onClick={toggleGuest}>Close</Close>
//     </GuestExpand>
//   )
// }

// export default GuestDetail;

function GuestPopup({adult, setAdult, child, setChild, infant, setInfant, maxGuests, toggleGuest}) {
  // add in conditional css formatting for button shadding and hover circle X
  const adultMin = () => {if(adult > 1) {setAdult(adult - 1)}};
  const adultPlus = () => {if (adult < maxGuests) {setAdult(adult + 1)}};
  const childMin = () => {if(child > 0) {setChild(child - 1)}};
  const childPlus = () => {if((adult + child) < maxGuests) {setChild(child + 1)}};
  const infantMin = () => {if (infant > 0) {setInfant(infant - 1)}};
  const infantPlus = () => {setInfant(infant + 1)};

  return (

    <GuestExpand>
      <GuestType style={{'grid-area': 'adult'}}>Adults</GuestType>
      <ButtonContainer style={{'grid-area': 'adultbutton'}}>
        <Button onClick={adultMin} invalid={adult === 1}>-</Button>
        <Span>{adult} </Span>
        <Button onClick={adultPlus} invalid={adult + child === maxGuests}>+</Button>
      </ButtonContainer>

      <GuestType style={{'grid-area': 'child'}}>Children
         <GuestNote12>Ages 2-12</GuestNote12>
      </GuestType>
      <ButtonContainer style={{'grid-area': 'childbutton'}}>
        <Button onClick={childMin} invalid={child === 0}>-</Button>
        <Span>{child} </Span>
        <Button onClick={childPlus} invalid={adult + child === maxGuests}>+</Button>
      </ButtonContainer>

      <GuestType style={{'grid-area': 'infant'}}>Infants
         <GuestNote12>Under 2</GuestNote12>
      </GuestType>
      <ButtonContainer style={{'grid-area': 'infantbutton'}}>
        <Button onClick={infantMin} invalid={infant === 0}>-</Button>
        <Span>{infant} </Span>
        <Button onClick={infantPlus}>+</Button>
      </ButtonContainer>

      <GuestNote id='limit' style={{'grid-area': 'note'}}>{maxGuests} guests maximum. Infants don't count toward the number of guests.</GuestNote>

      <Close onClick={toggleGuest}>Close</Close>
    </GuestExpand>
  )
}

export default GuestPopup;