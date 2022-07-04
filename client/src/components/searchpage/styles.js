import styled from "styled-components"
import { FaSearch } from 'react-icons/fa';
import background from "../../assets/images/nexus_background.png"
import Logo from "../../assets/images/nexuslogo.png"
import SmallLogo from "../../assets/images/small_nexus.png"


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
background-size: 100px 20px;
height:40px;
width:150px;
margin-top:40px;
margin-left:40px;
background-image:url(${SmallLogo});
background-repeat:no-repeat;
`

export const Main = styled.div`
height:300px;
display: flex;
justify-content:center;
align-items:end;
`
export const Header = styled.div`
height:100px;
width:400px;
background-size: 400px 100px ;
background-repeat:no-repeat;
background-image:url(${Logo});
`
export const SubBody = styled.div`
display: flex;
justify-content:center;
align-items:center;
width:100vw;
`
export const Search = styled.form`
position: relative;
display:inline-block;
margin-top:50px;

`
export const SearchIcon = styled(FaSearch)`
position: absolute;
top: 8px;
right:12px;
color:white;
`

export const SearchBox = styled.input`
width:800px;
height:50px;
border-radius:10px;
background-color:#1D1D1D;
font-size:20px;
color:white;
outline:none;
`
export const SearchButton = styled.button`
background-color: #1D1D1D;
border: none;
color: white;
padding: 16px 16px;
font-size: 16px;
cursor: pointer;
position:absolute;
top: 12px;
right:12px;
`
