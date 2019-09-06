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

* a etapa de **captura/capturing**
* a etapa do **alvo/target**
* e a etapa de **propagação/bubbling**

Ao clicar em um elemento na página, o processo de **captura/capturing** se inicia desde a tag `HTML` e vai descendo até chegar no elemento que recebeu o evento(click, keypress e assim por diante). Nesse momento, ele muda para a fase **alvo/target** que identifica o elemento clicado. Após essa etapa, inicia-se a etapa de **propagação/bubbling** que começa a subir toda a árvore da DOM e consecutivamente disparar os eventos.

Se por alguma razão desejar que o evento seja disparado na fase de captura, deverá passar um terceiro parâmetro para o `.addEventListener`.

Exemplo:

Quando informamos ao método `addEventListener` o terceiro parâmetro(`useCapture`) como **true**, o evento será disparado na fase de captura(descendo) e não de propagação. O valor default é **false**.

`.addEventListener(event, function, [true/false])`

# Reflow e Repaint

Quando adicionamos um novo elemento, o navegador precisa fazer um cálculo de reflow para determinar o novo layout da tela e, depois, repaint (redesenhar) a tela. E isso leva tempo.

A principal diferença é que, como o fragmento de documento(DocumentFragment) não é parte da estrutura ativa da árvore de documentos, mudanças feitas no fragmento não afetam o documento, causam refluxo nem geram impacto no desempenho que pode ocorrer quando há mudanças.

Refluxo é o processo de calcular as dimensões e a posição dos elementos da página. Essa é uma tarefa computacionalmente intensiva (lenta). Redesenho é o processo de desenhar ou esboçar os pixels na tela. É mais rápido que o refluxo, mas não chega a ser um processo rápido. Queremos garantir que seu código gere o menor número possível de refluxos.

# Event Loop

* Call Stack - LIFO(Last In First Out);
* Browser(Web APIs - setTimout e addEventListener são alguns exemplos);
* Event Queue;

Quando alguma função de Web API é necessária, ela fica disponível no Browser e quando se faz necessária(setTimeout ou EventListener) é movida para a fila e quando a Call Stack está vazia, ela é executada.