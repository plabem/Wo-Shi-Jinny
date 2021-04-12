const Discord = require("discord.js");

module.exports = {
	name: 'webserver',
	description: 'Info about webserver. ',
	execute(message, args) {
		message.channel.send('http://3.131.14.23/ AWS website.' );
	},
};