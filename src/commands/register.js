const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const findServerById = require("../graphql/queries/findServerById");
const registerServer = require("../graphql/mutations/registerServer");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("Register your server to use commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const { id, name } = interaction.member.guild;
    const { user: username } = interaction;

    await interaction.reply("Working on it...");

    const { serversCollection } = await findServerById(id);

    if (serversCollection.edges.length >= 1) {
      await interaction.editReply({
        content: "This server already registered",
      });
      return;
    }

    await registerServer(id, name);

    await interaction.editReply({
      content: `Hey ${username}, your server was registered`,
    });
  },
};
