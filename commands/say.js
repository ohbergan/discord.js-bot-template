const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
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
	async execute(interaction) {
		const subcommand = interaction.options.getSubcommand();
		if (subcommand == 'hello') {
			const member = interaction.options.getMentionable('user', true);
			await interaction.reply({ content: `Hello, ${member}`, ephemeral: false });
		} else if (subcommand == 'bye') {
			const member = interaction.options.getMentionable('user', true);
			await interaction.reply({ content: `Bye, ${member}`, ephemeral: false });
		}
	},
};
