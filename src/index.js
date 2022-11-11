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

client.login(
  "MTAzNzcyMDI0MjMyOTI0MzY4MA.Gj6mp5.UUH9WnWSAcPAQ2m9zsPOOURTjClFtNeyZp3_Jk"
);

const metadata = {
  spec: "ft-1.0.0",
  name: "Token 1",
  symbol: "simbolo 1",
  icon: "icone 1",
  reference: "reference 1",
  reference_hash: "hash 1",
  decimals: "2",
};

// async function main() {
//   const result = await graphQlClient.query({
//     query: gql`
//       query ListServerTokens($filter: String) {
//         serversCollection(filter: { id: { eq: $filter } }) {
//           edges {
//             node {
//               server_tokensCollection {
//                 edges {
//                   node {
//                     server_id
//                     token_id
//                     servers {
//                       id
//                       name
//                     }
//                     tokens {
//                       id
//                       metadata
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//     variables: {
//       filter: "1",
//     },
//   });
//   console.log(
//     result.data.serversCollection.edges[0].node.server_tokensCollection.edges
//   );
// }
// main();

// console.log(result.data);

// server id 103517805724750236

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
