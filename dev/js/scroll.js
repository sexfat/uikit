scroll(function (direction) {
    console.log(direction)
});

function scroll(fn) {
    var beforeScrollTop = document.body.scrollTop,
        fn = fn || function () {};
    window.addEventListener("scroll", function () {
        
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
            if (delta === 0) return false;
         fn(delta > 0 ? "down" : "up");
         beforeScrollTop = afterScrollTop;
    }, false);
}