function getChannelByName(name, client) {

  return client.getChannels().filter(
      channel => channel.getFullName() === name)[0];
}

function equalsIgnoreCase(str1, str2) {
  return str1.localeCompare(str2, undefined, {sensitivity: 'base'}) === 0;
}

module.exports = {
  getChannelByName: getChannelByName,
  equalsIgnoreCase: equalsIgnoreCase
};
