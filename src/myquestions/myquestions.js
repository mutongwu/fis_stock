$(function(){
    $(document.body).on('click','.j_topNavBar .item', function(){
        var $el = $(this);
        if(!$el.hasClass('active')){
            var key = $el.attr('key');
            $el.addClass('active').siblings('.item').removeClass('active');
            $('.j_tabPage').addClass('none').filter('.'+key).removeClass('none');
        }
    });
});