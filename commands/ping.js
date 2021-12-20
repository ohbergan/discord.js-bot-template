// Hent kommando byggeren
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	// Send data til Discord så de vet hvilken kommando dette er
	data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
	// Hvis noen kjører kommandoen, gjør dette
	async execute(interaction) {
		// Send en melding tibake
		await interaction.reply('Pong!');
	},
};
