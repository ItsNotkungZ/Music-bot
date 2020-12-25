exports.run = async (client, message) => {
    await message.edit(':wave: Restarting. Bye!');
    client.shutdown(true);
};

exports.info = {
    name: 'restart',
    description: 'Restarts the bot',
    category: 'Infos',
    utilisation: '{prefix}restart'

};
