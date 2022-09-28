let container = document.querySelector('#container');
container.classList.add('container');

let header = document.querySelector('#header');
header.classList.add('header');

let headerLogo = document.querySelector('#header__logo');
let logoImg = document.createElement('img');
logoImg. src = '/img/logo.svg';
headerLogo.append(logoImg);

let headerNav = document.querySelector('#header__items');
headerNav.classList.add('navbar')
let firstLi = document.createElement('li');
firstLi.textContent = 'About'
let secondLi = document.createElement('li');
secondLi.textContent = 'Features';
let thirdLi = document.createElement('li');
thirdLi.textContent = 'How to Use';
let fourthLi = document.createElement('li');
fourthLi.textContent = 'Download';

headerNav.append(firstLi);
headerNav.append(secondLi);
headerNav.append(thirdLi);
headerNav.append(fourthLi);


let headerMain = document.querySelector('#header__main')
headerMain.classList.add('header__main')

let headerRight = document.querySelector('#right__side')
let rightH1 = document.createElement('h1');
rightH1.textContent = 'Momentum';
let rightP = document.createElement('p');
rightP.textContent = 'Launch your product — and savor the momentum.'
let rightButton = document.createElement('button');
rightButton.textContent = 'Get the App';

headerRight.append(rightH1);
headerRight.append(rightP);
headerRight.append(rightButton);

let headerLeft = document.querySelector('#left__side');
let headerImg = document.createElement('img');
headerImg.classList.add('header__img')
headerImg. src = '/img/IMAGE.svg';
headerLeft.append(headerImg);