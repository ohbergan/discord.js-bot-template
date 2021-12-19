const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder().setName('secret').setDescription('I will tell you something secret'),
	async execute(interaction) {
		await interaction.reply({ content: `${member} got punched by <@${interaction.user.id}>`, ephemeral: true });
	},
};
