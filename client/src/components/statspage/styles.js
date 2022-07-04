import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md"
import background from "../../assets/images/nexus_background.png"
import SmallLogo from "../../assets/images/small_nexus.png"

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
background-size: 100px 20px;
height:40px;
width:150px;
margin-top:40px;
margin-left:40px;
background-image:url(${SmallLogo});
background-repeat:no-repeat;
`

export const Body = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const PlayerBox = styled.div`
display:flex;
color:white;
padding: 20px;
font-size:35px;
background-color:#2A2E2E;
`

export const PlayerInfo = styled.div`
display:flex;
height:225px;
width:200px;
align-items: center;
justify-content: center;
padding-bottom:20px;
border-right:2px solid #fff;
flex-direction:column;

h4{
    font-family:roboto;
    font-size: 16px;
    margin: 0;
    color:white;
}
`

export const IconContainer = styled.img`
width:75px;
height:75px;    
margin-left:30px;
margin-top:30px;
`

export const RankContainer = styled.div`
display:flex;
margin-bottom:20px;
`
export const RankedIcon = styled.img`
height:160px;
width:160px;

`

export const SummonerContainer = styled.div`
margin-left: 20px;
h3 {
    text-transform: uppercase;
    font-size: 20px;
    font-family:roboto;
    margin-top:38px;
}
h4{
    font-family:roboto;
    font-size:16px;
    margin:0px;
}
`

export const MiddleContainer = styled.div`
display:flex;
flex-direction:column;
`

export const MiddleTopInfo = styled.div`
display:flex;
height:140px;
width:300px;
`

export const MiddleCenterInfo = styled.div`
display:flex;
height:40px;
width:300px;
`
export const WinLossContainer = styled.div`
display: flex;
flex-direction: row;

label {
    font-size:20px;
    color: white;
}
`

export const WinContainer = styled.span`
font-size:20px;
font-family:roboto;
color: white;
margin-left: 30px

`

export const LossesContainer = styled.span`
font-size: 20px;
font-family:roboto;
color: white;
margin-left:20px;
`

export const MiddleBottomInfo = styled.div`
height: 30px;
width: 250px;
`


export const RightContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-right:35px;
`

export const PercentageContainer = styled.div`
border-radius:50%;
border:3px solid white;
display: flex;
align-items: center;
justify-content: center;
height: 150px;
width: 150px;
margin-left:30px;
flex-direction: column;
gap: 10%;

label{
    font-size: 14px;
}
label strong {
    font-size: 20px;
}
`
export const ButtonContainer = styled.div`
display:flex;
margin-right:30px
`
export const BackButtonContent = styled.div`
display:flex;
padding:15px;
`

export const BackButtonContainer = styled.button`
display:flex;
background-color:inherit;
margin-top:180px;
color:#B4B4B4;
font-family:roboto;
font-size:20px;
cursor:pointer; 
border:none;
`
export const SummonerProflie = styled.div`
color:#FFFFFF;
margin-left:350px;
margin-top:200px;
font-size:20px;
height:20px;
width:150px;
`
export const MatchButtonContainer = styled.div`
display:flex;
`
export const MatchHistoryButton = styled.button`
display: flex;
font-family:roboto;
font-size:16px;
margin-left:25px;
border:none;
background-color:#2A2E2E;
color:#4BC8C5;
cursor:pointer;
`

export const ForwardIcon = styled(MdOutlineArrowForwardIos)`
margin-top:4px;
`







