const Discord = require("discord.js")
module.exports = {
	name: 'ban',
	description: 'Tag a member and kick them (but not really).',
    guildOnly: true,
	permissions: 'BAN_MEMBERS',
	async execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('You need to tag the user you are planning to ban !, For example:  \`-kick @user\`');
		}
		const member = message.mentions.members.first();
		
		await(member.send('You were banned!'))
		member.ban()
		message.channel.send(`You banned: ${member}`);
			
	}
};