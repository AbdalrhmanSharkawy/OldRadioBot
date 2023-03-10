const Discord = require('discord.js');
require('discord-reply');

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'avatar-server',
  cooldown: 5,
  aliases: [],
  category: 'Public',
  utilisation: '{prefix}avatar-server',

  execute(client, message, cmd, args) {
    let member = message.mentions.users.first() || message.author
    let avatar = message.guild.iconURL({ size: 1024 })
    const embed = new MessageEmbed()
      .setColor("#c52e2e")
      .setTitle(`${message.guild.name}'s Avatar`)
      .setImage(avatar)
      .setFooter(`${message.author.tag}`)
      .setTimestamp()
    message.lineReply(embed);
  }
}