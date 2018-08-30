const Channel = require('./channel');
const Command = require('./events/command');
const Plugins = require('./plugins/plugins');

class Client {

  constructor(cl) {
    this.client = cl;

    this.channels = [];

    const plugins = new Plugins(this);

    const snuffy = new Channel("notsnuffy");
    const uninstall = new Channel("uninstalldotexe");
    const dem = new Channel("demfzz3");


    const currentGamePlugin = plugins.getPlugins().current_game;

    snuffy.addPlugin(currentGamePlugin);
    dem.addPlugin(currentGamePlugin);

    uninstall.addCommand(new Command(this, "!iq", "200"));

    this.join(snuffy);
    // this.join(uninstall);
    this.join(dem);
  }

  connect() {
    this.client.connect();
  }

  on(type, fun) {
    this.client.on(type, fun);
  }

  once(type, fun) {
    this.client.once(type, fun);
  }

  say(channel, msg) {
    this.client.say(channel.getFullName(), msg);
  }

  join(channel) {

    if (this.isConnected()) {
      this.client.join(channel.getFullName());
      this.channels.push(channel);
    } else {
      this.once('connected', (address, port) => {
        this.client.join(channel.getFullName());
        this.channels.push(channel);
      });
    }
  }

  getChannels() {
    return this.channels;
  }

  isConnected() {
    return this.client.readyState() === 'OPEN';
  }
}

module.exports = Client;