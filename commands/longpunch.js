// Hent kommando byggeren
const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	// Send data til Discord så de vet hvilken kommando dette er
	data: new SlashCommandBuilder()
		.setName('longpunch')
		.setDescription('Punch someone')
		.addMentionableOption((option) => option.setName('user').setDescription('Who are you puching').setRequired(true)),
	// Hvis noen kjører kommandoen, gjør dette
	async execute(interaction) {
		// Denne kommandoen tar litt tid så send en melding om at botten jobber
		await interaction.deferReply({ ephemeral: false });
		// Finn ut hvilken bruker som blir slått
		const member = interaction.options.getMentionable('user', true);
		// Vent 4 sekunder
		await wait(4000);
		// Endre meldingen og fortell at brukeren ble slått
		await interaction.editReply({ content: `${member} got punched by <@${interaction.user.id}>`, ephemeral: false });
	},
};
