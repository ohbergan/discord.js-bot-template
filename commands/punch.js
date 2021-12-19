const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('punch')
		.setDescription('Punch someone')
		.addMentionableOption((option) => option.setName('user').setDescription('Who are you puching').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMentionable('user', true);
		await interaction.reply({ content: `${member} got punched by <@${interaction.user.id}>`, ephemeral: false });
	},
};
