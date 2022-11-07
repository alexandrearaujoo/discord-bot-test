const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Comandos do bot"),

  async execute(interaction) {
    let commands = interaction.client.commands;
    const embed = new EmbedBuilder()
      .setTitle("Comandos do bot")
      .setColor("Random");

    commands.forEach((command) => {
      embed.addFields({
        name: `Comando: ${command.data.name}`,
        value: `Descrição: ${command.data.description}`,
      });
    });

    interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
