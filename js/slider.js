$(document).ready(function(){
    $('.arrow__right').click(function(e){
        var $active_block = $('.span.active');
        if($active_block.next('.span').length){
            $('.span.active').removeClass('active').css('margin-left', '-100%');
            $active_block.next('.span').addClass('active').width('100%');
        }
    });
    $('.arrow__left').click(function(e){
        var $active_block = $('.span.active');
        if($active_block.prev('.span').length){
            $('.span.active').removeClass('active').css('margin-left','10%');
            $active_block.prev('.span').addClass('active').width('100%');
        }
    });
});