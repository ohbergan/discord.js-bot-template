// Hent kommando byggeren
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	// Send data til Discord så de vet hvilken kommando dette er
	data: new SlashCommandBuilder()
		.setName('punch')
		.setDescription('Punch someone')
		.addMentionableOption((option) => option.setName('user').setDescription('Who are you puching').setRequired(true)),
	// Hvis noen kjører kommandoen, gjør dette
	async execute(interaction) {
		// Finn ut hvilken bruker som blir slått
		const member = interaction.options.getMentionable('user', true);
		// Send melding og fortell at brukeren ble slått
		await interaction.reply({ content: `${member} got punched by <@${interaction.user.id}>`, ephemeral: false });
	},
};
