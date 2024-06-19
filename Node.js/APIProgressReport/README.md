# Projeto de API
### Introdução
Esse projeto é a primeira API desenvolvida na trilha no progress report do módulo de nodejs
### Guia de Instalação
* Clone o repositório [here](https://github.com/BrenoPalma/Blockchain-Apprentice.git).
* cd Blockchain-Apprentice\Node.js\APIProgressReport
* `npm install` para instalar todas as dependencias
* `npm start` para iniciar a aplicação.
* # Environment vars
Esse projeto usa as seguintes variaveis de ambiente definidas no config.env:

| Name                          | Description                         | Default Value                                  |
| ------------------------------|-------------------------------------|------------------------------------------------|
|NODE_ENV          | Para definir o ambiente de produção ou desenvolvimento        |   development   |
|PORT              | Porta de uso da apicação                         |  3000
|DATABASE          | URL do banco de dados                            | |
|DATABASE_LOCAL    | definir porta do bd e nome do database           | mongodb://localhost:27017/<nomedb> |
|DATABASE_PASSWORD | senha do banco de dados | |
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET| /api/v1/cidades | Retorna todas as cidades |
| GET | /api/v1/cidades/estado/:estado | Retorna as cidades de um determinado estado |
| GET | /api/v1/cidades/nome/:nome | Retorna a cidade pelo nome |
| POST | /api/v1/cidades/ | Cria uma cidade |
| GET | /api/v1/clientes | Retorna todos os clientes |
| GET | /api/v1/clientes/:id| Retorna o cliente pelo id |
| GET | /api/v1/clientes/nome/:nome | Retorna o cliente pelo nome |
| PATCH | /api/v1/clientes/:id | Atualiza o nome do cliente |
| DELETE | /api/v1/clientes/:id| Deleta o cliente pelo id |
| POST | /api/v1/clientes/ | Cria um cliente |

### Tecnologias usadas
* [NodeJS](https://nodejs.org/)
* [ExpressJS](https://www.expresjs.org/)
* [MongoDB](https://www.mongodb.com/)
### Authors
* [Breno Palma](https://github.com/BrenoPalma)