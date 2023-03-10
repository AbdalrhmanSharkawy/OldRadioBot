const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'loop',
  cooldown: 5,
  aliases: ['repeat'],
  category: 'Music',
  utilisation: '{prefix}loop',

  execute(client, message, args) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    if (args.join(" ").toLowerCase() === 'queue') {
      if (client.player.getQueue(message).loopMode) {
        client.player.setLoopMode(message, false);
        return message.lineReply(`Repeat Mode **Disabled** `);
      } else {
        client.player.setLoopMode(message, true);
        return message.lineReply(`Repeat Mode **Enabled**`);
      };
    } else {
      if (client.player.getQueue(message).repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.lineReply(`Repeat Mode **Disabled**`);
      } else {
        client.player.setRepeatMode(message, true);
        return message.lineReply(`Repeat Mode **Enabled**`);
      };
    };
  },
};