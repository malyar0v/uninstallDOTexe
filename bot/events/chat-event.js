const Event = require('./event');
const helpers = require('../helpers');

class ChatEvent extends Event {

  constructor(client, fun) {
    super(client, fun);
  }

  handle() {
    this.client.on('chat', (chn, userstate, msg, self) => {

      if (self) {
        return;
      }

      const channel = helpers.getChannelByName(chn, this.client);

      if (this.getChannels().includes(channel)) {
        this.fun(this.client, channel, userstate, msg);
      }
    })
  }

}

module.exports = ChatEvent;