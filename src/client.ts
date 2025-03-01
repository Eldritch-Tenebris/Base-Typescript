import { Client, GatewayIntentBits } from 'discord.js';
import { config } from './config';
import { connectToDatabase } from './services/database';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.login(config.DISCORD_TOKEN);

connectToDatabase();

export default client;