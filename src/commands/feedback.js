const { SlashCommandBuilder } = require("discord.js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
    const { username } = interaction.user;

    await interaction.reply("Working on it");

    await prisma.feedback.create({
      data: {
        username,
        message,
      },
    });

    await interaction.editReply({
      content: `Hey ${username}, thanks for the feedback.`,
      ephemeral: true,
    });
  },
};
