exports.run = async (client, message) => {
    await msg.edit(':wave: Restarting. Bye!');
    bot.shutdown(true);
};

exports.info = {
    name: 'restart',
    usage: 'restart',
    description: 'Restarts the bot',
    category: 'Infos',
    utilisation: '{prefix}restart'

};