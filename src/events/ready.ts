import { Client } from 'discord.js';

export default (client: Client) => {
    console.log(`Bot está online!`);
    console.log(`Nome do bot: ${client.user?.tag}`);
};