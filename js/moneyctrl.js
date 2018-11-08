$(function () {
  //商品渲染
  var index = 0;
  getProduct();

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
        setPage(info, id)

      }
    })
  }

  getPage();
  upDown();

  function setPage(info, id) {
    var num = Math.ceil(info.totalCount / info.pagesize)
    // console.log(num);
    var arr = [];
    arr.length = num;
    // console.log(arr);
    var page = template('page', {
      arr: arr
    })
    $('#sele').html(page);
    $("#sele option").eq(id).prop('selected', true)
  }

  function getPage() {
    $('#sele').on('change', function () {
      var id = $(this).val();
      index = id * 1;
      console.log(index)
      getProduct(index);
      // return index;
    })
  }

  function upDown() {

    $('#prv').on("click", function () {
      console.log(index)
      if (index <= 0) {
        return;
      } else {
        index--;
        getProduct(index);
      }

      console.log(index);

    })
    $('#next').on('click', function () {

      if (index >= $('#sele option').length - 1) {
        return;
      } else {
        index++;
        getProduct(index);
      }

      console.log(index);
    })

  }


})