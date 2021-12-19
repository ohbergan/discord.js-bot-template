const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('longpunch')
		.setDescription('Punch someone')
		.addMentionableOption((option) => option.setName('user').setDescription('Who are you puching').setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: false });
		const member = interaction.options.getMentionable('user', true);
		await wait(4000);
		await interaction.editReply({ content: `${member} got punched by <@${interaction.user.id}>`, ephemeral: false });
	},
};
