const menu = document.querySelector('.menu');
const navemenu = document.querySelector('.nave-menu');

menu.addEventListener('click',() =>{
    menu.classList.toggle('ativo');
    navemenu.classList.toggle('ativo');
}
)