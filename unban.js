const { Guild } = require("discord.js");

module.exports = {
	name: 'unban',
	description: 'Tag a member and unban.',
    guildOnly: true,
	permissions: 'BAN_MEMBERS',
	execute(message, args) {
		const id = args[0];
        if(message.guild.members.unban(id)){
        message.channel.send("<" + "@" + id + ">"+ " got unbanned!")
        }
	},
};