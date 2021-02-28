const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
	server_id: Number,
	className: String,
	profName: String, 
	profEmail: String,
})

module.exports = mongoose.model('Servers', classSchema)
