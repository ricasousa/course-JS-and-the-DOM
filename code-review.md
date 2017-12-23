## Critérios de aceite do Merge Request/Code Review

Abaixo elencamos alguns pontos a serem observados durante análise de Merge Requests. Esses pontos visam garantir a qualidade do código e reduzir possíveis complexidades desnecessária, possibilitando assim melhor manutenibilidade.

**Os pontos a serem observados são:**

1. Os códigos submetidos para análise não deverão possuir `console.*` e nem classes CSS e funções vazias. Se um método tiver implementação futura, deixar um comentário com a explicação;
2. Resoluções que não estejam utilizando AngularJS deverão ser esclarecidas para melhor entendimento. Alguns exemplos: `setTimeout` e manipulação direta da DOM.
3. Arquivos **.scss** não deverão possuir mais `_` em seus nomes, mesmo que sejam partial files;
5. Nome de componentes elegíveis a serem genéricos, começar com `ci-`;
7. Sempre carregar os arquivos via LazyLoad a não ser que sejam arquivos de utilização global, como é o caso de alguns componentes;
8. ATENÇÃO aos arquivos alterados fora de contexto. Nesses casos pode haver quebra de funcionalidade;
9. Se houver novas bibliotecas de terceiros deverão ser cuidadosamente analisadas;
10. Não utilizar algumas das novas features do ECMAScript, como: `.find` e `Arrow Function (() => {})`.

## Alguns combinados...

Quando um Merge Request for submetido e o mesmo possuir mais de 5 arquivos, é interessante que haja **3 Likes** do time para que o aprovador faça o **merge**. Agora se for algo simples como alteração de CSS ou situações emergenciais como hotfix esse combinado não se faz necessário. Sugerimos esse ponto para incentivar a colaboração do time e consecutivamente o conhecimento compartilhado.