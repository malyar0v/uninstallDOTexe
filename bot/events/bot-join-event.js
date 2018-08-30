const Event = require('./event');
const equals = require('../helpers').equalsIgnoreCase;
const botUsername = require('../bot').botChannel.getName();

class BotJoinEvent extends Event {

  constructor(client, fun) {
    super(client, fun);
    this.handle();
  }

  handle() {
    this.client.on('join', (channel, username, self) => {

      channel = channel.substring(1);

      if (equals(username, botUsername)) {
        this.fun(this.client, channel);
      }

    });
  }

}

module.exports = BotJoinEvent;