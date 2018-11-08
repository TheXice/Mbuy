
    //获取地址栏参数
    function searchUrl(){
      var str = location.search;
      str = decodeURI(str);
      str = str.slice(1);
      var arr = str.split('&');
      var obj = {};
      arr.forEach(function(v,i){
        var key = v.split('=')[0];
        var value = v.split('=')[1];
        obj[key] = value;
      })
      return obj;
    }


