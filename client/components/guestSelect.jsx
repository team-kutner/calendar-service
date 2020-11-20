import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import GuestDetail from './guestDetail.jsx'
import {Wrapper, Guest, Arrow} from './styles/guestSelect.styles.js';

function GuestSelect(props) {
  const [click, setClick] = useState(true);

  const handleClick = function() {
    setClick(!click);
  };

  return (
    <Wrapper>

      { click && (<><Guest className='showGuestName' onClick={handleClick}><b>GUESTS</b><br></br>
        <span style={{'color': '#717171', 'font-size': '14px'}}>1 guest
        </span>
      </Guest>
      <Arrow className='showGuestArrow' onClick={handleClick}>{`\u02c5`}</Arrow></>) }

      { !click && (<><Guest className='hideGuestName' onClick={handleClick}><b>GUESTS</b><br></br>
        <span style={{'color': '#717171', 'font-size': '14px'}}>1 guest
        </span>
      </Guest>
      <Arrow className='hideGuestArrow' onClick={handleClick}>{`\u02c4`}</Arrow>
      <GuestDetail guests={props.guests} click={handleClick} adult={props.adult} setAdult={props.setAdult} child={props.child} setChild={props.setChild} infant={props.infant} setInfant={props.setInfant}/></>) }

    </Wrapper>
  )
}

export default GuestSelect;