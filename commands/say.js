// Hent kommando byggeren
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	// Send data til Discord så de vet hvilken kommando dette er
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Say something')
		.addSubcommand((subCommand) =>
			subCommand
				.setName('hello')
				.setDescription('Say hello')
				.addMentionableOption((option) => option.setName('user').setDescription('Which user the bot should say this to').setRequired(true))
		)
		.addSubcommand((subCommand) =>
			subCommand
				.setName('bye')
				.setDescription('Say bye')
				.addMentionableOption((option) => option.setName('user').setDescription('Which user the bot should say this to').setRequired(true))
		),
	// Hvis noen kjører kommandoen, gjør dette
	async execute(interaction) {
		// Finn ut hvilken sub kommando som ble kjørt
		const subcommand = interaction.options.getSubcommand();

		if (subcommand == 'hello') {
			// Hvis sub kommandoen er "hello" så gjør dette
			// Finn ut hvilken bruker som botten skal si hallo til
			const member = interaction.options.getMentionable('user', true);
			// Send en melding og si hallo til brukeren
			await interaction.reply({ content: `Hello, ${member}`, ephemeral: false });
		} else if (subcommand == 'bye') {
			// Hvis sub kommandoen er "bye" så gjør dette
			// Finn ut hvilken bruker som botten skal si hade til
			const member = interaction.options.getMentionable('user', true);
			// Send en melding og si hade til brukeren
			await interaction.reply({ content: `Bye, ${member}`, ephemeral: false });
		}
	},
};
