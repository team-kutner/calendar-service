// import styled, { css } from 'styled-components';
const {styled} = global;
const {css} = styled;

export const Wrapper = styled.div`
grid-area: guest;
display: grid;
border: 1px solid #505050;
border-radius: 0 0 15px 15px;
padding: 11px;
grid-template-columns: 1fr, 1fr;
grid-template-areas: "guest arrow";
position: relative;
align-self: center;
`;

export const Guest = styled.div`
grid-area: guest;
font-size: 12px;
vertical-align: middle;
cursor: pointer;
`;

export const Arrow1 = styled.span`
grid-area: arrow;
font-size: 40px;
width: 30px;
height: 30px;
align-self: start;
color: black;
justify-self: end;
cursor: pointer;
`;

export const Span = styled.span`
color: #717171;
font-size: 14px;
`;