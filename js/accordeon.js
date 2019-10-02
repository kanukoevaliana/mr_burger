$(document).ready(e =>{
    let element = $('.nav__label');
    let li = $('.nav__li');

    element.on('click', function() {
        $(this).parent().toggleClass('nav__li__active');
    });

    let menu = $('.acc-h1');

    menu.on('click', function()
    {
        $(this).parent().toggleClass('accordeon__active');
    })
});