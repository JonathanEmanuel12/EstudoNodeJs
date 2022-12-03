# Projeto Web com Node.js

Este projeto tem como objetivo aumentar o conhecimento em node.js desenvolvendo uma aplicação web que receba dados do front-end e os grave em um banco de dados.

## Ferramentas utilizadas
### Front-End
  - Bootstrap
  - js
  - css

### Back-End
  - Node.js
  - Express
  - Ejs
  - Body-Parser
 

## Descrição
A aplicação é composta por uma página inicial, que seria a apresentação de uma loja e uma página de contato, onde o cliente pode fazer algum pedido a empresa. A página de contato possui um formulário que depois de preenchido é enviado ao servidor, que utiliza node.js com algumas outras ferramentas, processado e salvo em um banco de dados MySQL. O cliente é direcionado a página inicial após esse processo.

Front-End desenvolvido por: Guilherme
Contato: guilherme.gh95@gmail.com

Back-End desenvolvido por: Jonathan Emanuel
Contato: jonathaanemanuel21@gmail.com

## Observações posteriores
Foi adicionado um arquivo docker-compose.yml para rodar o banco de dados.
Para rodar a aplicação deve-se seguir os seguintes passos após clonar o repositório:
  - npm ci
  - rodar docker compose up -d no terminal
  - rodar node app.js no terminal
  - abrir o endereço http://localhost:8080/ no navegador (Só há a página "home" e a "entre em contato")