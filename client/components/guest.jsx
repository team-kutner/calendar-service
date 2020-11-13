import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

function Guest() {

  const Guest = styled.div`
  grid-area: guest;
  border: 1px solid black;
  border-radius: 0 0 15px 15px;
  padding: 10px;
  `;

  return (
    <Guest>Guest clicks here</Guest>
  )
}

export default Guest;