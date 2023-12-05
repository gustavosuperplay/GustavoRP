var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
     item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
        item.addEventListener('click', selectlink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-expandir')
var menu = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menu.classList.toggle('expandir')
})