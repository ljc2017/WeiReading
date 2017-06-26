$(function(){
	$.ajax({
		type:"get",
		url:"http://ubook.3g.qq.com/8/search?key=&pageNo=1&k1=%404537LgHkB&u1=o0273666479&k2=&u2=&ug=&b_f=505001&g_f=21585&tt=7566",
		async:true,
		dataType:"json",
		success:function(data){
			console.log(data)
			var arr=data.booklist;
		 	var str='';
		 	for(var i=0;i<arr.length;i++){
		 	   	str+="<li><a href='book_details.html'><img src='img/img"+(i+1)+".jpg'/><span>"+arr[i].title+"</span></a></li>"
		 	}
		 	var html=$(".book_list").html();
		 	html=str+html;
		 	$(".book_list").html(html);
		 	 flag=false;
		}
	});
})