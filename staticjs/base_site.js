function show_menu(elem) {
    elem.querySelector('ul.drop-down').style.display = 'block';
}
function hide_menu(elem) {
    elem.querySelector('ul.drop-down').style.display = 'none';
}

function scroll_to_top(speed){
    if (scroll_to_top.s_timeout_id === undefined){
        (function by_five(){
            if(window.scrollY > 1){
                window.scrollTo(0, window.scrollY * speed);
                scroll_to_top.s_timeout_id = setTimeout(by_five, 10);
            }
            else {
                window.scrollTo(0, 0);
                clearTimeout(scroll_to_top.s_timeout_id);
                scroll_to_top.s_timeout_id = undefined;
            }
        })();
    }
    return false;
}
