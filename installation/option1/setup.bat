@echo off
setlocal enabledelayedexpansion

:: Definir URLs de download
set "git_installer=https://github.com/git-for-windows/git/releases/download/v2.48.1.windows.1/Git-2.48.1-64-bit.exe"
set "node_installer=https://nodejs.org/dist/v22.14.0/node-v22.14.0-x64.msi"

:: Função para baixar arquivos usando PowerShell
echo Baixando arquivos necessários...

:: Baixar e instalar Git se não estiver instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git não encontrado. Baixando...
    powershell -Command "(New-Object System.Net.WebClient).DownloadFile('%git_installer%', 'git_installer.exe')"
    if not exist git_installer.exe (
        echo Falha ao baixar o instalador do Git!
        exit /b
    )
    echo Instalando Git...
    start /wait git_installer.exe /VERYSILENT /NORESTART
    del git_installer.exe
    echo Git instalado com sucesso!
)

:: Baixar e instalar Node.js se não estiver instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js não encontrado. Baixando...
    powershell -Command "(New-Object System.Net.WebClient).DownloadFile('%node_installer%', 'node_installer.msi')"
    if not exist node_installer.msi (
        echo Falha ao baixar o instalador do Node.js!
        exit /b
    )
    echo Instalando Node.js...
    start /wait msiexec /i node_installer.msi /qn /norestart
    del node_installer.msi
    echo Node.js instalado com sucesso!
)

:: Verificar se npm está disponível
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo Erro: NPM não foi encontrado após instalar o Node.js!
    exit /b
)

:: Atualizar variáveis de ambiente
echo Atualizando variáveis de ambiente...
set "Path=%ProgramFiles%\Git\cmd;%ProgramFiles%\nodejs;%Path%"
setx Path "%Path%"

:: Clonar o repositório
git clone https://github.com/Eldritch-Tenebris/Base-Typescript.git
if %errorlevel% neq 0 (
    echo Erro ao clonar o repositório!
    exit /b
)

:: Entrar na pasta do projeto
cd Base-Typescript

:: Instalar dependências
npm install
if %errorlevel% neq 0 (
    echo Erro ao instalar dependências!
    exit /b
)

:: Mensagem de sucesso
echo.
echo ==============================
echo Instalação finalizada com sucesso!
echo ==============================
pause
