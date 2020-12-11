var h1TextEl = document.getElementsByClassName('title');
var requiredElement = h1TextEl[0];

console.log('First <h1> -> Content :', requiredElement.textContent);

// SEPARATEUR
console.log(
  "------------------------Recupere l'HTML du first <li>  3 methodes----------------------"
);

// -------------------------------------------------------------GENARAL SELECTOR-------------------------------------
// MENU VARIABLE
var menuDivEl = document.getElementById('menu');

// UnordonedList VARIABLE
var ulistEl = menuDivEl.querySelector('ul');

//  LIST ITEM VARIABLE
var itemListEl = document.querySelectorAll('#menu > ul > li');

// -------------------------------------------------------------/GENARAL SELECTOR-------------------------------------

// ------------------------------------------------------LIST ITEM SLECTOR----------------------------------------------

// -------------------------------------------------------------!! ITEM 1
// FIRST LIST ITEM-- Method1 ID Selector
var firstListEl1 = document.getElementById('item1');
console.log('first <li> -> Method 1 Content', firstListEl1.innerHTML);

// FIRST LIST ITEM-- Method2 query selector firstElementChild
var firstListEl2 = ulistEl.firstElementChild;
console.log('first <li> -> Method 2 Content', firstListEl2.innerHTML);

// FIRST LIST ITEM-- Method3 querrySelectorAll i slector
var firstListEl3 = itemListEl[0];
console.log('first <li> -> Method 3 Content', firstListEl3.innerHTML);

// -------------------------------------------------------------!! /ITEM 1

// SEPARATEUR
console.log(
  "------------------------Recupere l'HTML du dernier <li>----------------------"
);

// -------------------------------------------------------------!! LAST ITEM

//LAST LIST ITEM--
var lastListEl = ulistEl.lastElementChild;
console.log('last <li> -> Content', lastListEl.innerHTML);

// -------------------------------------------------------------!! /LAST ITEM

// SEPARATEUR
console.log(
  "------------------------Recupere l'HTML du troisiem <li>----------------------"
);

// -------------------------------------------------------------!! THIRD ITEM

//LAST THIRD ITEM--
var thirdListEl = itemListEl[2];
console.log('Third <li> -> Content', thirdListEl.innerHTML);

// -------------------------------------------------------------!! /THIRD ITEM

// SEPARATEUR
console.log(
  "------------------------Recupere l'HTML du parent de  <ul>----------------------"
);

// -------------------------------------------------------------!! UL LIST PARENT

// Parent of UL --
console.log(ulistEl.parentElement.innerHTML);
// -------------------------------------------------------------!! /UL LIST PARENT

// SEPARATEUR
console.log(
  "------------------------Recupere l'HTML du parent du Quatriem <li>----------------------"
);

// -------------------------------------------------------------!! LIST NOMBRE ENFANT etc

//Nombre ENFANT
console.log('Nombre Total de <li> ' + ulistEl.childElementCount);
console.log('Forth <li> Content ' + lastListEl.innerHTML);
console.log(
  'HTML du Parent du Quatriem <li> ' + lastListEl.parentElement.innerHTML
);

// -------------------------------------------------------------!! /LIST NOMBRE ENFANT etc

// ------------------------------------------------------/LIST ITEM SELECTOR----------------------------------------------
var enterEventCount = 0;
var leaveEventCount = 0;

var ulistEl = menuDivEl.querySelector('ul');

for (let i = 0; i < ulistEl.childElementCount; i++) {
  ulistEl.children[i].addEventListener('mouseenter', (e) => {
    ulistEl.style.color = 'red';
    enterEventCount++;
    addListItem();
  });

  ulistEl.children[i].addEventListener('mouseleave', (e) => {
    ulistEl.style.color = 'black';
    leaveEventCount++;
    addListItem();
  });
}

//  On crée un noeud texte avec le texte passé en argument
var newTextNode = document.createTextNode('');

// On crée un nouvel élément li
var newListItem = document.createElement('li');

// ON POSITIONE LES CHILD
newListItem.appendChild(newTextNode);
ulistEl.appendChild(newListItem);

// ON EXECUTE la FUNCTION
function addListItem() {
  newListItem.textContent = enterEventCount;
}
