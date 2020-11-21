import styled, { css } from 'styled-components';

export const Frame = styled.div`
box-sizing: border-box;
width: 620px;
height: 300px;
grid-area: calendar;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 10% 90%;
grid-template-areas: "month"
                     "body";
`;

export const Header = styled.div`
font-size: 16px;
grid-area: month;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "month1 month2";
`;

export const Button = styled.button`
cursor: pointer;
background: none;
border: none;
grid-area: month1;
align-self: center;
justify-self: start;
`;

export const Button2 = styled(Button)`
grid-area: month2;
justify-self: end;
`;

export const NoButton = styled(Button)`
cursor: no-drop;
color: #B0B0B0;
grid-area: month1;
align-self: center;
justify-self: start;
`;

export const Body = styled.div`
width: 100%;
grid-area: body;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "cal1 cal2";
`;

export const Day = styled.div`
width: 14%;
height: 45px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;

export const DayNum = styled(Day)`
  cursor: pointer;
    &:hover {
      box-sizing: border-box;
      border: 1px solid black;
      border-radius: 50%;
    }

    ${props =>
      props.select &&
      css `
      color: white;
      background: black;
      border-radius: 50%;
    `}
`;

export const DayBook = styled(Day)`
text-decoration: line-through;
color: #B0B0B0;
`;

export const Div = styled.div`
grid-area: month1;
align-self: center;
justify-self: center;
font-weight: bold;
`;

export const Div2 = styled(Div)`
grid-area: month2;
`;

export const Span = styled.span`
grid-area: cal1;
align-self: start;
display: flex;
flex-wrap: wrap;
`;

export const Span2 = styled(Span)`
grid-area: cal2;
`;