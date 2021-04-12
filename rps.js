module.exports = {
	name: 'rps',
	description: 'rps',
	execute(message, args) {
        const botchoice = Math.floor(Math.random()*3) + 1
        let botjinny;
        if(botchoice === 1)
            botjinny = 'Rock'
        if(botchoice === 2)
            botjinny = 'Paper'
        if(botchoice === 3)
            botjinny = 'Scissors'
        if(!args[0]) return message.channel.send('include r or p or s') 
        if(args[0] === 'r' && botchoice === 1 ) return message.channel.send('We Tied,I choose ' + botjinny )
        if(args[0] === 'r' && botchoice === 2) return message.channel.send('I won noob lol L, I choose ' + botjinny)
        if(args[0] === 'r' && botchoice === 3 ) return message.channel.send('Bru u won, I choose '+ botjinny)
        if(args[0] === 's' && botchoice === 1) return message.channel.send('I won noob lol L, I choose '+ botjinny)
        if(args[0] === 's' && botchoice === 2) return message.channel.send('Bru u won, I choose '+ botjinny)
        if(args[0] === 's' && botchoice === 3 ) return message.channel.send('We Tied, I choose '+ botjinny)
        if(args[0] === 'p' && botchoice === 1) return message.channel.send('I won noob lol L, I choose '+ botjinny)
        if(args[0] === 'p' && botchoice === 2) return message.channel.send('We Tied, I choose '+ botjinny)
        if(args[0] === 'p' && botchoice === 3 ) return message.channel.send('Bru u won, I choose '+ botjinny)
	},
};