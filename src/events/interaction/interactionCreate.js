module.exports = async (client, interaction) => {
  if (!interaction.type === 2) return;

  const command = client.commands.get(interaction.commandName);

  const args = interaction.options;

  if (!command) return;

  try {
    await command.run(client, interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "Me deparei com um erro, tente novamente",
    });
  }
};
