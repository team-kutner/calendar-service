import styled, { css } from 'styled-components';

export const Container = styled.div`
display: grid;
box-sizing: border-box;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 4fr 2fr;
grid-template-areas:  "price rating"
                      "calendar calendar"
                      "button button";
grid-row-gap: 20px;
height: 276px;
width: 30%;
max-width: 372px;
position: relative;
border-radius: 15px;
border: 1px solid #D3D3D3;
box-shadow: 0 0 20px #DCDCDC;
padding: 24px;
margin-left: auto;
margin-right: 50px;
`;

export const ReserveContainer = styled(Container)`
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 4fr 2fr repeat(1fr, 5) 2fr;
grid-template-areas:  "price rating"
                      "calendar calendar"
                      "button button"
                      "note note"
                      "night night"
                      "clean clean"
                      "service service"
                      "tax tax"
                      "total total";
height: 511px;
`;

export const Price = styled.div`
grid-area: price;
align-self: center;
`;

export const TwentyTwo = styled.span`
font-size: 22px;
`;

export const Sixteen = styled.span`
font-size: 16px;
`;

export const Rating = styled.div`
grid-area: rating;
text-align: right;
align-self: center;
cursor: pointer;
`;

export const Button = styled.button`
grid-area: button;
box-sizing: border-box;
height: 48px;
width: 322px;
background: #dc1f60;
border-radius: 15px;
border: 2px solid #dc1f60;
color: white;
font-size: 20px;
padding: 10px;
font-family: 'Montserrat', sans-serif;
cursor: pointer;
`;

export const Text = styled.div`
font-size: 14px;
color: #222;
align-self: center;
`;

export const Fee = styled(Text)`
font-size: 16px;
text-decoration: underline;
justify-self: start;
cursor: pointer;
`;

export const Cost = styled(Text)`
font-size: 16px;
justify-self: end;
`;

export const TextNote = styled(Text)`
grid-area: note;
text-align: center;
`;

export const FeeNight = styled(Fee)`
grid-area: night;
`;

export const CostNight = styled(Cost)`
grid-area: night;
`;

export const FeeClean = styled(Fee)`
grid-area: clean;
`;

export const CostClean = styled(Cost)`
grid-area: clean;
`;

export const FeeService = styled(Fee)`
grid-area: service;
`;

export const CostService = styled(Cost)`
grid-area: service;
`;

export const FeeTax = styled(Fee)`
grid-area: tax;
`;

export const CostTax = styled(Cost)`
grid-area: tax;
`;

export const FeeTotal = styled(Fee)`
grid-area: total;
text-decoration: none;
cursor: none;
`;

export const CostTotal = styled(Cost)`
grid-area: total;
`;

export const Star = styled.span`
color: #ff385c;
`;