function showMenu(){
    let menu = document.querySelector('#menu-area')
    if (menu.style.width == '200px'){
        menu.style.width = '0px'
    } else {
        menu.style.width = '200px'
    }
}