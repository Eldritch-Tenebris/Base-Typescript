import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('info')
    .setDescription('Mostra informações sobre o bot.');

export const execute = async (interaction) => {
    await interaction.reply({
        content: 'Bot de exemplo\nVersão: 1.0.0\nAutor: Seu Nome',
        ephemeral: true,
    });
};