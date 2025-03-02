# Base-Typescript

<br />
<p align="center">
<a href="https://discord.com/users/1226297864796246016" target="_blank">
  <img src="https://i.imgur.com/13PduII.png" alt="Base-Typescript">
</a>
</p>
<br />

> Uma base moderna para o desenvolvimento de bots para Discord utilizando TypeScript e MongoDB.

> Criada em colaboração com [Eldritch Tenebris](https://github.com/Eldritch-Tenebris) & [lipedevv](https://github.com/lipedevv)

<div align="center">
   <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
   <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
   <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)"/>
</div>

## 📦 Instalação Rápida
 
# Clone o repositório 🔧
```bash
git clone https://github.com/Eldritch-Tenebris/Base-Typescript.git
```

# Acesse o diretório do projeto 📁
```bash
cd Base-Typescript
```

# Instale as dependências 🏴󠁶󠁥󠁷󠁿
```bash
npm install
```

# Configure as variáveis de ambiente
```bash
cp .env.example .env
```

# Inicie o ambiente de desenvolvimento
```bash
npm run dev
```

## 📚 Documentação

Acesse nossa **Wiki** para informações detalhadas sobre:

- 🚀 **Primeiros Passos**
- ⚙️ **Configuração**
- 📂 **Estrutura do Projeto**
- 💻 **Guias de Desenvolvimento**
- 🔧 **Referência da API**

## 🌟 Recursos

✅ Sistema moderno de comandos com TypeScript  
✅ Gerenciamento avançado de eventos  
✅ Suporte a botões e menus interativos  
✅ Integração com MongoDB para persistência de dados  
✅ Parâmetros dinâmicos e flexíveis  
✅ Tratamento robusto de erros  
✅ Hot reload para desenvolvimento ágil  

## 📝 Exemplo de Comando

```ts
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
```

## 📄 Licença <img src="https://img.shields.io/github/license/Eldritch-Tenebris/Base-Typescript?style=for-the-badge&cacheSeconds=60"/>

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo **LICENSE** para mais detalhes. 
