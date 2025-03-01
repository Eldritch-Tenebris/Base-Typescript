import { Client, GatewayIntentBits } from 'discord.js';
import { connectToDatabase } from './services/database';
import { registerEvents } from './events';
import { registerCommands } from './commands';
import { config } from './config';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageTyping,
    ],
});

(async () => {
    try {
        await connectToDatabase();
        registerCommands(client);
        registerEvents(client);

        client.login(config.DISCORD_TOKEN);
    } catch (error) {
        console.error('Error starting the bot:', error);
    }
})();