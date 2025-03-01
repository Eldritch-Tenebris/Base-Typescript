import { Client } from 'discord.js';
import { interactionCreate } from './interactionCreate';
import { ready } from './ready';

export const registerEvents = (client: Client) => {
    client.on('ready', ready);
    client.on('interactionCreate', interactionCreate);
};