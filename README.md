
# Storify

O projeto "Storify" é uma plataforma de publicação de conteúdo que se inspira na popularidade e funcionalidade do Medium.

## Requisitos

- [Node](https://nodejs.org/) (18.13.0) ou superior
- [Yarn](https://yarnpkg.com/) (1.22.19) ou superior
- [Docker](https://www.docker.com/) (24.0.4) ou superior

## Rodando o sistema

Primeiro precisamos criar o banco de dados com o docker, então execute dentro do diretorio do projeto rode:

``docker build -t storify .``

``docker run -d -p 3306:3306 storify``

Vamos agora rodar as migrations com:

``yarn migrate``

Por fim só falta iniciar o projeto Nextjs:

``yarn dev``

Pronto tudo deve estar funcionando em ``http://localhost:3000`` e o banco deve estar localizado em ``172.17.0.2:3306`` 😎

