const { MessageEmbed } = require('discord.js');

const Discord = require('discord.js');
require('discord-reply');

const channel_id = "888985309948301383";

module.exports = {
  name: 'report',
  cooldown: 5,
  aliases: [],
  category: 'Bot',
  utilisation: '{prefix}report',

  execute(client, message, cmd, args) {
    let report = message.content.split(" ").slice('1').join(" ")
    const embed = new MessageEmbed()
      .setTitle(`**Report Message**`)
      .setDescription(report)
      .setFooter(`${message.author.tag}`)
      .setTimestamp()
      .setColor('#c52e2e')
      .setThumbnail('https://cdn.discordapp.com/avatars/878213084391551037/7ef0e8b96f019e64e70cb4b08eb4da0e.webp')
    message.lineReply('Sended Your Report To <@!801424247355867196>');
    message.react("<:BadgeServerVerified:891613607597600808>")
    client.channels.cache.get('888985309948301383').send(embed)

  }
}
