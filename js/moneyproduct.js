$(function(){
var pro = searchUrl()
var id = pro.productid;
getMp(id);


  function getMp(id){
    $.ajax({
       type:"get",
       url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
       data:{
        productid :id || 20
       },
       dataType:'json',
       success:function(info){
        console.log(info);
        var str = template('tmp',info);
        $('.mp_title').html(str);
        $('.mp_info').html(template('tmp-1',info))
        $('.md-cnt').html(template('tmp-2',info))
        $('.lf-pic').html(template('tmp-3',info))
        $('.drop').html(template('tmp-4',info))
        $('.mp_pl').html(template('tmp-5',info))
       }
    })
  }

})