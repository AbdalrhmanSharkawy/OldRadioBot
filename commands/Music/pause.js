const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'pause',
  cooldown: 5,
  aliases: [],
  category: 'Music',
  utilisation: '{prefix}pause',

  execute(client, message) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    if (client.player.getQueue(message).paused) return message.lineReply(`This Song Is Already Paused`);

    const success = client.player.pause(message);

    if (success) message.lineReply(`The Song | ${client.player.getQueue(message).playing.title} Paused`);
  },
};