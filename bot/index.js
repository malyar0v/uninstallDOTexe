/**
 * Starting point of the Bot
 * */
const twitchJs = require("twitch-js"); // twitch-js lib
const options = require("./options").options; // Config for twitch-js*/
const Client = require('./client');

const Bot = require("./bot").Bot; // Bot object

const client = new Client(twitchJs.client(options));

new Bot(client).start();
