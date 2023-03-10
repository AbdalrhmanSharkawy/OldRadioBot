const Discord = require('discord.js');
require('discord-reply');

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'embed',
  cooldown: 5,
  aliases: [],
  category: 'Moderation',
  utilisation: '{prefix}embed',

  execute(client, message, cmd, args) {
        let member = message.mentions.users.first() || message.author
    let avatar = message.guild.iconURL({ size: 64 })
    let embed1 = message.content.split(" ").slice('1').join(" ")
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.lineReply('Sadly You Dont Have `MANAGE_MESSAGES` Permission')
    message.delete()
    const embed = new MessageEmbed()
      .setDescription(embed1)
      .setColor('#c52e2e')
    message.lineReply(embed);
  }
}