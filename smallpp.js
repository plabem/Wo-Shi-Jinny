module.exports = {
	name: 'ppsize',
	description: 'Information about the arguments provided.',
	execute(message, args) {
        const botchoice = Math.floor(Math.random()*2) + 1
		if(botchoice === 2){
			message.channel.send("pp is smaller than prachod's head " + `${message.author}`)
		}
		if(botchoice === 1){
			message.channel.send("pp is bigger than jinny " + `${message.author}`)
		}
	},
};