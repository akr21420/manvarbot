const discord = require("discord.js");
const client = new discord.Client();
require('dotenv').config();
const fs = require("fs");
const pre = "-";
client.commands = new discord.Collection();
// const config = require("./config.json");
const cmdfiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of cmdfiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
client.once("ready", () => {
  console.log("Hello");
});
client.on("message", (message) => {
  if (!message.content.startsWith(pre) || message.author.bot) return;
  const args = message.content.slice(pre.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  console.log(message.content);
  if (message.content.length == 5 && message.content === "-ping")
    message.channel.send("Enta maraya message haaka");
  else {
    if (cmd === "ping") {
      client.commands.get("itslike").execute(message, args);
    }
  }
});
client.login(process.env.token);
