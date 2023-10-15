# Storify

O projeto "Storify" é uma plataforma de publicação de conteúdo que se inspira na popularidade e funcionalidade do Medium.

## Requisitos

-   [Node](https://nodejs.org/) (18.13.0) ou superior.
-   [Yarn](https://yarnpkg.com/) (1.22.19) ou superior.
-   [Docker](https://www.docker.com/) (24.0.4) ou superior.

## Rodando o sistema

Primeiro precisamos criar o banco de dados com o docker, então execute dentro do diretório do projeto:

```bash
docker build -t storify .
```

```bash
docker run -d -p 5432:5432 storify
```

Agora vamos rodar as migrations e em seguida popular o banco:

```bash
yarn migrate
```

```bash
yarn seed
```

Por fim só falta iniciar o projeto Nextjs:

```bash
yarn dev
```

Pronto tudo deve estar funcionando em [http://localhost:3000](http://localhost:3000) 😎
