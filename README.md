# Anotações da lição...

A propriedade `.textContent` retorna todo o texto definido no HTML, não levando em consideração o CSS.

A propriedade `.innerText` retorna apenas o texto visível, levando em consideração todo o CSS. Ou seja, se algum CSS formata o texto todo em maíuscula, desta mesma forma será retornado pela propriedade.

## Monitorando Eventos

A função `monitorEvents` vai mostrar todos os eventos que estão acontecendo no elemento em questão até o fim dos tempos (ou até você atualizar a página). Como alternativa, o navegador Chrome oferece uma função `unmonitorEvents()`, que desativa o anúncio dos eventos ligados ao elemento em questão:

```javascript
// começa a exibir todos os eventos no objeto document 
monitorEvents(document); 

// desativa a exibição de todos os os eventos no objeto document.
unmonitorEvents(document);
```

# removeEventListener

`.removeEventListener()` exige que você passe a mesma função de ouvinte que passou a `.addEventListener().`

# Fases do evento

Há três etapas distintas durante o ciclo de vida de um evento. São elas:

* a etapa de **captura**
* a etapa do **alvo**
* e a etapa de **propagação**

# Reflow e Repaint

Quando adicionamos um novo elemento, o navegador precisa fazer um cálculo de reflow para determinar o novo layout da tela e, depois, repaint (redesenhar) a tela. E isso leva tempo.

A principal diferença é que, como o fragmento de documento(DocumentFragment) não é parte da estrutura ativa da árvore de documentos, mudanças feitas no fragmento não afetam o documento, causam refluxo nem geram impacto no desempenho que pode ocorrer quando há mudanças.

Refluxo é o processo de calcular as dimensões e a posição dos elementos da página. Essa é uma tarefa computacionalmente intensiva (lenta). Redesenho é o processo de desenhar ou esboçar os pixels na tela. É mais rápido que o refluxo, mas não chega a ser um processo rápido. Queremos garantir que seu código gere o menor número possível de refluxos.