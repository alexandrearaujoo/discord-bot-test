const { readdirSync } = require("fs");

module.exports = (client) => {
  const slashCommands = [];

  const load = async (dirs) => {
    const commands = readdirSync(`./src/commands/${dirs}/`).filter((file) =>
      file.endsWith(".js")
    );

    for (const file of commands) {
      const command = require(`../commands/${dirs}/${file}`);

      client.commands.set(command.name, command);
      slashCommands.push(command);

      console.log(`o comando ${command.name} foi carregado com sucesso`);
    }
  };

  client.on("ready", async () => {
    await client.application.commands.set(slashCommands);
  });

  readdirSync("./src/commands").forEach((x) => load(x));
};