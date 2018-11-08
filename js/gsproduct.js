$(function () {
var shopid = 0;
var area = 0;
  getShop();
  getArea();
  getGoods(shopid, area);

  //获取店铺名
  function getShop(id,shopid) {
    $.ajax({
      type: 'get',
      url: "http://127.0.0.1:9090/api/getgsshop",
      dataType: 'json',
      success: function (info) {
        console.log(info);
        info.shopid = shopid
        if (id === "jd") {
          $('.select-none ul').html(template('tmp-1', info))
          $('.shop').eq(shopid).addClass('gou');
        }
      }


    })
  }

  //获取列表信息
  function getArea(id,area) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getgsshoparea',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        info.area = area;
        if (id === 'df') {
          $('.select-none ul').html(template('tmp-2', info))
        }
      }
    })
  }

  //获取商品
  function getGoods(shop, area) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getgsproduct',
      data: {
        shopid: shop || 0,
        areaid: area || 0
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.gs-list ul').html(template('tmp', info))
      }
    })
  }
  //商品点击
  $('#jd').on('click', function () {
    // alert(1);
    var id = $(this).data('id')
    // console.log(id);
    getShop(id,shopid)
    // $('.shop').eq(shopid).addClass('gou')
    $('.select-none').toggleClass('hide');
  })
  //地区点击
  $('#df').on('click', function () {
    // alert(2)
    var id = $(this).data('type')
    console.log(id);
    getArea(id)
    $('.select-none').toggleClass('hide');
  })
$('#all').on('click',function(){
  $('#s-l').html('');
  $('#s-l').html('<li><a href="javascript:;" class="gou all">全部价格</a></li>');
  $('.select-none').toggleClass('hide');
})
  //委托点击事件
  $('#s-l').on('click','.shop',function(){
    $(this).addClass('gou');
    $(this).parent().siblings().find('a').removeClass();
    $('#jd').text($(this).text());
    $('.select-none').addClass('select-none hide');
    shopid = $(this).data('id')
    getGoods(shopid,area);
    
  })
    //委托点击事件
  $('#s-l').on('click','.area',function(){
    $(this).addClass('gou');
    $(this).parent().siblings().find('a').removeClass();
    var str = $(this).text();
    str = str.substring(0,2);
    // console.log(str);
    
    $('#df').text(str);
    $('.select-none').addClass('select-none hide');
    area = $(this).data('type');
    getGoods(shopid,area);
  })
    //委托点击事件
    $('#s-l').on('click','.all',function(){
      $(this).addClass('gou');
      // $(this).parent().siblings().find('a').removeClass();
      $('#all').text($(this).text());
      $('.select-none').addClass('select-none hide');
    })
})