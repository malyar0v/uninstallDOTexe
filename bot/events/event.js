class Event {

  constructor(client, fun) {
    this.client = client;
    this.fun = fun;

    this.channels = [];
  }

  handle(){};

  getChannels() {
    return this.channels;
  }

  addChannel(channel) {
    this.channels.push(channel);
  }
}

module.exports = Event;