const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const mongo = require('./mongo.js');
const mongoose = require('mongoose');
const classSchema = require('./schemas/class-schema.js');

const connectToMongoDB = async () => {
	await mongo().then(mongoose => {
		try {
			console.log("connected to mongodb");
		} finally {
		}
	})
}



const client = new Discord.Client();
client.commands = new Discord.Collection();

//looking at files that end with .js for commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//looping through commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

console.log(client.commands);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch(error){
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});



client.login(token);
connectToMongoDB();

