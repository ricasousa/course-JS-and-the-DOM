const h1 = document.querySelector('h1');
const span = document.createElement('span');
span.textContent = ', right now!';
span.style.cssText = `color: #cc0000; font-size: 3rem; font-weight: 700;`;

h1.appendChild(span);

// beforebegin– insere o texto HTML como irmão anterior
// afterbegin– insere o texto HTML como o primeiro filho
// beforeend– insere o texto HTML como o último filho
// afterend– insere o texto HTML como um próximo irmão

const insertBeforeBegin = `
<strong>
  Inserted Before Begin
</strong>
`;

const insertAfterBegin = `
<strong>
  Inserted After Begin
</strong>
`;

const insertBeforeEnd = `
<strong>
  Inserted Before End
</strong>
`;

const insertAfterEnd = `
<strong>
  Inserted After End
</strong>
`;

h1.insertAdjacentHTML('beforebegin', insertBeforeBegin);
h1.insertAdjacentHTML('afterbegin', insertAfterBegin);
h1.insertAdjacentHTML('beforeend', insertBeforeEnd);
h1.insertAdjacentHTML('afterend', insertAfterEnd);

const h4 = document.querySelector('h4');
const spanText = document.createElement('span');

//Styles
spanText.textContent = 'Sou uma span...';
spanText.style.color = '#cc0000';
spanText.style.fontSize = `2rem`;

//Attributes
spanText.setAttribute(`data-key`, `Atributo de Teste...`);

h4.insertAdjacentElement('beforebegin', spanText);

console.log(spanText.previousElementSibling);

//Remove first cards in Cards Heroes Container
const cardsContainer = document.querySelector('.hero__module');
const firstCard = cardsContainer.firstElementChild;
//console.log(cardsContainer.lastElementChild.textContent);
//console.log(cardsContainer.lastElementChild.innerText);
//console.log(cardsContainer.parentElement);

//cardsContainer.removeChild(firstCard);

//Remove button 'Start Learning'
const startLearning = document.querySelector('div.button--primary');

//startLearning.remove();
//startLearning.parentElement.removeChild(startLearning);

//console.log(startLearning.previousElementSibling); //return h4;
//console.log(startLearning.nextElementSibling); return null;
//console.log(startLearning.className, startLearning.classList);

startLearning.addEventListener('click', event => {
  console.log(`Will remove...`);

  const h4 = startLearning.previousElementSibling;
  startLearning.remove();
  h4.parentElement.removeChild(h4);

  event.preventDefault();
  event.stopPropagation();
  return;
});

/**
 * Target, Capture and Propagation Event
 */
const buttonClickMe = document.querySelector(`#click-me`);
const buttonReset = document.querySelector(`#reset-log`);
const h6 = document.querySelector(`.my-tests > h6`);
const divLog = document.querySelector(`.my-tests > div.tests-logs`);

document.addEventListener('click', function() {
  divLog.innerHTML += `The document was clicked<br />`;
});

document.body.addEventListener('click', function() {
  const message = `
    The document body was clicked! <br />
    Trigger on <strong>BUBBLING</strong> phase! <br />
  `;
  divLog.innerHTML += message;
});

document.body.addEventListener('click', function() {
  const message = `
    The document body was clicked! <br />
    Trigger on <strong>CAPTURING</strong> phase! <br />
  `;
  divLog.innerHTML += message;
}, true);

document.querySelector(`.my-tests`).addEventListener(`click`, event => {
  divLog.innerHTML += `Clicked element: ` + event.target.nodeName + `<br />`;
});

h6.addEventListener(
  `click`,
  event => {
    divLog.innerHTML += `h6 Clicked! <br />`;
    event.stopPropagation();
  },
  true
);

buttonClickMe.addEventListener(`click`, () => {
  divLog.innerHTML += `button Clicked <br />`;
});

buttonReset.addEventListener(`click`, evt => {
  divLog.innerHTML = ``;
  evt.stopPropagation();
});

/**
 * performance.now()
 * Document Fragment... Basically it`s "Virtual DOM"
 */
const startingTime = performance.now();
const fragment = document.createDocumentFragment(); // ← usa um DocumentFragment em vez de uma <div>

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;

  fragment.appendChild(newElement);
}
document.body.appendChild(fragment);
const endingTime = performance.now();
divLog.innerHTML =
  'Este código levou ' + (endingTime - startingTime) + ' milliseconds. <br />';
