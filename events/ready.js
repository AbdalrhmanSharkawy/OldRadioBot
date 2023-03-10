module.exports = async (client) => {
  console.log(`┄┄══════✽ OldRadio Client Login Start ✽══════┄┄ \n`);
  console.log(`✅ | Bot Is Fully Working \n✅ | Logged In As ${client.user.tag}`)
  console.log(`\n┄┄══════✽ OldRadio Client Login Done ✽══════┄┄`);

  client.user.setActivity(`${client.config.discord.prefix}help | ${client.guilds.cache.size} Servers`, {type:"LISTENING"})
};