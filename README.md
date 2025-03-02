# Base-Typescript

> Base moderna para desenvolvimento de bots Discord usando TypeScript e MongoDB.
> Feita em colaboração de .. ..

<div align="center">
   <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
   <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
   <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>

## 📦 Instalação Rápida

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/

# Instale as dependências
npm install

# Configure o ambiente
cp .env.example .env

# Inicie em desenvolvimento
npm run dev

📚 Documentação
Consulte nossa Wiki para documentação detalhada sobre:

🚀 Primeiros Passos
⚙️ Configuração
📂 Estrutura do Projeto
💻 Guias de Desenvolvimento
🔧 Referência da API
🌟 Recursos
Sistema moderno de comandos com TypeScript
Gerenciamento avançado de eventos
Sistema de responders para botões/menus
Integração MongoDB para persistência
Sistema de parâmetros dinâmicos
Tratamento de erros robusto
Hot reload em desenvolvimento

📝 Exemplo de Comando

createCommand({
    name: "ping",
    description: "Mostra a latência do bot 🏓",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        await interaction.reply({ 
            content: "🏓 Pong!", 
            flags: ["Ephemeral"] 
        });
    }
});

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.