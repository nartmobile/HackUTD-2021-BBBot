const { Mongoose } = require('mongoose');
const classSchema = require('../schemas/class-schema')

module.exports = {
    name: 'addClassName',
    description: "Initializes new collection for server with appropriate class name",
    execute(message, args) {
        message.channel.send('Enter class name!');
    }
}