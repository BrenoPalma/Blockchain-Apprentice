# JavaScript Anotações
Este documento não busca ser um guia abrangente do JavaScript, mas sim uma anotação de funcionalidades que considero diferentes e úteis em comparação com outras linguagens que eu já conhecia. Além disso, este repositório conta também com uma pasta de exercícios que demonstram o uso prático dessas funcionalidades e de muitas outras.

## Operadores
### Operador ternário:

`javascript a > c ? a : b`
Substitui um if e deixa o código mais enxuto   
### Operador || (ou) 
Retorna o primeiro valor truthy:  
Exemplos:   
        `false || 'texto'` resulta em 'texto'   
        `false || null || '' || 3 || 'texto` resulta em: 3   

## Objetos
**Notação de colchetes para objetos:**   
`objeto['atributo']` Permite iterar sobre os atributos do objeto sem saber o nome deles

```javascript
let objeto = { atributo: "valor" };
console.log(objeto['atributo']);
```

Objetos são copiados por referência, não são iteráveis com for ... of
**Clonar objetos**   
Pode usar `Object.assign({}, object)` ou `const obj = { ...object}`

## Valores Falsy e Truthy
Falsy: 
- undefined
- null
- 0
- false
- ''
- NaN


Truthy:   
Todo o resto

## Notações
**Camel notation:** oneTwoThreeFour   
**Pascal notation:** OneTwoThreeFour   

## Funções
Funções são objetos
### Factory Function:
* Camel notation
```javascript
function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
    };
}

const pessoa1 = criarPessoa('João', 25);
```

### Constructor Function: 
* Pascal notation
```javascript
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa2 = new Pessoa('Maria', 30);
pessoa2.saudacao(); // Olá, meu nome é Maria e eu tenho 30 anos.
```

* Funções podem receber argumentos mesmo sem parâmetros definidos

### Rest operator:
* Em um método, this referencia o objeto.
* Em uma função, this referencia o objeto global (window no navegador, global no Node.js).

## Template Literals
Você pode usar template literals para inserir variáveis: `${variavel}`
```javascript
let variavel = "mundo";
console.log(`Olá, ${variavel}`);
```

## Arrays
Arrays também são objetos e tem muitas funções úteis

### find

`array.find(function(element)`   
Com arrow function:  
`array.find(course => course.name === 'a')`   
### Spread Operator
`[...array]` exibe todos os elementos do array

Permite que uma função receba um número variável de argumentos.
```javascript
function printar(...args) {
    console.log(args);
}
printar(1, 2, 3, 4, 5, 6, 7);
```

### array.reduce

`let soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);`

### Function Declaration

```javascript
function exemple(){
   console.log('hello');
}
```

```javascript
let run = function(){
   console.log('hello');
}
```
Exemplo usando arrow function:

`let run = () => console.log('hello');`

## Outros
* Date
Em JavaScript, os meses começam com o número 0, ou seja Janeiro = 0 e Dezembro = 11
`let data = new Date(2023, 0, 1); // 1 de Janeiro de 2023`