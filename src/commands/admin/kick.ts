import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { getUserFromDatabase } from '../../services/database';

export const data = new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Expulsa um usuário do servidor.')
    .addUserOption(option => 
        option.setName('usuário')
            .setDescription('O usuário a ser expulso')
            .setRequired(true));

export async function execute(interaction: CommandInteraction) {
    const user = interaction.options.getUser('usuário');

    if (!interaction.memberPermissions?.has('KICK_MEMBERS')) {
        return interaction.reply({ content: 'Você não tem permissão para expulsar membros.', ephemeral: true });
    }

    if (user) {
        const member = await interaction.guild?.members.fetch(user.id);
        if (member) {
            await member.kick('Expulsão solicitada por um administrador.');
            return interaction.reply({ content: `${user.username} foi expulso do servidor.`, ephemeral: false });
        } else {
            return interaction.reply({ content: 'Usuário não encontrado no servidor.', ephemeral: true });
        }
    }

    return interaction.reply({ content: 'Você deve mencionar um usuário para expulsar.', ephemeral: true });
}