# RabbitMQ
Criação de uma aplicação para testes de RabbitMQ

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/vhenckel/RabbitMQ?label=javascript&style=for-the-badge">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vhenckel/RabbitMQ?style=for-the-badge">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/vhenckel/RabbitMQ?style=for-the-badge">
</p>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#hammer-iniciando-mobile">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#thought_balloon-inspiração">Inspiração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :page_with_curl: Sobre
Este repositório contém duas aplicações utilizando o RabbitMQ.

O diretório "service1" contém uma aplicação para gravação de mensagens utilizando o protocolo AMQP. 

Já o diretório "service2" contém uma pequena aplicação para consumir os registros da fila especificada.

O objetivo principal desse projeto foi conhecer e aprender um pouco mais sobre o RabbitMQ e o protocolo AMQP de mensageria.

O projeto foi desenvolvido utilizando a versão gratuita da plataforma [CloudMQP](https://www.cloudamqp.com/)

## :hammer: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Express](https://expressjs.com/pt-br/)
- [AMQPlib](https://www.npmjs.com/package/amqplib)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://editorconfig.org/), [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/)

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.

## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ https://github.com/vhenckel/RabbitMQ.git

  # Entrar no diretório:
  $ cd RabbitMQ
  
```
## :warning: Configs
- Acesse o diretório 'service1', crie um arquivo '.env' e copie o conteúdo do arquivo '.env-example' ou simplesmente renomeie o '.env-example' para '.env'.
- Altere o valor do atributo 'RABBITMQ_URL' para a URL recebida do CloudMQP ou a URL da instância do RabbitMQ no seu computador.

## :gear: Iniciando servidor SENDER
```bash
  # Entrar no diretório do servidor:
  $ cd service1

  # Instalar as dependências:
  $ npm i

  # Iniciar a aplicação:
  $ npm start

  # Rodando a aplicação:
  $ http://localhost:5001
```

## :gear: Iniciando servidor CONSUMER
```bash
  # Entrar no diretório do servidor:
  $ cd service2

  # Instalar as dependências:
  $ npm i

  # Iniciar a aplicação:
  $ npm start

  # Rodando a aplicação:
  $ http://localhost:5003
```
## :outbox_tray: Enviando mensagem 
```bash
  # Endpoint: 
  http://localhost:5001/rabbit 

  # HTTP METHOD: 
  POST 

  # Payload JSON:
  {
    message: {
      ...Your_Object
    },
    channel: "Queue_Name"
  } 

  # O conteúdo do parâmetro "message" pode ser uma string ou objeto. 
  # Antes do envio, a classe de comunicação com o RabbitMQ vai tranformar o conteúdo em uma string.
  # O parâmetro "channel" é o nome da fila mesmo que você deseja criar. 
  # É com este mesmo nome que os outros serviços vão consultar a fila.
```

## :inbox_tray: Buscando mensagem 
```bash
  # Endpoint: 
  http://localhost:5003/rabbit/:QUEUE_NAME

  # HTTP METHOD: 
  GET

  # Payload JSON:
  [
    {
      ...Your_Object
    }
  ]

  # O parâmetro "QUEUE_NAME" é o nome da fila onde as mensagens foram armazenadas.
```
# :thought_balloon: Inspiração
Aplicação apenas para teste e estudo do protocolo AMQP e RabbitMQ.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com :heart:&nbsp; & :brain:&nbsp; por Vitor Henckel :alien: 

[Get in touch!](https://github.com/vhenckel)