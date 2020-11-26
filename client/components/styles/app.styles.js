// import styled, { css } from 'styled-components';
const {styled} = global;
const {css} = styled;

export const Wrapper = styled.div`
position: relative;
width: 372px;
float: right;
margin-right: 50px;
/* box-shadow: ${props => props.expand ? '0 0 20px #DCDCDC' : 'none'}; */
`;

export const Container = styled.div`
display: grid;
box-sizing: border-box;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 4fr 2fr;
grid-template-areas:  "price rating"
                      "calendar calendar"
                      "button button";
grid-row-gap: 10px;
height: 276px;
width: 372px;
/* max-width: 372px; */
/* position: relative; */
${props => props.hover ? 'pointer' : 'auto'};
border-top-left-radius: 15px;
border-top-right-radius: 15px;
border-bottom-right-radius: ${props => props.expand ? '0px' : '15px'};
border-bottom-left-radius: ${props => props.expand ? '0px' : '15px'};
border: 1px solid #D3D3D3;
border-bottom: ${props => props.expand ? 'none' : '1px solid #D3D3D3'};
/* box-shadow: ${props => props.expand ? 'none': '0 0 20px #DCDCDC'}; */
padding: 24px;
margin-left: auto;
margin-right: 50px;
`;

export const ReserveContainer = styled(Container)`
grid-template-columns: 1fr;
grid-template-rows: repeat(1fr, 7);
grid-template-areas:
                      "note"
                      "night"
                      "clean "
                      "service "
                      "tax"
                      "line"
                      "total";
height: 235px;
position: absolute;
top: 95%;
left: 0;
border-top: none;
padding-top: 0;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
border-top-right-radius: 0;
border-top-left-radius: 0;
/* box-shadow: 0 10 20px #DCDCDC; */

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
align-self: center;
box-sizing: border-box;
height: 48px;
max-width: 322px;
width: 100%;
border: 2px solid #dc1f60;
color: white;
font-size: 20px;
padding: 10px;
font-family: 'Montserrat', sans-serif;
cursor: pointer;
background-color: #dc1f60;
border-radius: 15px;
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
cursor: auto;
align-self: start;
font-weight: 900;
`;

export const CostTotal = styled(Cost)`
grid-area: total;
align-self: start;
font-weight: 900;
`;

export const Star = styled.span`
color: #ff385c;
`;

export const Line = styled.hr`
border-top: 1px solid #A9A9A9;
display: block;
width: 100%;
grid-area: line;
align-self: center;
`;

export const InfoContainer = styled.img`
box-sizing: border-box;
max-width: 700px;
width: 100%;
height: auto;
`;