const botUsername = require('./options').options.identity.username;
const Channel = require('./channel');
const botChannel = new Channel(botUsername);

class Bot {

  constructor(client) {
    this.client = client;
  }

  start() {
    this.client.connect();
  }
}

module.exports = {
  Bot: Bot,
  botChannel: botChannel
};
