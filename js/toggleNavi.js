'use strict'

const naviButton = document.getElementById('navi-button');

naviButton.addEventListener('click', () => {
  document.body.classList.toggle('js-navi-open');
})