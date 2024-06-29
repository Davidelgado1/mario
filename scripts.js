 /*  document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  
  menuToggle.addEventListener('click', function() {
     toggleMenu();
  });
  
  
  document.addEventListener('click', function(event) {
     
     if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
         hideMenu();
     }
  });
  
  function toggleMenu() {
     menu.classList.toggle('active');
     menuToggle.classList.toggle('active');
  }
  
  function hideMenu() {
     menu.classList.remove('active');
     menuToggle.classList.remove('active');
  }
  });
  
  function showForm() {
  const form = document.querySelector('.fale-conosco');
  const background = document.querySelector('.mascara-form');
  form.style.left = '50%';
  form.style.transform = 'translateX(-50%)';
  background.style.visibility = 'visible';
  }
  
  function hideForm() {
  const form = document.querySelector('.fale-conosco');
  const background = document.querySelector('.mascara-form');
  form.style.left = '-330px';
  form.style.transform = 'translateX(0)';
  background.style.visibility = 'hidden';
  } */