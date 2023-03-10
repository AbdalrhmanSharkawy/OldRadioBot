const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'resume',
  cooldown: 5,
  aliases: [],
  category: 'Music',
  utilisation: '{prefix}resume ',

  execute(client, message) {
    if (!message.member.voice.channel) return message.lineReply(` You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(` You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    if (!client.player.getQueue(message).paused) return message.lineReply(`The Song is already playing`);

    const success = client.player.resume(message);

    if (success) message.lineReply(` Song  ${client.player.getQueue(message).playing.title} Started`);
  },
};