var condition = true;
var start = 0;
var end = 0;
function forwards() {
    anime({
        targets: '.header__burger',
        left: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false;
}
function backwards(){
    anime({
        targets: '.header__burger',
        left: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
}
$('.header__real-burger').click(function (event) {
    if (condition) { 
        forwards(); 
    } 
    else { 
        backwards(); 
    }
});