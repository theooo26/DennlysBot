const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'meteo') {
    	message.channel.send('```Météo actuelle de DennlysParc : 8°C / Couvert```');
    	message.channel.send('http://www.icone-png.com/png/11/10850.png');
  	}
});

client.on('message', message => {
    if (message.content === 're') {
    	message.reply('ReCoucou ! J espere que tu vas bien');
  	}
});

client.on('message', message => {
    if (message.content === 'ip') {
    	message.reply('L ip du serveur est : Fermé');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
