import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import Calendar from './components/calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      rating: 0,
      reviews: 0
    };
  }

  componentDidMount() {
    // here grab info from the listing (which listing?) and update the price per night as well as the reviews
  }

  render() {

    const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:  "price rating"
                          "checkin checkout"
                          "guest guest"
                          "button button";
    height: 372px;
    width: 418px;
    border-radius: 15px;
    border: 1px solid #D3D3D3;
    box-shadow: 0 0 20px #DCDCDC;
    padding: 50px;
  `;

    const Price = styled.div`
    grid-area: price;
    `;

    const Rating = styled.div`
    grid-area:rating
    `;

    const Guest = styled.div`
    grid-area: guest;
    `;

    const Button = styled.button`
    grid-area: button;
    background: palevioletred;
    border-radius: 15px;
    border: 2px solid palevioletred;
    color: white;
    margin: 0.5em 1em;
    padding: 0.25em 1em`;

    return (
      <Container>
        <Price>${this.state.price} / night</Price>
        <Rating> {this.state.rating} ({this.state.reviews})</Rating>
        <Calendar/>
        <Guest>Guest goes here</Guest>
        <Button>Check availability</Button>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));