require("dotenv").config();

const { Client, GatewayIntentBits, Collection } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

["commands", "aliases"].forEach((file) => (client[file] = new Collection()));
["commands", "events"].forEach((f) => require(`./handles/${f}`)(client));

client.login(process.env.TOKEN);
