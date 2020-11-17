import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import GuestDetail from './guestDetail.jsx'

const Wrapper = styled.div`
grid-area: guest;
display: grid;
border: 1px solid #505050;
border-radius: 0 0 15px 15px;
padding: 20px;
grid-template-columns: 1fr, 1fr;
grid-template-areas: "guest arrow";
position: relative;
align-self: center;
`;

const Guest = styled.div`
grid-area: guest;
font-size: 12px;
vertical-align: middle;
cursor: pointer;
`;

const Arrow = styled.span`
grid-area: arrow;
font-size: 50px;
width: 30px;
height: 30px;
align-self: start;
color: black;
justify-self: end;
cursor: pointer;
`;


function GuestSelect(props) {
  const [click, setClick] = useState(true);

  const handleClick = function() {
    setClick(!click);
  };

  return (
    <Wrapper>

      { click && (<><Guest onClick={handleClick}><b>GUESTS</b><br></br>
        <span style={{'color': '#717171', 'font-size': '14px'}}>1 guest
        </span>
      </Guest>
      <Arrow onClick={handleClick}>{`\u02c5`}</Arrow></>) }

      { !click && (<><Guest onClick={handleClick}><b>GUESTS</b><br></br>
        <span style={{'color': '#717171', 'font-size': '14px'}}>1 guest
        </span>
      </Guest>
      <Arrow onClick={handleClick}>{`\u02c4`}</Arrow>
      <GuestDetail guests={props.guests} click={handleClick}/></>) }

    </Wrapper>
  )
}

export default GuestSelect;