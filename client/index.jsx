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
    grid-template-rows: 1fr 4fr 2fr;
    grid-template-areas:  "price rating"
                          "calendar calendar"
                          "button button";
    grid-row-gap: 20px;
    height: 372px;
    width: 418px;
    border-radius: 15px;
    border: 1px solid #D3D3D3;
    box-shadow: 0 0 20px #DCDCDC;
    padding: 35px;
  `;

    const Price = styled.div`
    grid-area: price;
    `;

    const Rating = styled.div`
    grid-area: rating;
    text-align: right;
    `;

    const Button = styled.button`
    grid-area: button;
    background: #dc1f60;
    border-radius: 15px;
    border: 2px solid #dc1f60;
    color: white;
    font-size: 25px;
    padding: 20px;
    `;

    return (
      <Container>
        <Price>${this.state.price} / night</Price>
        <Rating><span class="red-star">{`\u2605`}</span>{this.state.rating} ({this.state.reviews})</Rating>
        <Calendar/>
        <Button className='mouse-cursor'>Check availability</Button>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));