const discord = require("discord.js");

module.exports = {
  name: "help",
  type: 1,
  description: "Comandos do bot",
  run: async (client, interaction) => {
    let commands = client.commands;
    const embed = new discord.EmbedBuilder()
      .setTitle("Comandos do bot")
      .setColor("Random");

    commands.forEach((command) => {
      embed.addFields({
        name: `Comando: ${command.name}`,
        value: `Descrição: ${command.description}`,
        inline: true,
      });
    });

    interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
