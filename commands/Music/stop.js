const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'stop',
  cooldown: 5,
  aliases: ['exit', 'leave'],
  category: 'Music',
  utilisation: '{prefix}stop',

  execute(client, message) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    client.player.setRepeatMode(message, false);
    const success = client.player.stop(message);

    if (success) message.lineReply(`Song Stopped`);
  },
};