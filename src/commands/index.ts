import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { Command } from '../../types/command';

const commands: Command[] = [
    {
        data: new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Responde com Pong!'),
        async execute(interaction: CommandInteraction) {
            await interaction.reply('Pong!');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('help')
            .setDescription('Mostra a lista de comandos disponíveis.'),
        async execute(interaction: CommandInteraction) {
            await interaction.reply('Comandos disponíveis: /ping, /info');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('info')
            .setDescription('Mostra informações sobre o bot.'),
        async execute(interaction: CommandInteraction) {
            await interaction.reply('Bot versão 1.0.0, criado por [Seu Nome].');
        },
    },
];

export default commands;