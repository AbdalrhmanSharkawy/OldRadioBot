const Discord = require('discord.js');
require('discord-reply');

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'avatar',
  cooldown: 5,
  aliases: ['pfp', 'profile', 'avt'],
  category: 'Public',
  utilisation: '{prefix}avatar',

  execute(client, message, cmd, args) {
    let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({ size: 1024 })
    const embed = new MessageEmbed()
      .setTitle(`${member.username}'s avatar`)
      .setImage(avatar)
      .setColor("#c52e2e")
      .setFooter(`${message.author.tag}`)
      .setTimestamp()
    message.lineReply(embed);
  }
}
