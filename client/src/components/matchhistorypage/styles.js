import styled from "styled-components";
import background from "../../assets/images/nexus_background.png"
import SmallLogo from "../../assets/images/small_nexus.png"

export const Main = styled.div`
`
export const BackgroundImage = styled.img`
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
justify-content: center;
align-items: center;
flex-direction: column;
`

export const ChampionIcon = styled.img`
height: 40px;
width: 40px;
`

export const ChampionContainer = styled.ul`
list-style: none;
display: flex;
margin: 4px;

`
export const ChampionList = styled.li`
display:flex;
justify-content: center;
align-items:center;
`

export const MatchHistoryContainer = styled.div`
display: flex;
background-color:#2A2E2E;
width: 48vw;
border: 1px solid white;
border-radius:15px;
border-left:15px solid white;
margin-bottom: 1%
`

export const LeftMatchContainer = styled.div`
display: flex;
flex: 60%;
`
export const LeftBlock = styled.div`
width:200px;
`
export const SummonerBlock = styled.div`
display:flex;
flex-direction:row;
width:300px;
margin-left:20px;
margin-top:10px;
`
export const SummonerIcon = styled.div`
display:flex;
flex-direction:column;
width:50px;
margin-left: 10px;
`
export const MyChampionIcon = styled.img`
height:100px;
`

export const TimeBlock = styled.div`
display:flex;
flex-direction:column;
width:300px;
margin-left:20px;
margin-top:20px;

p{
    color:white;
    font-size:12px;
    margin:4px;
}
`
export const MiddleContainer = styled.div`
display:flex;
flex-direction:column;
width:100px;
margin:10px;
align-items:center;

span{
    color:white;
    font-size:14px;
    margin:4px;
}

p{
    color:white;
    font-size 14px;
    margin:4px;
}
`
export const ItemsContainer = styled.div`
display flex;
flex-direction:column;
width:200px;
`
export const ItemSize = styled.img`
height:45px;
`
export const ItemRowOne = styled.div`
display:flex
flex-direction:row;
width:200px;
margin-top:10px;
`
export const ItemRowTwo = styled.div`
display:flex
flex-direction:row;
width:200px;
`

export const RightMatchContainer = styled.div`
display: flex;
flex: 70%;
`

export const LeftNameContainer = styled.div`
display: flex;
flex: 30%;
flex-direction:column;
`

export const RightNameContainer = styled.div`
display: flex;
flex: 70%;
flex-direction:column;
`

export const NameSpan = styled.span`
font-size:12px;
font-family:roboto;
margin-left: 10px;
color:white;
`
export const ButtonContainer = styled.div`
display:flex;

`
export const BackButtonContent = styled.div`
display:flex;
margin-bottom:20px;
`

export const BackButtonContainer = styled.button`
background-color:inherit;
color:#B4B4B4;
font-size:24px;
cursor:pointer; 
border:none;
`
export const MatchHistoryBlock = styled.div`
color:#FFFFFF;
margin-left:550px;
margin-top:180px;
font-size:24px;
height:20px;
width:150px;

`