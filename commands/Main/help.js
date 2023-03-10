const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'help',
  cooldown: 5,
  aliases: [],
  category: 'Public',
  utilisation: '{prefix}help <command>',

  execute(client, message, args) {
    if (!args[0]) {
      const public = message.client.commands.filter(x => x.category == 'Public').map((x) => '`' + x.name + '`').join(',');
      const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(',');
      const economy = message.client.commands.filter(x => x.category == 'Economy').map((x) => '`' + x.name + '`').join(',');
      const moderation = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`' + x.name + '`').join(',');
      const bot = message.client.commands.filter(x => x.category == 'Bot').map((x) => '`' + x.name + '`').join(',');


      message.lineReply({
        embed: {
          color: '#c52e2e',
          author: { name: 'Commands List' },
          footer: { text: `${message.author.tag}` },
          fields: [
            { name: 'Public Commands', value: public },
                                    { name: 'Moderation Commands', value: moderation },
            { name: 'Music Commands', value: music },
            { name: 'Economy Commands (SOON)', value: economy },
            { name: 'Bot Commands ', value: bot },
          ],
          timestamp: new Date(),
          description: `to get detailed information about a command type ${client.config.discord.prefix}help <command>`,
        },
      });
    } else {
      const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

      if (!command) return message.lineReply(`${client.emotes.error} Can\'t Find This Command`);

      message.lineReply({
        embed: {
          color: '#c52e2e',
          author: { name: 'Command information' },
          footer: { text: `${message.author.tag}` },
          fields: [
            { name: 'Name', value: command.name, inline: true },
            { name: 'Aliases', value: command.aliases.length < 1 ? 'No Aliases' : command.aliases.join(', '), inline: true },
            { name: 'Usage', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
          ],
          timestamp: new Date(),
        }
      });
    };
  },
};