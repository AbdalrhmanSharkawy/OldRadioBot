const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'clear',
  cooldown: 5,
  aliases: [],
  category: 'Music',
  utilisation: '{prefix}clear',

  execute(client, message) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    if (client.player.getQueue(message).tracks.length <= 1) return message.lineReply(`There is only one song in the queue`);

    client.player.clearQueue(message);

    message.lineReply(`Queue **CLEARED** `);
  },
};