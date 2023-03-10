const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'ping',
  cooldown: 5,
  aliases: [],
  category: 'Public',
  utilisation: '{prefix}ping',

  execute(client, message, cmd, args) {
    const embed = new MessageEmbed()
      .setTitle(`MusteBot's Ping`)
      .setDescription(
        `
            My Ping:
            - Bot Ping: \`${Math.round(client.ws.ping)}ms\`
          `
      )
      .setFooter(`${message.author.tag}`)
      .setTimestamp()
      .setColor('#c52e2e')
    message.lineReply(embed);
  }
}