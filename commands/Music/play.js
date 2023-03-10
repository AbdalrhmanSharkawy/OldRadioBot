const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'play',
  cooldown: 5,
  aliases: ['p'],
  category: 'Music',
  utilisation: '{prefix}play <name/url>',

  execute(client, message, args) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!args[0]) return message.lineReply(`Please Type Song <URL/NAME>`);

    client.player.play(message, args.join(" "), { firstResult: true });
  },
};