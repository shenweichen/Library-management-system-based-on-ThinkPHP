$('#search_button').click(function(){
 var keyword = $('#word').val();
        if (keyword!="") {
            var sid=$('#field_select').get(0).selectedIndex;
            var query_field;
            switch(sid){/*判断搜索字段*/
                case 0:query_field="name";break;
                case 1:query_field="author";break;
                case 2:query_field="id";break;
            }
            $.ajax({/*ajax异步刷新*/
                type: "GET",
                url: "index.php?s=/Home/Index/search",
                data: {
                    keyword:keyword,
                    query_field:query_field
                },
                dataType: "json",
                success: function(data){/*将搜索结果返回*/
                  //  alert("callback"); 
                  $('#answer').empty();   
                    var title='<th>书名</th><th>作者名</th><th>出版社</th><th>出版时间</th>';
                    $('#answer').append(title);
                    for (var i = data.length - 1; i >= 0; i--) {
                      var id=data[i]['id'];
                      var name=data[i]['name'];
                      var author=data[i]['author'];
                      var publish=data[i]['publish'];
                      var pub_date=data[i]['pub_date'];
                        var str="";
                        str+='<tr>';
                        str+='<td><a href="index.php?s=/home/index/bookinfo/id/'+id+'">'+name+'</a></td>';/*将id作为参数拼接*/
                        str+='<td align="center">'+author+'</td>';
                        str+='<td align="center">'+publish+'</td>';
                        str+='<td align="center">'+pub_date+'</td>';
                        str+='<br/></tr>'
                        $('#answer').append(str);
                    }
                    }
                });
            }

        else{

            alert("请输入书籍名称！");
        }
});