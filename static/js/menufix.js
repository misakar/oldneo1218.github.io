function menufix(id) {
    var menuObj = document.getElementById(id);
    var menuHeight = menuObj.offsetTop;

    window.addEventListener('scroll', function() {
        changePos(id, menuHeight);
    })
}

function changePos(id, height) {
    var _menuObj = document.getElementById(id);
    var menuScrollTop = document.documentElement.scrollTop  ||
                    document.body.scrollTop;
    if(menuScrollTop < height) {
        _menuObj.style.position = 'relative';
    }
    else {
        _menuObj.style.top = '10px';
        _menuObj.style.position = 'fixed';
    }
}
