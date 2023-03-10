const Discord = require('discord.js');
require('discord-reply');

module.exports = {
    name: 'volume',
          cooldown: 5,
    aliases: ['vol'],
    category: 'Music',
    utilisation: '{prefix}volume <1-100>',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.lineReply(` You Need To Be In VC`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

        if (!client.player.getQueue(message)) return message.lineReply(`- There Are No Music In The Queue`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.lineReply(`Please enter a valid number`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.lineReply(` Please enter a valid number between <1-100>`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.lineReply(`Volume level has changed **${parseInt(args[0])}%** !`);
    },
};