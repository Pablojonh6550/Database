const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'))

}