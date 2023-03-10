const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'queue',
  cooldown: 5,
  aliases: ['q'],
  category: 'Music',
  utilisation: '{prefix}queue',

  execute(client, message) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    message.lineReply(`** The Music Queue - ${message.guild.name}  ${client.player.getQueue(message).loopMode ? '( Repeat Enabled )' : ''}**\nNow : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
      return `**#${i + 1}** - ${track.title} | ${track.author} (Requested By : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `و **${queue.tracks.length - 5}** Other Songs` : `Queue **${queue.tracks.length}** Songs`}`));
  },
};