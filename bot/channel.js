const equals = require('./helpers').equalsIgnoreCase;

class Channel {

  constructor(name) {
    this.name = name;

    this.commands = [];
    this.plugins = [];
    this.events = [];

    this.id = "";
  }

  getName() {
    return this.name;
  }

  getFullName() {
    return `#${this.name}`;
  }

  addEvent(event) {
    event.addChannel(this);
    event.handle();
    this.events.push(event);
  }

  addCommand(command) {
    command.addChannel(this);
    command.handle();
    this.commands.push(command);
  }

  addPlugin(plugin) {
    plugin.addChannel(this);
    // plugin.handle();
    this.plugins.push(plugin);

  }

  equals(channel) {
    return (equals(channel.getName(), this.getName()));
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }
}

module.exports = Channel;