// Efeito de rolagem para o cabeçalho
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () =>
{
    if (window.scrollY > 50)
    {
        navbar.classList.add('rolada');
    }
    else
    {
        navbar.classList.remove('rolada');
    }
});

// Funcionalidade de menu móvel
const navbarToggler = document.getElementById('navbarToggler');
const navbarNav = document.getElementById('navbarNav');

if (navbarToggler)
{
    navbarToggler.addEventListener('click', () =>
    {
        navbarNav.classList.toggle('show');
    });
}