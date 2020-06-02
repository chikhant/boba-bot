const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzE3MTc1NDM2MTk0NDgwMjQ5.XtWpxQ.Qvrn8jAbDfIYzXiQjViIycUM8ZU');

client.on('message', message => {
	if (message.content === 'boba help') {
	message.channel.send('Try boba bobcut and boba special. Sry I am a basic bitch rn :ube:');
	if (message.content === 'boba bobcut'){
		message.channel.send('Ah yes... bobcut. How I wish I had eyes to see her infinite calibration. Although perhaps its better this way. I dont want to be double crossed and murdered either');
	}
	if (message.content === 'boba special'){
		message.channel.send('THEY CANT HAVE MY BRANDON I HAVE SPECIAL BRANDONS! LOOK! LOOK WITH YOUR SPECIAL BRANDONS!');
	}
}
});
