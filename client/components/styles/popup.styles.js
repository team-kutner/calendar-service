import styled, { css } from 'styled-components';

export const Modal = styled.div`
position: absolute;
box-sizing: border-box;
width: 661px;
height: 464px;
display: grid;
grid-template-columns: repeat(1fr, 4);
grid-template-rows: 2fr, 7fr, 1fr;
grid-row-gap: 5px;
grid-template-areas:  "select select check check"
                      "calendar calendar calendar calendar"
                      "blank blank close close";
padding: 24px;
background: white;
right: -10%;
border-radius: 15px;
z-index: 12;
box-shadow: 0 0 20px #DCDCDC;
column-gap: 0px;
`;

export const CheckinInput = styled.span`
display: grid;
box-sizing: border-box;
height: 57px;
width: 161px;
grid-template-rows: 50% 50%;
grid-template-areas: "label"
                    "input";
border: 1px solid	#717171;
border-radius: 15px;
font-size: 14px;
padding-left: 5px;
`;

export const CheckoutInput = styled.span`
display: grid;
box-sizing: border-box;
height: 57px;
width: 161px;
grid-template-rows: 50% 50%;
grid-template-areas: "label2"
                    "input2";
border: 1px solid #717171;
border-radius: 15px;
font-size: 12px;
background: rgb(176, 176, 176);
padding-left: 5px;
`;

export const Header = styled.div`
font-size: 22px;
grid-area: select;
`;

export const Notes = styled.div`
font-size: 14px;
`;

export const Close = styled.button`
cursor: pointer;
padding: 0;
border-radius: 15px;
background: #222;
height: 34px;
width: 69px;
font-size: 14px;
color: white;
&:hover {
  background: black;
}
`;

export const Clear = styled.button`
cursor: pointer;
font-size: 14px;
height: 34px;
width: 91px;
border: none;
background: white;
text-decoration: underline;
&:hover {
  background: #D3D3D3;
  border-radius: 15px;
}
`;

export const Dates = styled.div`
grid-area: check;
display: flex;
justify-content: center;
`;

export const Footer = styled(Dates)`
grid-area: close;
align-items: flex-end;
justify-content: flex-end;
`;

export const Label = styled.div`
grid-area: label;
font-size: 12px;
align-self: end;
`;

export const Label2 = styled.b`
grid-area: label2;
align-self: end;
color: #717171;
`;

export const Checkout = styled.div`
color: #717171;
font-size: 14px;
grid-area: input2;
align-self: start;
`;

export const Input = styled.input`
grid-area: input;
border: none;
outline: none;
width: 90px;
align-self: start;
`;