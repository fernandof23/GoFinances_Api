# Go Finances

> Api da aplicação GoFinances, desenvolvida com TypeScript.
> Aplicação Consiste em controlar entrada e saida de gastos, organizando por categorias, e gerando um balanço geral.


<span>
Para rodar a aplicação, de 1 Fork nesse Repositório
</span>

</br>
<span>
Apos o Fork rode os comandos para Instalar os Repositórios:</span>

```js
yarn
```


Crie um Database com nome "gostack_desafio06" para receber os dados da aplicação, e outro com nome de "gostack_desafio06_tests" para que seja possivel rodar os Testes na aplicação.


> Apos criar os DataBase, vamos rodar as Migrations:

```js
yarn typeorm migration:run
```


Feito isso teremos as tabelas criadas no banco!

Para rodar a aplicação, e para rodar os testes segue os comandos:

```js
yarn dev:server // para iniciar o servidor

yarn test //para rodar os testes

```

<p>Rotas Disponiveis na aplicação e os dados que devem receber:</p>

```js
/*
'/transactions' // rota principal da aplicação

metodos:

GET:{
  '/transactions'
  Retorna Todos as Transações com o Balance final
}

Post:{
  '/transactions'
  {
  "title": "Salario",
  "value": 500,
  "type": "outcome",
  "category": "food"
  }
}

Delete:{
  /transactions/:id
  Recebe o ID da transação para Deletar a mesma!
}

È possivel enviar um Arquivo CSV com os dados, e fazer o upload, e anexar ao banco todos os dados na rota:

/transactions/import
Recebe um CVS com variavel file */

```

Exemplo de arquivo CSV:

```js
title, type, value, category
Loan, income,1500, Others
Website Hosting, outcome,50,Emprestimo
Ice cream, outcome,3, Food
Loan, income,1500, Others
Website Hosting, outcome,50, Others
Ice cream, outcome,3, Food
Loan, income,1500,Carro
Website Hosting, outcome,50, Others
Ice cream, outcome,3, Food
Loan, income,1500, Others
Website Hosting, outcome,50,Escola
Ice cream, outcome,3, Food

```

[CsvExemplo](https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv)



### Aplicação desenvolvida por [Fernando Santos](https://www.linkedin.com/in/fernando-santos-686632122/) durante o bootcamp da [RocketSeat](https://rocketseat.com.br/).
