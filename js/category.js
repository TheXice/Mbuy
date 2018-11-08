$(function () {
  //第一层渲染
  getCategory();

  function getCategory() {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getcategorytitle",
      dataType: "json",
      success: function (info) {
        console.log(info);
        var str = template('tmp', info);
        $('#f_ul').html(str);
      }
    })
  }
  //第二层渲染
  $('#f_ul').on('click', '.fa', function () {
    // alert(1)
    var id = $(this).data("id");
    if ($(this).attr("name")) {
      $(this).attr("name", "")

      $(this).next().html("")

      return
    }
    $(this).attr("name", "1")
    // console.log(id);
    // console.log(1);
    var $this = $(this).next()
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getcategory",
      data: {
        titleid: id
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var html = template('s_tmp', info);
        $this.html(html)
      }
    })
  })
})