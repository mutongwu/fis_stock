$(function(){
    var $page = $('.liveRoomPage');
    var data = [{
            dt: '2018-03-06 11:22',
            text: '开年以来，50万战队首席申玲芝老师提示的个股仅3只，但涨幅却很惊人！ 截至目前，“南京银行”涨幅15.12%！“方大特钢”涨幅23.45%！'
        },{
            dt: '2018-03-06 11:22',
            text: '开年以来，50万战队首席申玲芝老师提示的个股仅3只，但涨幅却很惊人！ 截至目前，“南京银行”涨幅15.12%！“方大特钢”涨幅23.45%！'
        },{
            dt: '2018-03-06 11:22',
            text: '开年以来，50万战队首席申玲芝老师提示的个股仅3只，但涨幅却很惊人！ 截至目前，“南京银行”涨幅15.12%！“方大特钢”涨幅23.45%！'
        }];
    $('.j_listBox').html(template('listTpl', data));

    $page.on('click','.j_askBtn', function(){
        $page.find('.j_popBox').show();
    }).on('click','.j_sendMsg', function(){
        $page.find('.j_popBox').hide();
    });
})