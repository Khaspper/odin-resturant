import frieren from '../frieren.jpg';

export default function() {
  const content = document.getElementById('content');
  const headerWrapper = document.createElement('div');
  const headerText = document.createElement('h1');
  const image = document.createElement('img');

  content.innerHTML = '';
  
  image.src = frieren;
  headerWrapper.classList.add('header-wrapper');
  headerText.classList.add('header-text');
  headerText.textContent = 'Home';
  
  headerWrapper.appendChild(headerText);
  content.appendChild(headerWrapper);
  content.append(image);
};