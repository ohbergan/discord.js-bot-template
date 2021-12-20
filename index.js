// Hent filservice
const fs = require('fs');
// Hent Discord.JS moduler
const { Client, Collection, Intents } = require('discord.js');
// Hent bot token
const { token } = require('./config.json');

// Lag en ny klient, altså start botten
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Lag en mappe med kommandoer
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Lag en mappe med eventer
const eventFiles = fs.readdirSync('./events').filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Kjør kommandoen
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// La botten logge inn
client.login(token);
