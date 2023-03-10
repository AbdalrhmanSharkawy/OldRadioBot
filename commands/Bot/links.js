const Discord = require('discord.js');
require('discord-reply');

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'links',
  cooldown: 5,
  aliases: [],
  category: 'Bot',
  utilisation: '{prefix}links',

  execute(client, message, cmd, args) {
    const embed = new MessageEmbed()
      .setTitle(`OldRadio's Links`)
      .setDescription(`\n**Invite** [Click Me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)\n**Support Server** [Click Me](https://discord.gg/jwBQz3aBrK)`)
      .setFooter(`${message.author.tag}`)
      .setTimestamp()
      .setColor('#c52e2e')
      .setThumbnail('https://cdn.discordapp.com/avatars/878213084391551037/7ef0e8b96f019e64e70cb4b08eb4da0e.webp?size=1024')
    message.lineReply(embed);
  }
}