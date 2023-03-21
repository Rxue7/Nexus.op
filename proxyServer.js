var express = require('express');
var cors = require('cors');
const axios = require('axios');
const { response } = require('express');
var app = express();
require('dotenv').config()

// this function blocks cors error 
app.use(cors());
app.listen(4000, function () {

})

// using apikey to get summoner icon, names and levels

const apiKey = process.env.REACT_APP_API_KEY
app.get("/playerinfo", async (req, res) => {
    const playerName = req.query.username
    const apiCallInfo = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + apiKey
    const userData = []
    const playerUserName = await axios.get(apiCallInfo)
        .then(response => response.data)
        .catch(error => error)
    userData.push(playerUserName)
    res.json(userData)
})

//  get Id when a player is search

function GetPlayerId(playerName) {
    return axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + apiKey)
        .then(response => { return response.data.id })
        .catch(error => error)
}

// using the function above you 
//get the player Id to get the rank information

app.get("/playerrank", async (req, res) => {
    const playerName = req.query.username
    const playerId = await GetPlayerId(playerName)
    const apiCallRank = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + playerId + "?api_key=" + apiKey
    const rankData = []
    const playerRank = await axios.get(apiCallRank)
        .then(response => response.data)
        .catch(error => error)
    // pushes playerRank into an array 
    rankData.push(playerRank)
    res.json(rankData)
})

function GetPuuid(playerName) {
    return axios.get("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + apiKey)
        .then(response => { return response.data.puuid })
        .catch(error => error)
}

app.get("/playermatch", async (req, res) => {
    const playerName = req.query.username
    const puuid = await GetPuuid(playerName)
    const apiCallMatch = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids" + "?api_key=" + apiKey
    const matchHistory = await axios.get(apiCallMatch)
        .then(response => response.data)
        //["NA1_4343074430","NA1_4342002130","NA1_4339376105","NA1_4336755216","NA1_4336669353","NA1_4336661621",
        //"NA1_4336185236","NA1_4336190922","NA1_4332685733","NA1_4332174379","NA1_4331659018","NA1_4331653679",
        //"NA1_4331476174","NA1_4329718218","NA1_4329733141","NA1_4329678675","NA1_4329464036","NA1_4329402104",
        //"NA1_4329338370","NA1_4328938920"]
        .catch(error => error)
    var matchData = []

    for (var i = 0; i < 5; i++) {
        const MatchArray = matchHistory[i];
        const apiMatchId = await axios.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + MatchArray + "?api_key=" + apiKey)
            .then(response => response.data)
            .catch(error => error)
        matchData.push(apiMatchId)
    }
    // sends final data
    //JSON response to frontend. 
    res.json(matchData)
});





