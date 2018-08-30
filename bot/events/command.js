const ChatEvent = require('./chat-event');
const equals = require('../helpers').equalsIgnoreCase;
const botChannel = require('../bot').botChannel;

class Command extends ChatEvent {

  constructor(client, triggerMsg, response) {

    super(client, (cl, channel, userstate, msg) => {
      if (equals(triggerMsg, msg)) {
        cl.say(channel, `@${userstate['display-name']} ${response}`);
      }
    });

    this.channel = botChannel;
  }

  getChannels() {
    return this.channels;
  }

  addChannel(channel) {
    this.channels[0] = channel;
  }

}

module.exports = Command;