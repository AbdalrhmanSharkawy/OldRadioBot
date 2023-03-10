const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'search',
  cooldown: 5,
  aliases: ['sr'],
  category: 'Music',
  utilisation: '{prefix}search <name>',

  execute(client, message, args) {
    if (!message.member.voice.channel) return message.lineReply(` You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!args[0]) return message.lineReply(`Please Type Song <NAME> `);

    client.player.play(message, args.join(" "));
  },
};