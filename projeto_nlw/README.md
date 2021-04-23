inicializar o projeto
```
sudo yarn init -y
```
adicionar express
```
sudo yarn add express
```
instalar as tipagens da biblioteca
```
sudo yarn add @types/express -D
```

sudo yarn add typescript -D

fazer a tradução 
sudo yarn add ts-node-dev -D

 "scripts": {
    "dev" : "ts-node-dev src/server.ts"
  }

codigo 1: missãoespacial


(Node.js e Banco de Dados: ORM, Query Builder, driver nativo)
Fonte(https://www.webdevdrops.com/nodejs-banco-de-dados-orm-query-builder-driver-nativo/)

configuração do typeorm
https://typeorm.io/#/


migration
(link de bom artigo)

rodar as migrations 
yarn typeorm migration:run

reverte migrations
yarn typeorm migration:revert

id universal
uuid

beekeeper studio 
ferramenta de visualização de banco de dados

https://time.is/

codigo 2: embuscadoproximonivel

yarn typeorm migration:create -n CreateUsers

codigo 3: astronautas