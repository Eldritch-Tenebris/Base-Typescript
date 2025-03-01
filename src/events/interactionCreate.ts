import { Interaction } from 'discord.js';
import { client } from '../client';
import { Command } from '../types/command';

export const interactionCreate = async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    const command: Command = client.commands.get(interaction.commandName);

    if (!command) {
        await interaction.reply({ content: 'Comando não encontrado!', ephemeral: true });
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Houve um erro ao executar este comando!', ephemeral: true });
    }
};