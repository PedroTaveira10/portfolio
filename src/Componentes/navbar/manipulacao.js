const navBar = document.querySelectorAll(.nav)

navBar.forEach(nav => {
    nav.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      nav.classList.remove('nav');

});