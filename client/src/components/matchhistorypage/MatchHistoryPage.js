import { React, useState, useEffect } from 'react'
import { Body, Main, TopBarContainer, TopBarLogo, ChampionIcon, ChampionContainer, ChampionList, MatchHistoryContainer, LeftMatchContainer, RightMatchContainer, LeftNameContainer, RightNameContainer, BackgroundImage, NameSpan, LeftBlock, SummonerBlock, TimeBlock, MyChampionIcon, SummonerIcon, MiddleContainer, ItemsContainer, ItemSize, ItemRowOne, ItemRowTwo, ButtonContainer, BackButtonContent, MatchHistoryBlock } from './styles'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { BackButtonContainer } from '../statspage/styles'
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../loadingpage/LoadingPage'




const MatchHistoryPage = () => {

    const [loaded, setLoaded] = useState(false)
    const { id } = useParams();
    const [MatchHistory, setMatchHistory] = useState({})

    useEffect(() => {
        axios.get("http://localhost:4000/playermatch", { params: { username: id } })

            .then(function (response) {
                if (loaded === false) {
                    setMatchHistory(response.data)
                    setLoaded(true)
                }
            })
            .catch(function (error) {


            })
    }, [])



    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;
    }

    function minuteConverter(s) {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
    }

    function validSummoner(checkPlayerName) {
        for (let i = 0; i < 10; i++) {
            if (checkPlayerName[i].summonerName.toLowerCase() === id.toLowerCase()) {
                return checkPlayerName[i]
            }
        }
    }

    function ChangeSummonerSpell(validSummoner) {
        switch (validSummoner) {
            case 4:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerFlash.png" alt="Flash" />;
            case 12:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerTeleport.png" alt="Teleport" />;
            case 1:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerBoost.png" alt="Cleanse" />;
            case 14:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerDot.png" alt="Ignite" />;
            case 3:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerExhaust.png" alt="Exhause" />;
            case 6:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerHaste.png" alt="Ghost" />;
            case 7:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerHeal.png" alt="Heal" />;
            case 13:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerMana.png" alt="Clarity" />;
            case 11:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerSmite.png" alt="Smite" />;
            case 32:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerSnowball.png" alt="Mark" />;
            case 21:
                return <img src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/SummonerBarrier.png" alt="Barrier" />;
            default: break
        }
    }

    const navigate = useNavigate();
    function routeHome() {
        navigate('/')
    }

    if (loaded === false) {
        return (LoadingPage())
    } else if (loaded && MatchHistory[0])
        return (
            <Main>
                <BackgroundImage />
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
                            <MatchHistoryBlock>
                                Match History
                            </MatchHistoryBlock>
                        </BackButtonContent>
                    </ButtonContainer>
                    {MatchHistory.map((matchData) =>
                        <MatchHistoryContainer style={validSummoner(matchData.info.participants).win ? { borderLeft: "15px solid #4BC8C5" } : { borderLeft: "15px solid #C84B61" }}>
                            <LeftMatchContainer>
                                <LeftBlock>
                                    <SummonerBlock>
                                        <MyChampionIcon className="imageChamp1" alt="" src={"http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/" + validSummoner(matchData.info.participants).championName + ".png"} />
                                        <SummonerIcon>
                                            {ChangeSummonerSpell(validSummoner(matchData.info.participants).summoner1Id)}
                                            {ChangeSummonerSpell(validSummoner(matchData.info.participants).summoner2Id)}
                                        </SummonerIcon>
                                    </SummonerBlock>
                                    <TimeBlock>
                                        <p>{matchData.info.gameMode}</p>
                                        <p>{timeConverter(matchData.info.gameEndTimestamp)}</p>
                                        <p> Game Time: {minuteConverter(matchData.info.gameDuration)}</p>
                                    </TimeBlock>
                                </LeftBlock>
                                <MiddleContainer>
                                    <p> {validSummoner(matchData.info.participants).kills}/
                                        {validSummoner(matchData.info.participants).deaths}/
                                        {validSummoner(matchData.info.participants).assists}
                                    </p>
                                    <span>{((validSummoner(matchData.info.participants).kills + validSummoner(matchData.info.participants).assists) / validSummoner(matchData.info.participants).deaths).toFixed(2)} KDA</span>
                                    <span> {validSummoner(matchData.info.participants).totalMinionsKilled + validSummoner(matchData.info.participants).neutralMinionsKilled} CS</span>
                                    <span> {validSummoner(matchData.info.participants).visionScore} Vision</span>
                                </MiddleContainer>
                                <ItemsContainer>
                                    <ItemRowOne>
                                        <ItemSize src={"http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/" + validSummoner(matchData.info.participants).item0 + ".png"} alt='' />
                                        <ItemSize src={"http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/" + validSummoner(matchData.info.participants).item1 + ".png"} alt='' />
                                        <ItemSize src={"http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/" + validSummoner(matchData.info.participants).item2 + ".png"} alt='' />
                                        <ItemSize src={"http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/" + validSummoner(matchData.info.participants).item6 + ".png"} alt='' />
                                    </ItemRowOne>
                                    <ItemRowTwo>
                                        <ItemSize src={"http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/" + validSummoner(matchData.info.participants).item3 + ".png"} alt='' />
                                        <ItemSize src={"http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/" + validSummoner(matchData.info.participants).item4 + ".png"} alt='' />
                                        <ItemSize src={"http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/" + validSummoner(matchData.info.participants).item5 + ".png"} alt='' />

                                    </ItemRowTwo>
                                </ItemsContainer>
                            </LeftMatchContainer>

                            <RightMatchContainer>
                                <LeftNameContainer>
                                    {matchData.info.participants.slice(0, 5).map((data) =>
                                        <ChampionContainer>
                                            <ChampionList>
                                                <ChampionIcon alt="" src={"http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/" + data.championName + ".png"} />
                                                <NameSpan>{data.summonerName}</NameSpan>
                                            </ChampionList>
                                        </ChampionContainer>
                                    )}
                                </LeftNameContainer>
                                <RightNameContainer>
                                    {matchData.info.participants.slice(5, 10).map((data) =>
                                        <ChampionContainer>
                                            <ChampionList>
                                                <ChampionIcon alt="" src={"http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/" + data.championName + ".png"} />
                                                <NameSpan>{data.summonerName}</NameSpan>

                                            </ChampionList>
                                        </ChampionContainer>
                                    )}
                                </RightNameContainer>

                            </RightMatchContainer>


                        </MatchHistoryContainer>
                    )

                    }
                </Body>
            </Main >
        )
}

export default MatchHistoryPage

