// Hent kommando byggeren
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	// Send data til Discord så de vet hvilken kommando dette er
	data: new SlashCommandBuilder().setName('secret').setDescription('I will tell you something secret'),
	// Hvis noen kjører kommandoen, gjør dette
	async execute(interaction) {
		// Send en meldingen som bare den som kjørte kommandoen kan se
		await interaction.reply({ content: `Dette er en hemmelig melding som bare du kan se`, ephemeral: true });
	},
};
