$(function(){
     var cou = searchUrl();
     var id = cou.coupond;
     var tit = cou.couponTitle
     $('#header').text(tit+"优惠券");
getCouProduct(id);
function getCouProduct(id){
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcouponproduct",
    data:{
      couponid:id || 0
    },
    dataType:"json",
    success:function(info){
    console.log(info);
    $(".cou-product ul").html(template('tmp',info));
    }
  })
}
})