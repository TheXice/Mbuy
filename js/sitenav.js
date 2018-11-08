$(function () {
  getsitenav();

  function getsitenav() {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getsitenav',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.sit-main').html(template('tmp',info))
      }
    })
  }
})