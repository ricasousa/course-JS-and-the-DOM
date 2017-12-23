# site-star-router

Atualmente nosso projeto conta com diversas formas de escrita e organização, não simplesmente pelo estilo individual de cada programador mas também por não existir um Style Guide. Depois de muito tempo, decidiu-se criar um Style Guide para organização dos arquivos e pastas, garantindo assim um alinhamento para todo o time.

## Principios

"A simplicidade é o último grau de sofisticação." - Leonardo Da Vinci

No mundo da Engenharia de Software existem vários principios e patterns que servem para nos orientar e até mesmo resolver alguns problemas, mas é sabido que existem cenários onde não se aplicam e se faz necessário uma análise. Em nossa Squad gostamos de trabalhar com nosso mindset voltado para os principios abaixo:

* SRP: Single Responsability Principle;
* KISS: Keep It Simple Stupid;
* YAGNI: You Don't Gonna Need It;
* DRY: Don't Repeat Your self;

Aplique o principio "Responsabilidade Única" sempre que possível nos components, services e outros arquivos necessários. Isso ajudará no código mais limpo, fácil de ler a dar manutenção.

## Inglês ou Português?

Sempre bate aquela dúvida: "Vamos nomear/escrever pasta, funções e variáveis em inglês ou português?" 

Adotamos a seguinte definição. Funcionalidades que são referentes ao negócio, por exemplo **Receba Mais** devem conter todos seus arquivos/pastas em português. Agora se um componente tem potencial para ser utilizado globalmente ou simplesmente não faz parte do negócio, como por exemplo um componente de **titulo", deverá conter sua pasta/arquivos em Inglês, ex: `title` e `section`;

Para nome de `bindings`, funções e variáveis adotar a escrita em inglês.

## GIT

Utilizamos o Jira como ferramenta para nos auxiliar na gestão ágil do projeto. Todas as atividades/histórias, possuem um ID contendo 3 letras separadas por um traço e um código, ex: **SIT-999**.

**Commits**

Como boa prática e para facilitar em buscas futuras, escrevemos as mensagens de commit começando com o código da task, seguido da mensagem. Exemplo:

```bash
$ git commit -m "SIT-999: Realizado alteração X para comportamento Y"
```

## Convenções

Nosso projeto adota algumas convenções para nomear arquivos. São eles:

Componentes: `*.component.js|html|scss`
Módulos: `*.module.js`
Services: `*.service.js`
Diretivas: `*.directive.js`
Filtros: `*.filter.js`

Atualmente temos disponível em nossa aplicação um `module-cli` que nos auxilia na criação de novos módulos e componentes. O CLI já adota a convenção acima para criação dos arquivos.

**Criando um novo módulo**

```bash
$ npm run create-module
```

**Criando um novo compnente**

```bash
$ npm run create-component
```

Para nomear arquivos e pastas utilizamos o estilo **kebab-case**, que separa as palavras compostas por um traço(-).

## Organização de Pastas

Quando um módulo é criado e o mesmo possuí uma rota direta, é necessário que o nome da pasta esteja respeitando o estilo **camelCase**. De novo, nosso `module-cli` já faz esse trabalho. :)

De qualquer maneira, seguimos um padrão de organização de pastas como mostrado abaixo:

* /meuModulo
  * /assets
  * /components
  * /services
  * /models(?)
  * /directive(?)
  * /filters(?)
  * /modules(?)
  * meu-modulo.module.js
  * meu-modulo.component.js
  * meu-modulo.component.html
  * meu-modulo.component.scss(?)

A estrutura de pasta acima, ela é recursiva, ou seja, se **meuModulo** possuir submódulos, haverá uma pasta chamada **modules** e dentro dela toda a estrutura acima se repetirá, com a diferença que se o submódulo não for roteado, respeita-se o estilo **kebab-case** para nomear sua pasta.
