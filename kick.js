module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
    guildOnly: true,
	permissions: 'KICK_MEMBERS',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('You need to tag the user you are planning to kick !, For example:  \`-kick @user\`');
		}
		const member = message.mentions.members.first();
		
		if(member.kickable){
			member.kick();
			message.channel.send(`You kicked: ${member}`);
			member.send("You were kicked.")

		} else{
			message.channel.send(`You can't kick them because they are higher than you. `);
		}
		
	},
};