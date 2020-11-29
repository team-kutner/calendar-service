const {React} = window;
const {useState, useEffect} = React;
const {styled} = window;
import {ReserveContainer, Fee, Text, TextNote, FeeNight, CostNight, FeeClean, CostClean, FeeService, CostService, FeeTax, CostTax, FeeTotal, CostTotal, Line} from './styles/app.styles.js';

function ReserveInfo ({ price, nights, clean, service }) {

  let cost = price * nights;
  let taxes = cost * 0.18;
  let total = (cost + clean + service + taxes).toFixed(2);

  return (
    <ReserveContainer>
      <TextNote>You won't be charged yet</TextNote>
      <FeeNight>${price} x {nights} nights</FeeNight>
      <CostNight>${price * nights}</CostNight>
      <FeeClean>Cleaning fee</FeeClean>
      <CostClean>${clean}</CostClean>
      <FeeService>Service fee</FeeService>
      <CostService>${service}</CostService>
      <FeeTax>Occupancy taxes and fees</FeeTax>
      <CostTax>${((price*nights)*0.18).toFixed(2)}</CostTax>
      <Line></Line>
      <FeeTotal>Total</FeeTotal>
      <CostTotal>${total}</CostTotal>
   </ReserveContainer>
  )
}

export default ReserveInfo;