$(function(){
  var index = 1;
  var cate = searchUrl();
  console.log(cate);
  var id = cate.categoryid;
  $("#res").text(cate.category || '电视' +">");
  getProductlist(id);
  function getProductlist(id,page){
   $.ajax({
     type:"get",
     url:"http://127.0.0.1:9090/api/getproductlist",
     data:{
      pageid:page || 1,
      categoryid:id || 0
     },
     dataType:'json',
     success:function(info){
       info.name = cate.category;
     console.log(info);
     var str = template('list',info);
     $('#list-ul').html(str);
     setPage(info,page);

     }

   })
  }


  // console.log( searchUrl());
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
    $("#sele option").eq(id-1).prop('selected', true)
  }

  function getPage() {
    $('#sele').on('change', function () {
      var ind = $(this).val();
      index = ind;
      console.log(index)
      console.log(id);
      
      getProductlist(id,index);
      // return index;
    })
  }

  function upDown() {

    $('#prv').on("click", function () {
      // console.log(index)
      if (index <= 1) {
        return;
      } else {
        index--;
        getProductlist(id,index);
      }

      console.log(index);

    })
    $('#next').on('click', function () {

      if (index >= $('#sele option').length ) {
        return;
      } else {
        index++;
        getProductlist(id,index);
      }

      // console.log(index);
    })

  }
var hre = 
 $('#bj').attr('href','')
})