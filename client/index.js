// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
const {React} = window
const {ReactDOM} = window
import App from './app.jsx';
import Info from './components/info.jsx'

ReactDOM.render(<App />, document.getElementById('booking'));
ReactDOM.render(<Info />, document.getElementById('info'));

// window.React = React;
// window.ReactDOM = ReactDOM;
// window.BookingApp = App;