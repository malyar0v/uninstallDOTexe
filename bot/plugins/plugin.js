const ChatEvent = require('../events/chat-event');
const helpers = require('../helpers');
const request = require('request');

class Plugin extends ChatEvent {

  constructor(client, triggerMsg, fun) {
    super(client, fun);

    this.triggerMsg = triggerMsg;
  }

  handle() {
    this.client.on('chat', (chn, userstate, msg, self) => {

      if (self) {
        return;
      }

      const channel = helpers.getChannelByName(chn, this.client);

      if (helpers.equalsIgnoreCase(this.triggerMsg, msg) &&
        this.getChannels().includes(channel)) {
        this.fun(request, this.client, channel, userstate, msg);
      }
    })
  }

}

module.exports = Plugin;