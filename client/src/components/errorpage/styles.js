import styled from "styled-components";
import background from "../../assets/images/nexus_background.png"
import SmallLogo from "../../assets/images/small_nexus.png"

export const Main = styled.div`
`
export const Background = styled.img`
position: fixed;
background-image:url(${background});
background-size: cover;
background-position:center;
background-attachment: fixed, scroll;
background-repeat: no-repeat, repeat-y;
width: 100%;
height: 100%;
z-index:-10;
`
export const TopBarContainer = styled.div`
display:flex;
height:100px;
justify-content:flex-start;
align-items:flex-start;
`

export const TopBarLogo = styled.div`
background-size: 110px 20px;
height:40px;
width:150px;
margin-top:40px;
margin-left:40px;
background-image:url(${SmallLogo});
background-repeat:no-repeat;
`
export const Body = styled.div`
display:flex;
justify-content:center;
align-items:center;
color:red;
`
export const ErrorContainer = styled.div`

`