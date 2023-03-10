
const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'link',
  cooldown: 5,
  aliases: [],
  category: 'Public',
  utilisation: '{prefix}link',

  execute(client, message, cmd, args) {
        message.channel.createInvite().then(inv => {
            message.author.send(inv.url).catch(err => {});
            message.lineReply("Check Your DMs");
        }).catch(err => message.lineReply("i got error "+err));
  }
}