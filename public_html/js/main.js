
function menu() {
    let menu = document.getElementById('navbar');
    if (menu.getAttribute('style')) {
        menu.removeAttribute('style');
    } else {
        menu.style.display = 'initial';

    }
}
addEventListener('click', menu);
