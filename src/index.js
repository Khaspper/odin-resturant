import './styles.css';
import home from './home.js';
import about from './about.js';
import menu from './menu.js';

const nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {
  if (event.target.classList.contains('about')) {
    about();
  }
  else if (event.target.classList.contains('home')) {
    home();
  }
  else if (event.target.classList.contains('menu')) {
    menu();
  }
});

home();