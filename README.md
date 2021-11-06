# Desafio SHARENERGY 2021/22

Este repositório se destina a entrega do desafio referente ao processo seletivo da SHARENERGY 2021/22

A aplicação deste desafio consiste em:
  - Exibição de dados de um dia em uma usina em um gráfio de linha:
  - O gráfico é plotado em uma váriável de interesse em função do tempo
  - A várivel pode ser alterada por opção do usuáio com input radio

  - Exibição de estimativas de retorno financeiro dos clientes associados a usina:
  - Um gráfico de pizza onde se  tem a porcentagem de partipação de cada cliente
  - Energia gerada, retorno financeiro total e a parcela de cada cliente

  - CRUD para cliente, com recurso básicos de criar, ler, e editar e apagar
  - É nessário que o usúario esteja autenticado, para tanto uma conta para teste é fonercida:
  - email: desafio@sharenergy.com
  - senha: 123456

Esta Aplicação adicionalmente recurso de:
  - Paginação de clientes
  - Filtragem de clientes por nome
  - Responsividade para dispositivos móveis e tablets

## Layout
![Layout 1](https://github.com/pedroaleph/desafio-sharenergy-2021-22/blob/Pedro_Aleph_Gomes_de_Souza_Vasconcelos/assets/Layout1.png)
![Layout 2](https://github.com/pedroaleph/desafio-sharenergy-2021-22/blob/Pedro_Aleph_Gomes_de_Souza_Vasconcelos/assets/Layout2.png)
![Layout 3](https://github.com/pedroaleph/desafio-sharenergy-2021-22/blob/Pedro_Aleph_Gomes_de_Souza_Vasconcelos/assets/Layout3.png)
![Layout 4](https://github.com/pedroaleph/desafio-sharenergy-2021-22/blob/Pedro_Aleph_Gomes_de_Souza_Vasconcelos/assets/Layout4.png)
![Layout 5](https://github.com/pedroaleph/desafio-sharenergy-2021-22/blob/Pedro_Aleph_Gomes_de_Souza_Vasconcelos/assets/Layout5.png) ![Layout 6](https://github.com/pedroaleph/desafio-sharenergy-2021-22/blob/Pedro_Aleph_Gomes_de_Souza_Vasconcelos/assets/Layout6.png)


## Aprensetação
![Video 1](https://youtu.be/dhbMzwRZKD8)


# Tecnologias utilizadas
## Banco de dados
- MongoDB
## Back end
- TypeScript
- Node.js
- Express
- Mongoose
- Mongoose-sequence
- Jsonwebtoken
- Bcrypt
- Cors
## Front end
- TypeScript
- ReactJS
- HTML
- React-router-dom
- Bootstrap
- Sass
- Recharts
- React-paginate
- Axios
- React-hook-form

# Como executar o projeto

## Utilizando Docker Compose
Pré-requisitos: [Docker Engine](https://docs.docker.com/get-docker) e [Docker Compose](https://docs.docker.com/compose/install)

```bash
# clonar repositório
git clone -b Pedro_Aleph_Gomes_de_Souza_Vasconcelos https://github.com/pedroaleph/desafio-sharenergy-2021-22.git

# Executar na pasta raiz do projeto no modo root
docker-compose up
```
Após a ativação dos containers, os subprojetos podem ser acessados localmente:

- Front End: http://localhost:3000
- Back End: http://localhost:5000

## Executando nanualmente
## Back end
Pré-requisitos: npm / yarn e [MongoDB](https://docs.mongodb.com/guides/server/install)

```bash
# clonar repositório
git clone -b Pedro_Aleph_Gomes_de_Souza_Vasconcelos https://github.com/pedroaleph/desafio-sharenergy-2021-22.git

# iniciar o banco de dados no modo root
systemctl start mongod

# entrar na pasta do projeto back end
cd backend

# executar o projeto
yarn start
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone -b Pedro_Aleph_Gomes_de_Souza_Vasconcelos https://github.com/pedroaleph/desafio-sharenergy-2021-22.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Pedro Aleph Gomes de Souza Vasconcelos
