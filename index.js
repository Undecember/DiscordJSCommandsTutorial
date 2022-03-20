const { token } = require('./token.json');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: parseInt("10111111111111111", 2) });

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token).then(async () => {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        const { commandName } = interaction;
        if (commandName === 'slowmode') return await SetSlowmode(interaction);
    });
});

async function SetSlowmode(interaction) {
    const seconds = interaction.options.getInteger('seconds');
    await interaction.channel.setRateLimitPerUser(seconds);
    await interaction.reply('한우 탈모!!');
}
