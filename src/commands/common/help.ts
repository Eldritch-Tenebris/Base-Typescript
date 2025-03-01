import { CommandInteraction } from 'discord.js';
import { Command } from '../../types/command';

const helpCommand: Command = {
    name: 'help',
    description: 'Mostra informações sobre como usar o bot e lista os comandos disponíveis.',
    async execute(interaction: CommandInteraction) {
        const commandsList = [
            '/ping - Responde com "Pong!"',
            '/info - Mostra informações sobre o bot',
            '/help - Mostra esta mensagem de ajuda',
            // Adicione mais comandos aqui conforme necessário
        ].join('\n');

        await interaction.reply(`Aqui estão os comandos disponíveis:\n${commandsList}`);
    },
};

export default helpCommand;