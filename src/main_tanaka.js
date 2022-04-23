const { Client, Intents } = require('discord.js');
const fs = require("node:fs");
require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] });
const commands = {};
const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith('.js'));
const data = [];
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands[command.data.name] = command.run;
  data.push(command.data);
};
client.on("ready", async () => {
    console.log(data)
 await client.application.commands.set(data, '956839228317265980');
});
client.on("interactionCreate", interaction => {
  if (!interaction.isCommand()) return;
  try {
    commands[interaction.commandName].tanaka({c:client,i:interaction},data);
  } catch (e) {
    console.log(e);
  };
});
client.login("OTU1MDQyNDYxNDM1MTc0OTQz.Yjb6mg.Ligh7KWnZ8OpWvsM_vy6fbax8BM");
//test