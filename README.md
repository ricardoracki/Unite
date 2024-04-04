# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes;
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## Documentação da API (Swagger)

Para documentação da API, acesse o link enquanto a api estiver em execução: http://localhost:3333/docs

## Banco de dados

Nessa aplicação utilizei banco de dados relacional (SQL). Para ambiente de desenvolvimento segui com o SQLite pela facilidade do ambiente rodando com Prisma ORM.

## Scripts

- `db:studio` Visualizar dados armazenados no DB
- `db:migrate` Gerar migrations para para o DB
- `db:seed` Gerar dados para teste no banco de dados
- `build` Gerar pasta `dist` para rodar em produção
- `start` Inicia projeto em produção
- `dev` Rodar projeto em ambiente de desenvolvimento
