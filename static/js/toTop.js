function deadcat(id) {
    var obj = document.getElementById(id);
    var _getHeight = obj.offsetTop;

    window.addEventListener('scroll', function() {
        changeHeight(id, _getHeight);
    })
}

function changeHeight(id, height) {
    var obj = document.getElementById(id);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop < height) {
        obj.style.height = '0px';
    }
    else {
        obj.style.height = '100%';
    }
}
