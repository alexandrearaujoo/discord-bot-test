const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Veja o avatar de um usuario")
    .addStringOption((options) =>
      options
        .setName("usuario")
        .setDescription("Usuario para ver avatar")
        .setRequired(false)
    ),

  async execute(interaction) {
    let userMention = interaction.options.getUser("usuário");
    let person;

    if (!userMention) {
      person = interaction.user;
    } else {
      person = userMention;
    }

    const embed = new discord.EmbedBuilder()
      .setTitle(`Imagem de ${person.username}`)
      .setImage(person.displayAvatarURL())
      .setURL(person.avatarURL({ format: "png", dynamic: true, size: 1024 }));

    await interaction.reply({ embeds: [embed] });
  },
};
