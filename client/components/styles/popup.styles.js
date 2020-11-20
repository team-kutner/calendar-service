import styled, { css } from 'styled-components';

export const Modal = styled.div`
position: absolute;
width: 661px;
height: 464px;
display: grid;
grid-template-columns: repeat(1fr, 4);
grid-template-rows: 2fr, 7fr, 1fr;
grid-template-areas:  "select select check check"
                      "calendar calendar calendar calendar"
                      "blank blank close close";
padding: 24px;
background: white;
right: -15%;
border-radius: 15px;
z-index: 12;
box-shadow: 0 0 20px #DCDCDC;
column-gap: 0px;
`;

export const CheckinInput = styled.span`
display: grid;
grid-template-rows: 50% 50%;
grid-template-areas: "label"
                    "input";
border: 1px solid	#717171;
border-radius: 15px;
font-size: 14px;
width: 135px;
height: 54px;
padding-left: 5px;
`;

export const CheckoutInput = styled.span`
display: grid;
grid-template-rows: 50% 50%;
grid-template-areas: "label2"
                    "input2";
border: 1px solid #717171;
border-radius: 15px;
font-size: 12px;
background: rgb(0,0,0,0.4);
width: 135px;
height: 54px;
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