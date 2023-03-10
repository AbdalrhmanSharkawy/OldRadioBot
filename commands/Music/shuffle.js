const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'shuffle',
  cooldown: 5,
  aliases: ['sh'],
  category: 'Music',
  utilisation: '{prefix}shuffle',

  execute(client, message) {
    if (!message.member.voice.channel) return message.lineReply(` You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(` You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue `);

    const success = client.player.shuffle(message);

    if (success) message.lineReply(`Shuffled The Queue **${client.player.getQueue(message).tracks.length}** Songs`);
  },
};