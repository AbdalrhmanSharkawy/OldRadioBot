const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'say',
  cooldown: 5,
  aliases: [],
  category: 'Moderation',
  utilisation: '{prefix}say',

  execute(client, message, cmd, args) {
    let say1 = message.content.split(" ").slice('1').join(" ")
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.lineReply('Sadly You Dont Have `MANAGE_MESSAGES` Permission')
    message.delete()
    message.lineReply(say1)
  }
}