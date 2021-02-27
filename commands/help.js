module.exports = {
    name: 'help',
    description: "helps people figure out what this bot can do.",
    execute(message, args) {
        message.channel.send('List of commands: /n !help - displays list of commands. /n !disAssig [time] - dislpays upcoming assignments and due dates');
        message.channel.send("/n !grades - DM's current user their grades ");
    }
}