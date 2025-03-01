# Discord Bot Project

Este projeto é um bot para o Discord, desenvolvido em Node.js com TypeScript. O bot utiliza comandos de barra (slash commands) e se conecta a um banco de dados MongoDB para armazenar informações.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
discord-bot
├── src
│   ├── commands          # Comandos do bot
│   │   ├── common        # Comandos comuns
│   │   └── admin         # Comandos administrativos
│   ├── events            # Eventos do bot
│   ├── models            # Modelos do MongoDB
│   ├── utils             # Utilitários
│   ├── services          # Serviços do bot
│   ├── types             # Tipos e interfaces
│   ├── config.ts        # Configurações do bot
│   ├── client.ts        # Configuração do cliente do Discord
│   └── index.ts         # Ponto de entrada da aplicação
├── .env.example          # Exemplo de variáveis de ambiente
├── .gitignore            # Arquivos a serem ignorados pelo Git
├── package.json          # Configuração do npm
├── tsconfig.json         # Configuração do TypeScript
├── README.md             # Documentação do projeto
└── nodemon.json          # Configurações do Nodemon
```

## Funcionalidades

- **Comandos de Barra**: O bot suporta comandos de barra, permitindo uma interação mais intuitiva.
- **Banco de Dados MongoDB**: Armazena informações sobre usuários e guildas.
- **Comandos Básicos**:
  - `/ping`: Responde com "Pong!".
  - `/help`: Lista todos os comandos disponíveis.
  - `/info`: Fornece informações sobre o bot, como versão e autor.
  - Comandos administrativos para banir e expulsar usuários.

## Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd discord-bot
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Renomeie o arquivo `.env.example` para `.env` e preencha com suas informações.

4. Inicie o bot:
   ```
   npm run start
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.