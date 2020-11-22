// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {useState} = React;
const {styled} = global;
import GuestDetail from './guestDetail.jsx'
import {Wrapper, Guest, Arrow1, Span} from './styles/guestSelect.styles.js';

function GuestSelect(props) {
  const [click, setClick] = useState(true);

  const handleClick = function() {
    setClick(!click);
  };

  return (
    <Wrapper>
      {/* this rendering needs to show the current state of the guests - figure out the syntax */}

      { click && (<><Guest className='showGuestName' onClick={handleClick}><b>GUESTS</b><br></br>
        <Span>1 guest</Span>
      </Guest>
      <Arrow1 className='showGuestArrow' onClick={handleClick}>{`\u02c5`}</Arrow1></>) }

      { !click && (<><Guest className='hideGuestName' onClick={handleClick}><b>GUESTS</b><br></br>
        <Span>1 guest</Span>
      </Guest>
      <Arrow1 className='hideGuestArrow' onClick={handleClick}>{`\u02c4`}</Arrow1>
      <GuestDetail guests={props.guests} click={handleClick} adult={props.adult} setAdult={props.setAdult} child={props.child} setChild={props.setChild} infant={props.infant} setInfant={props.setInfant}/></>) }

    </Wrapper>
  )
}

export default GuestSelect;