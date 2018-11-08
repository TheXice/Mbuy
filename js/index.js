$(function () {
  getMenu();
  getProduct();
  //导航渲染
  function getMenu() {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getindexmenu",
      dataType: "json",
      success: function (info) {
        // console.log(info);
        var str = template('menu_tmp',info)
        $(".mm_menu").html(str);
      },

    })
  }


  function getProduct(id) {
    $.ajax({
      type: 'get',
      url: "http://127.0.0.1:9090/api/getmoneyctrl",
      data: {
        pageid: id || 0
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var str = template('prd_tmp', info);
        $('#pd_ul').html(str);
       

      }
    })
  }
  //委托点击事件
  $('.mm_menu').on('click','li:nth-child(8) > a',function(){
    // alert(1)
    $(this).parent().nextAll().toggleClass('hide');
    console.log($(this).siblings());
    
  })





})