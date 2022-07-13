import styled, { keyframes } from "styled-components";

export const Main = styled.div`
`

export const Body = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:100vh;
background:#1d1e2c;
`

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

  to {
    transform: rotate(360deg);
}
`;

export const Spinner = styled.div`
height:70px;
width:70px;
border: 6px solid #3FC1C936;
display:incline-block;
border-radius:50%;
border-top-color:#4BC8C5;
animation: ${rotate} 1.5s infinite ease-in-out ;
`
const bounce = keyframes`
0%,80%,100%{
  transform:scale(0);
  background:#4BC8C5;
}
40%{
  background:#4BC8C5;
  transform:scale(1);
}
`
export const DotContainer = styled.div`
display:flex;
margin:20px;
`
export const DotOne = styled.div`
height:24px;
width:24px;
background:#4BC8C5;
border-radius:50%;
animation: ${bounce} 1.5s infinite ease;
`
export const DotTwo = styled.div`
height:24px;
width:24px;
background:#4BC8C5;
border-radius:50%;
animation: ${bounce} 1.5s infinite ease;
animation-delay:150ms
`
export const DotThree = styled.div`
height:24px;
width:24px;
background:#4BC8C5;
border-radius:50%;
animation: ${bounce} 1.5s infinite ease;
animation-delay:300ms
`


