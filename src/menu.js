export default function() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const headerWrapper = document.createElement('div');
  const headerText = document.createElement('h1');
  
  headerWrapper.classList.add('header-wrapper');
  headerText.classList.add('header-text');
  headerText.textContent = 'Menu';
  
  headerWrapper.appendChild(headerText);
  content.appendChild(headerWrapper);
};