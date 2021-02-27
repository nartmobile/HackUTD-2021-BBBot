module.exports = {
    name: 'help',
    description: "helps people figure out what this bot can do.",
    execute(message, args) {
        message.channel.send('List of commands: \n\t!help - displays list of commands. \n\t!disAssig [time] - dislpays upcoming assignments and due dates \n\t!grades - DM\'s current user their grades');
    }
}