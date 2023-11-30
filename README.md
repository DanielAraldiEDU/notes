<h1 align="center">
  <br>Notes API<br/>
  JavaScript | Fastify | SQLite
</h1>

<p align="center">
  <a href="#bookmark-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :bookmark: Sobre o Projeto

O **Notes** é um sistema para você que deseja armazenar suas anotações em algum local. Com Notes você pode contar com a inserção, listagem, atualização e exclusão de suas anotações.

Essa API foi realizada durante o **trabalho da M3** da matéria de banco de dados, lecionada pelo professor [Mauricio Pasetto de Freitas](mailto:mauriciopasetto@univali.br).

## :rocket: Tecnologias Utilizadas

- [Fastify](https://fastify.dev/)
- [Nodemon](https://nodemon.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [TypeORM](https://typeorm.io/)

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador.
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - Por fim, é **preciso** ter um gerenciador de pacotes seja o **[Yarn](https://yarnpkg.com/)**, **[NPM](https://www.npmjs.com/)** ou semelhantes.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/DanielAraldiEDU/notes-api.git
```

2. Executando a Aplicação:

```sh
  # Instalando as dependências do projeto.
  $ npm install # ou yarn install
  # Inicie a API juntamente do banco de dados SQLite
  $ npm run dev # yarn dev
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<sup>Projeto desenvolvido por [Daniel Sansão Araldi](https://github.com/DanielAraldi) e [Arthur Moser](https://github.com/oArthurMoser).</sup>
