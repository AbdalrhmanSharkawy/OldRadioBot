const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'nowplaying',
  cooldown: 5,
  aliases: ['np'],
  category: 'Music',
  utilisation: '{prefix}nowplaying',

  execute(client, message) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    const track = client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

    message.lineReply({
      embed: {
        color: '#c52e2e',
        author: { name: track.title },
        footer: { text: `${message.author.tag}` },
        fields: [
          { name: 'Author', value: track.author, inline: true },
          { name: 'Requested By', value: track.requestedBy.username, inline: true },
          { name: 'Playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

          { name: 'Views', value: track.views, inline: true },
          { name: 'Duration', value: track.duration, inline: true },
          { name: 'Filters Enabled', value: filters.length + '/' + client.filters.length, inline: true },

          { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
          { name: 'Repeat Mode', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
          { name: 'Paused?', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

          { name: 'ProgressBar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
        ],
        thumbnail: { url: track.thumbnail },
        timestamp: new Date(),
      },
    });
  },
};