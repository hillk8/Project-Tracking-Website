const navSlide = () => {
    const burger = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav-mobile');
    const navLinks = document.querySelector('.nav-sub-nav-links');
    
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
}
navSlide();