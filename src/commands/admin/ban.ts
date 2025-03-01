import { SlashCommandBuilder } from 'discord.js';
import { CommandInteraction } from 'discord.js';
import { UserModel } from '../../models/user';

export const banCommand = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bane um usuário do servidor.')
        .addUserOption(option => 
            option.setName('usuário')
                .setDescription('O usuário a ser banido')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('motivo')
                .setDescription('Motivo do banimento')
                .setRequired(false)),
    async execute(interaction: CommandInteraction) {
        const user = interaction.options.getUser('usuário');
        const reason = interaction.options.getString('motivo') || 'Sem motivo especificado';

        if (!interaction.memberPermissions?.has('BAN_MEMBERS')) {
            return interaction.reply({ content: 'Você não tem permissão para banir membros.', ephemeral: true });
        }

        if (user) {
            const member = await interaction.guild?.members.fetch(user.id);
            if (member) {
                await member.ban({ reason });
                await interaction.reply({ content: `${user.tag} foi banido com sucesso. Motivo: ${reason}` });
            } else {
                await interaction.reply({ content: 'Usuário não encontrado no servidor.', ephemeral: true });
            }
        } else {
            await interaction.reply({ content: 'Você precisa mencionar um usuário para banir.', ephemeral: true });
        }
    },
};