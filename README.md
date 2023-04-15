# Marvel API Client

Projeto destinado à avaliação da disciplina de Programação para Dispositivos Móveis, com o objetivo de desenvolver um aplicativo em React Native que consuma uma API RESTful, na qual foi selecionada a [Marvel API](https://developer.marvel.com/docs).


# Iniciando
## Obter credenciais de API
Para obter credenciais e consumir API da platforma da Marvel, é necessário [registrar uma conta](//developer.marvel.com/account).

## Dependências
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) ou [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm): Gerenciador de dependências;
- [Expo](https://docs.expo.dev/get-started/installation/): Plataforma open-source para criar aplicativos nativos universais para Android, iOS e Web com JavaScript e React.

## Configuração
- Clonar repositório:
```
git clone git@github.com:sirio-neto97/marvel-api-client.git
```
- Acessar diretório do projeto:
```
cd marvel-api-client
```
- Criar arquivo `env.js` com base em arquivo de exemplo, para configuração de credenciais do usuário API:
```
cp env_example.js env.js
```
- Instalar dependências do projeto:
```
yarn
```
- Iniciar o projeto:
```
expo start
```