const Discord = require('discord.js');
require('discord-reply');

module.exports = {
  name: 'balance',
  cooldown: 5,
  aliases: ['bal', 'economy', 'credits'],
  category: 'Economy',
  utilisation: '{prefix}balance <@user>',

  execute(client, message, cmd, args) {
    
  }
}