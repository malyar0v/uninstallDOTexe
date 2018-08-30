const Plugin = require('./plugin');
const BotJoinEvent = require('../events/bot-join-event');

const currentGame = require('./current-game');

class Plugins {

  constructor(client) {



    this.plugins = {
      uptime: new Plugin(client, "!uptime",
        (request, cl, channel, userstate, msg) => {

          request(`https://decapi.me/twitch/uptime/${channel.getName()}`,
            (err, resp, body) => {
              cl.say(channel, body);
            });
        }),
      current_game: new BotJoinEvent(client, (cl, channel) => {

        var previous = 'IRL';

        setInterval(() => {

          currentGame.getCurrentGame(channel)
            .then(game => {

              if (game !== previous && game) {
                cl.client.say(channel, `!game ${game}`);
                previous = game;
              }
            });

        }, 10000);
      })
    }
  }

  getPluginByName(name) {
    const plugin = this.getPlugins()[name];

    if (plugin) {
      return plugin;
    } else {
      console.error(`${name} plugin was not found!`);
    }
  }

  getPlugins() {
    return this.plugins;
  }

}

module.exports = Plugins;