const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("feedback")
    .setDescription("Share your feedback with our developers")
    .addStringOption((option) =>
      option
        .setName("feedback")
        .setDescription("Your feedback")
        .setRequired(true)
    ),
  async execute(interaction) {
    const message = interaction.options.getString("feedback");
    const username = interaction.user.username;

    await interaction.reply({
      content: `Hey ${username}, thanks for the feedback. Mensagem: ${message}`,
      ephemeral: true,
    });
  },
};
