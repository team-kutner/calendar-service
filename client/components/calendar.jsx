import React from 'react';
import styled, { css } from 'styled-components';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    const Checkin = styled.div`
    grid-area: checkin;
    `;

    const Checkout = styled.div`
    grid-area: checkout;
    `;

    return (
      <>
        <Checkin>Checkin</Checkin>
        <Checkout>Checkout</Checkout>
      </>
    );
  }

}

export default Calendar;