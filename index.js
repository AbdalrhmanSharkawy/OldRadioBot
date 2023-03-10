// ┄┄══════✽ OldRadio Express Section ✽══════┄┄

const server = require("./server.js")();
const express = require("express");
const app = express();
app.listen(() => console.log(""));

app.use('/', (req, res) => {
  res.send(new Date());
});

// ┄┄══════✽ OldRadio Const Section ✽══════┄┄

const quick = require('quick.db');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const i18n = require("i18n");
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

// ┄┄══════✽ OldRadio Args Section ✽══════┄┄

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

// ┄┄══════✽ OldRadio Loading Commands Section ✽══════┄┄

console.log(`┄┄══════✽ Commands Start ✽══════┄┄\n`);

fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

  for (const file of commands) {
    const command = require(`./commands/${dirs}/${file}`);
    console.log(`Command ${file} Is Working `);
    client.commands.set(command.name.toLowerCase(), command);
  };
});

console.log(`\n┄┄══════✽ Commands Done ✽══════┄┄`);

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

console.log(`\n┄┄══════✽ Discord.js Events Start ✽══════┄┄\n`);

for (const file of events) {
  console.log(`discord.js event ${file} Is Working`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};
console.log(`\n┄┄══════✽ Discord.js Events Done ✽══════┄┄`);

console.log(`\n┄┄══════✽ Discord.Player Events Start ✽══════┄┄\n`);

for (const file of player) {
  console.log(`Discord.Player ${file} Is Working`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
};
console.log(`\n┄┄══════✽ Discord.Player Events Done ✽══════┄┄`);

// ┄┄══════✽ OldRadio Client Login Section ✽══════┄┄

client.login(process.env.BOT_TOKEN).catch(err => console.log('Wrong Token'))