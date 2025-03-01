import { connect, connection } from 'mongoose';
import { config } from '../config';

const connectToDatabase = async () => {
    try {
        await connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
};

const db = connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
    console.log('Conexão com o banco de dados estabelecida.');
});

export { connectToDatabase, db };