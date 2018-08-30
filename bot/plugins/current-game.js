const axios = require('axios');
const STEAM_ID_API_URL = 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/'
const STEAM_USER_API_URL = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/'

require('dotenv').config({
  path: './variables.env'
});

STEAM_API_KEY = process.env.STEAM_API_KEY;

exports.getCurrentGame = (accountName) => {

  return getSteamId(accountName)
    .then(steamId => getSteamUser(steamId))
    .then(user => user.gameextrainfo);
}

function getSteamUser(steamId) {

  return axios.get(STEAM_USER_API_URL, {
      params: {
        key: STEAM_API_KEY,
        steamids: steamId
      }
    })
    .then(response => {
      let user = response.data
        .response
        .players[0]

      return user;
    })
    .catch(error => {
      console.log(`Error getting '${steamId}' user's data\n${error}`);
    });
}

function getSteamId(accountName) {

  return axios.get(STEAM_ID_API_URL, {
      params: {
        key: STEAM_API_KEY,
        vanityurl: accountName
      }
    })
    .then(response => {
      let steamId = response.data
        .response
        .steamid;

      return steamId;
    })
    .catch(error => {
      console.log(`Error getting Steam ID for '${accountName}'\n${error}`);
    });
}