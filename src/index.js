require("dotenv").config();

const { gql } = require("@apollo/client/core");
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { graphQlClient } = require("./lib/graphQlClient");

// const restClient = new REST({ version: "9" }).setToken(process.env.TOKEN);

// async function teste() {
//   const deployedCommands = await restClient.get(
//     Routes.applicationCommands("1037720242329243680")
//   );
//   console.log(deployedCommands);
// }

// console.log(teste());

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
["commands", "events"].forEach((file) => require(`./handles/${file}`)(client));

client.login(process.env.TOKEN);

// async function main() {
//   const result = await graphQlClient.query({
//     query: gql`
//       query FindServerById($id: String) {
//         serversCollection(id: { id: { eq: $id } }) {
//           edges {
//             node {
//               id
//               name
//             }
//           }
//         }
//       }
//     `,
//     variables: {
//       id: "1",
//     },
//   });
//   console.log(result.data);
// }
// main();

// async deleteDeployedCommands() {
//   const deployedCommands = await this.restClient.get(
//     Routes.applicationCommands(this.appId)
//   );

//   await Promise.all(
//     deployedCommands.map(
//       deployedCommand => this.restClient.delete(
//         Routes.applicationCommand(
//           this.appId,
//           deployedCommand.id
//         )
//       )
//     )
//   );
// }
