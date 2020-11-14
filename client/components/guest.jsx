import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

function Guest() {

  const Wrapper = styled.div`
  grid-area: guest;
  display: grid;
  border: 1px solid #505050;
  border-radius: 0 0 15px 15px;
  padding: 20px;
  grid-template-columns: 1fr, 1fr;
  grid-template-areas: "guest arrow";

  `;

  const Guest = styled.div`
  grid-area: guest;
  font-size: 16px;
  vertical-align: middle;
  `;

  const Arrow = styled.span`
  grid-area: arrow;
  font-size: 75px;
  width: 30px;
  height: 50px;
  align-self: start;
  color: black;
  justify-self: end;
  `;

  return (
    <Wrapper>

      <Guest><b>GUESTS</b><br></br>
        <span style={{'color': 'grey', 'font-size': '20px'}}>1 guest
        </span>
      </Guest>
      <Arrow>{`\u02c5`}</Arrow>

    </Wrapper>
  )
}

export default Guest;