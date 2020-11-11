import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

    const Container = styled.div`
    height: 372px;
    width: 418px;
    border-radius: 15px;
    border: 1px solid #D3D3D3;
    box-shadow: 0 0 20px #DCDCDC;
    padding: 20px;
  `;
    return (
      <Container>Hey this is the React div</Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));