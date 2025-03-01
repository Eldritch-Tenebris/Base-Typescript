import { Message } from 'discord.js';

const errorHandler = (error: Error, message: Message) => {
    console.error('An error occurred:', error);
    message.reply('Ocorreu um erro ao processar seu comando. Tente novamente mais tarde.');
};

export default errorHandler;