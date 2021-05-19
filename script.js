
function open_menu(){
    document.getElementById('overlay-menu').style.width= '100%' ;
}

function close_menu() {
    document.getElementById('overlay-menu').style.width= '0%' ;
}
function load(){
        setTimeout(showPage, 5000);
}

function showPage(){
    document.getElementById('load-img').style.display = 'none';
    document.getElementById('main-content').style.display = 'block' ;
}