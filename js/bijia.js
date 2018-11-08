$(function(){
   var cate = searchUrl();
   console.log(cate);
  var id = cate.productId;
  var caid = cate.categoryid;
  getBijia(id);
  $('#res').text(cate.catename);
  $('#res').attr('href','productlist.html?categoryid='+caid+"&category="+cate.catename)
  //详情渲染
   function getBijia(id){
     $.ajax({
       type:"get",
       url:"http://127.0.0.1:9090/api/getproduct",
       data:{
         productid:id || 0
       },
       dataType:'json',
       success:function(info){
         console.log(info);
         var str = template('tmp-1',info);
         $('.bijia_product').html(str)
         var sttr = template('tmp-2',info);
         $('.bijia_list').html(sttr);
       }
     })
   }
getPl(caid);
   //评论
   function getPl(id){
     $.ajax({
       type:"get",
       url:"http://127.0.0.1:9090/api/getproductcom",
       data:{
        productid:id || 0
       },
       dataType:"json",
       success:function(info){
       console.log(info);
       var htm = template('tmp-3',info);
       $('#pl-ul').html(htm)
       }
     })
   }
   getProductlist(caid);
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
      console.log(info);
      var sr = template('tmp-4',info)
      $('.bijia_tab ul').html(sr);
      }
 
    })
   }
 
})