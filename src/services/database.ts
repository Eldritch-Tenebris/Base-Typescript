import mongoose from 'mongoose';
import { config } from '../config';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
};

const disconnectFromDatabase = async () => {
    try {
        await mongoose.disconnect();
        console.log('Desconectado do MongoDB com sucesso!');
    } catch (error) {
        console.error('Erro ao desconectar do MongoDB:', error);
    }
};

export { connectToDatabase, disconnectFromDatabase };