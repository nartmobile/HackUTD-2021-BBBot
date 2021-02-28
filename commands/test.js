const mongoose = require('mongoose');
const Servers = mongoose.model('Servers');

module.exports = {
    name: 'test',
    description: "asdf.",
    execute: async (message, args) => {
		message.channel.send(message.guild.id);
		try {
			await new Servers({
				server_id: message.guild.id
			}).save();
	
			message.channel.send("pp poopoo");
		} catch {
		} finally {
			message.channel.send("pp poopoo1293");
		}
    }
}
