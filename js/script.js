// HEADER MENU MOBILE
let menu = document.getElementById('menuMobile');
console.log(menu);
let menuOpen = false;

function openMenu() {
    if (menuOpen == false) {
        menu.style.display = 'block';
        menuOpen = true;
    }
    else {
        menu.style.display = 'none';
        menuOpen = false;
    }
}