// import styled, { css } from 'styled-components';
const {styled} = global;
const {css} = styled;

export const GuestExpand = styled.div`
box-sizing: border-box;
height: 320px;
width: 100%;
max-width: 322px;
display: grid;
border-radius: 15px;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(1fr, 5);
grid-template-areas:  "adult adultbutton"
                      "child childbutton"
                      "infant infantbutton"
                      "note note"
                      "blank close";
background: white;
position: absolute;
z-index: 10;
top: 100%;
/* right: -1.5%; */
box-shadow: 0 0 20px #DCDCDC;
padding: 10px 20px;
`;

export const GuestType = styled.div`
float: left;
align-self: center;
font-size: 16px;
`;

export const GuestNote = styled.div`
font-weight: normal;
font-size: 14px;
align-self: center;
`;

export const GuestNote12 = styled(GuestNote)`
font-size: 12px;
`;

export const Close = styled.button`
grid-area: close;
cursor: pointer;
padding: 0;
border: none;
background: none;
height: 40px;
width: 62px;
text-decoration: underline;
justify-self: end;
font-size: 16px;

&:hover {
  background: #F5F5F5;
  border-radius: 10px;
}
`;

export const Button = styled.button`
height: 32px;
width: 32px;
border-radius: 50%;
align-self: center;
justify-self: center;
cursor: ${props => props.invalid ? 'no-drop' : 'pointer'};
background: none;
border: ${props => props.invalid ? '1px solid #B0B0B0' :'1px solid	#505050'};
color: ${props => props.invalid ? '#B0B0B0' : '#717171'};
font-size: 18px;
&:hover {
  border: ${props => props.invalid ? '1px solid #B0B0B0': '1px solid black'};
  color: ${props => props.invalid ? '#B0B0B0' : 'black'};
}
`;

export const ButtonContainer = styled.div`
display: grid;
text-align: center;
align-self: center;
justify-self: stretch;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
grid-template-areas:  "minus num plus";
`;

export const Span = styled.div`
grid-area: num;
align-self: center;
`;