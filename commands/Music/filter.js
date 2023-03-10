const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'filter',
  cooldown: 5,
  aliases: [],
  category: 'Music',
  utilisation: '{prefix}filter <name>',

  execute(client, message, args) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    if (!args[0]) return message.lineReply(`Please select a valid Filter to enable or disable `);

    const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

    if (!filterToUpdate) return message.lineReply(`For a list of filters Type ${client.config.discord.prefix}Filter`);

    const filtersUpdated = {};

    filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

    client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterToUpdate]) message.lineReply(`Am Adding This **Filter**`);
    else message.lineReply(`Am Removing This **Filter**`);
  },
};