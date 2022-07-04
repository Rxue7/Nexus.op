import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { IconContainer, PlayerBox, RankContainer, PlayerInfo, SummonerContainer, MiddleTopInfo, MiddleCenterInfo, MiddleBottomInfo, WinContainer, LossesContainer, PercentageContainer, WinLossContainer, ButtonContainer, BackButtonContainer, BackButtonContent, MatchHistoryButton, MatchButtonContainer, ForwardIcon, TopBarLogo, Body, RankedIcon, TopBarContainer, MiddleContainer, RightContainer, SummonerProflie, Background } from "./styles";
import iron from "../../assets/images/Emblem_Iron.png"
import bronze from "../../assets/images/Emblem_Bronze.png"
import silver from "../../assets/images/Emblem_Silver.png"
import gold from "../../assets/images/Emblem_Gold.png"
import platinum from "../../assets/images/Emblem_Platinum.png"
import diamond from "../../assets/images/Emblem_Diamond.png"
import master from "../../assets/images/Emblem_Master.png"
import grandmaster from "../../assets/images/Emblem_Grandmaster.png"
import challenger from "../../assets/images/Emblem_Challenger.png"
import { MdOutlineArrowBackIosNew } from "react-icons/md"



const StatsPage = () => {
    const [loaded, setLoaded] = useState(false)
    const { id } = useParams();
    const [playerData, setPlayerData] = useState({})

    useEffect(() => {
        axios.get("http://localhost:4000/playerinfo", { params: { username: id } })

            .then(function (response) {
                if (loaded === false) {
                    setPlayerData(response.data)
                    setLoaded(true)
                }
            })
            .catch(function (error) {
                console.log(error)

            })
    }, [])
    console.log(playerData)

    const [playerRank, setPlayerRank] = useState({})
    //    params passes the id into the back end
    useEffect(() => {
        axios.get("http://localhost:4000/playerrank", { params: { username: id } })
            .then(function (response) {
                setPlayerRank(response.data)
            })
            .catch(function (error) {

            })
    }, [])
    console.log(playerRank)

    function MatchType(findMatchType) {
        if (findMatchType === "RANKED_SOLO_5x5") {
            return playerRank[0][0]
        }
        else { return playerRank[0][1] }

    }

    function ChangeRank(playerRank) {
        switch (playerRank) {
            case "IRON":
                return <RankedIcon src={iron} alt="" />;
            case "BRONZE":
                return <RankedIcon src={bronze} alt="" />;
            case "SILVER":
                return < RankedIcon src={silver} alt="" />;

            case "GOLD":
                return <RankedIcon src={gold} alt="" />;

            case "PLATINUM":
                return <RankedIcon src={platinum} alt="" />;

            case "DIAMOND":
                return <RankedIcon src={diamond} alt="" />;

            case "MASTER":
                return <RankedIcon src={master} alt="" />;

            case "GRANDMASTER":
                return <RankedIcon src={grandmaster} alt="" />;
            case "CHALLENGER":
                return <RankedIcon src={challenger} alt="" />;
            default: break
        }
    }

    function percentage() {
        return ((MatchType(playerRank[0][0].queueType).wins / (MatchType(playerRank[0][0].queueType).wins + MatchType(playerRank[0][0].queueType).losses)) * 100).toFixed(1)
    }

    const navigate = useNavigate();
    function routeHome() {
        navigate('/')
    }

    function routeMatch() {
        navigate(`/MatchHistory/${id} `)
    }


    if (loaded === false) {
        return (loaded)
    } else if (loaded && playerData[0] && playerRank[0])
        return (
            <>
                <Background />
                <TopBarContainer>
                    <TopBarLogo />
                </TopBarContainer>
                <Body>
                    <ButtonContainer>
                        <BackButtonContent>
                            <BackButtonContainer onClick={() => routeHome()}>
                                <MdOutlineArrowBackIosNew />
                                Search for Summoner
                            </BackButtonContainer>
                        </BackButtonContent>
                        <SummonerProflie>
                            Summoner Proflie
                        </SummonerProflie>
                    </ButtonContainer>
                    <PlayerBox>
                        <PlayerInfo>
                            <RankContainer>
                                {ChangeRank(MatchType(playerRank[0][0].queueType).tier)}
                            </RankContainer>
                            <h4>{MatchType(playerRank[0][0].queueType).tier} {MatchType(playerRank[0][0].queueType).rank}</h4>
                        </PlayerInfo>
                        <MiddleContainer>
                            <MiddleTopInfo>
                                <IconContainer
                                    src={"http://ddragon.leagueoflegends.com/cdn/12.11.1/img/profileicon/" + playerData[0].profileIconId + ".png"} alt="">
                                </IconContainer>
                                <SummonerContainer>
                                    <h3> <strong>{playerData[0].name} </strong> #NA1 </h3>
                                    <h4> Level: {playerData[0].summonerLevel}</h4>
                                </SummonerContainer>
                            </MiddleTopInfo>
                            <MiddleCenterInfo>
                                <WinLossContainer>
                                    <WinContainer>
                                        Wins:
                                        <label> {MatchType(playerRank[0][0].queueType).wins} </label>
                                    </WinContainer>
                                    <LossesContainer>
                                        Losses:
                                        <label> {MatchType(playerRank[0][0].queueType).losses} </label>
                                    </LossesContainer>
                                </WinLossContainer>
                            </MiddleCenterInfo>
                            <MiddleBottomInfo>
                                <MatchButtonContainer onClick={() => routeMatch()}>
                                    <MatchHistoryButton>
                                        See Match History
                                        <ForwardIcon />
                                    </MatchHistoryButton>
                                </MatchButtonContainer>
                            </MiddleBottomInfo>
                        </MiddleContainer>
                        <RightContainer>
                            <PercentageContainer>
                                <label> <strong> {percentage()} %  </strong> </label>
                                <label> WIN RATE </label>
                            </PercentageContainer>
                        </RightContainer>
                    </PlayerBox>
                </Body>
            </ >
        )
}
export default StatsPage