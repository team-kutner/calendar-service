import styled, { css } from 'styled-components';

export const Frame = styled.div`
width: 650px;
height: 350px;
grid-area: calendar;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 20% 80%;
grid-template-areas: "month"
                     "body";
`;

export const Header = styled.div`
font-size: 16px;
grid-area: month;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 50% 50%;
grid-template-areas: "month1 month2";
`;

export const Button = styled.button`
cursor: pointer;
background: none;
border: none;
`;

export const NoButton = styled(Button)`
cursor: no-drop;
color: #B0B0B0;
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
      border: 1px solid black;
      border-radius: 50%;
    }
`;

export const DayBook = styled(Day)`
text-decoration: line-through;
color: #B0B0B0;
`;