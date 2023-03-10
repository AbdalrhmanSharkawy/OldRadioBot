const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'filters',
  cooldown: 5,
  aliases: ['fs'],
  category: 'Music',
  utilisation: '{prefix}filters',

  execute(client, message) {
    if (!message.member.voice.channel) return message.lineReply(`You Need To Be In VC`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.lineReply(`You Are Not In The Same VC`);

    if (!client.player.getQueue(message)) return message.lineReply(`There Are No Music In The Queue`);

    const filtersStatuses = [[], []];

    client.filters.forEach((filterName) => {
      const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
      array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
    });

    message.lineReply({
      embed: {
        color: '#c52e2e',
        author: { name: 'Filters List' },
        footer: { text: `${message.author.tag}` },
        fields: [
          { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
          { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
        ],
        timestamp: new Date(),
        description: `Filters List Type \`${client.config.discord.prefix}filter\` To Add Filter To Songs`,
      },
    });
  },
};