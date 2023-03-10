const { MessageEmbed } = require('discord.js');

const Discord = require('discord.js');
require('discord-reply');

const channel_id = "888985326520004608";

module.exports = {
    name: 'suggestion',
    cooldown: 5,
    aliases: ['sugg'],
    category: 'Bot',
    utilisation: '{prefix}Suggestion <suggestion>',

  execute(client, message, cmd, args) {
    let sugg = message.content.split(" ").slice('1').join(" ")
    const embed = new MessageEmbed()
      .setTitle(`**Suggestion Message**`)
      .setDescription(sugg)  
      .setFooter(`${message.author.tag}`)
      .setTimestamp()
      .setColor('#c52e2e')
      .setThumbnail('https://cdn.discordapp.com/avatars/878213084391551037/7ef0e8b96f019e64e70cb4b08eb4da0e.webp')
       message.lineReply('Sended Your Suggestion To <@!801424247355867196>');
message.react("<:BadgeServerVerified:891613607597600808>")
    client.channels.cache.get('888985326520004608').send(embed)
    
}
}

