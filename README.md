<br />
<p align="center">
<a href="https://discord.com/users/1226297864796246016" target="_blank">
  <img src="https://i.imgur.com/13PduII.png" alt="Base-Typescript">
</a>
</p>
<br />

<p align="center">
  <strong>Fiz esse projeto para ajudar quem está começando com bots de Discord em TypeScript! 🚀</strong>
</p>

<p align="center">
  <a href="https://discord.com/users/1226297864796246016">
    <img src="https://img.shields.io/badge/Entrar%20em%20nosso-Discord-blue" alt="Discord">
  </a>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>
</p>

---

# 🤖 Discord Bot Project

Este é um bot para o Discord, desenvolvido com **Node.js e TypeScript**. Ele suporta **comandos de barra (slash commands)** e se conecta a um banco de dados **MongoDB** para armazenar informações.

## 📁 Estrutura do Projeto

```
discord-bot
├── src
│   ├── commands          # Comandos do bot
│   │   ├── common        # Comandos comuns
│   │   └── admin         # Comandos administrativos
│   ├── events            # Eventos do bot
│   ├── models            # Modelos do MongoDB
│   ├── utils             # Funções auxiliares
│   ├── services          # Serviços do bot
│   ├── types             # Tipos e interfaces
│   ├── config.ts        # Configurações do bot
│   ├── client.ts        # Configuração do cliente do Discord
│   └── index.ts         # Ponto de entrada da aplicação
├── .env.example          # Exemplo de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Configuração do npm
├── tsconfig.json         # Configuração do TypeScript
├── README.md             # Documentação do projeto
└── nodemon.json          # Configurações do Nodemon
```

## ⚡ Funcionalidades

✅ **Comandos de Barra (Slash Commands)** - Interação intuitiva com o bot.
✅ **Banco de Dados MongoDB** - Armazena informações sobre usuários e guildas.
✅ **Comandos Essenciais**:
- `/ping` - Responde com "Pong!" 🏓
- `/help` - Lista todos os comandos disponíveis 📜
- `/info` - Exibe informações sobre o bot ℹ️
- Comandos administrativos como **banir** e **expulsar** usuários ⚠️

## 🚀 Como Executar o Projeto

1️⃣ Clone o repositório:
[![GitHub Repo](https://img.shields.io/badge/GitHub-View%20Repo-blue?style=for-the-badge&logo=github)](../../)
```sh
git clone https://github.com/{{ owner }}/{{ repository }}
cd discord-bot
```

2️⃣ Instale as dependências:
```sh
npm install
```

3️⃣ Configure as variáveis de ambiente:
- Renomeie `.env.example` para `.env` e preencha com suas informações.

4️⃣ Inicie o bot:
```sh
npm run start
```

## 🤝 Contribuição

Contribuições são bem-vindas! Se quiser ajudar, abra uma **issue** ou envie um **pull request**. 😃

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo LICENSE para mais detalhes.

---

<p align="center">💙 Feito com TypeScript para a comunidade do Discord! 💙</p>

