const mongoose = require('mongoose');
const Servers = mongoose.model('Servers');

module.exports = {
    name: 'init',
    description: "Initialize new collection for server.",
    execute: async (message, args) => {
		message.channel.send(message.guild.id);
		try {
			await new Servers({
				server_id: message.guild.id
			}).save();
		} catch {
		}
    }
}
