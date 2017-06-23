$(function(){
//radio 滑动升框 
	$(".footer_list").on("tap","li",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".radio").on("tap",function(){
		$(".litre_page").css("height","100%");
	})
	$(".del").on("tap",function(){
		$(".litre_page").css("height","0");
	})
//radio 每日更新
	var d=new Date;
	var month=d.getMonth()+1; //月
	var day=d.getDate(); //日
	var week=d.getDay() //星期
	var str=["日","一","二","三","四","五","六"]
	for(var i=0;i<=str.length;i++){
		if(week==i){
			week=str[i];
		}
	}
	var wk=week;
	$(".time").html(month+"月"+day+"日  "+"星期"+wk+" · 每日更新");
	$(".salltimeed").html(month+"月"+day+"日  ");
	
//公开阅读书籍数
	var len=$(".books_li").length;
	$(".booknum").html(len+"本公开阅读书籍");
	
//书架
	var selec='<span class="select"></span>';
	$(".books_li").append($(selec));
	var z=0;
	
//编辑键
	$(".redact").on("tap",function(){
		z++;
		if(z%2==0){
			$(".select").css("display","none");
			$(".jump").css("display","none");
			$(".books_li").find('.select').removeClass("selected");
		}
		else{
			$(".select").css("display","block");
			$(".books_li").find('.select').removeClass("selected");
			$(".jump").css("display","block");
		}
	})
	
//删除键
	$(".books_li").on("tap",function(){
		var index=$(this);
		if($(this).find('.select').hasClass("selected")){
			$(this).find('.select').removeClass("selected");
		}
		else{
			$(this).find('.select').addClass("selected");
			$(".jump").on("tap",function(){
				if($(".books_li").find('.select').hasClass("selected")){
					index.remove();
					$(".select").css("display","none");
					$(".jump").css("display","none");
					var len=$(".books_li").length;
					$(".booknum").html(len+"本公开阅读书籍");
				}
			})
		}
	})

//点击关注
	$(".gz").on("tap",function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).text(parseInt($(this).text())-1);
		}
		else{
			$(this).addClass("on");
			$(this).text(parseInt($(this).text())+1);
		}
		
	})

//start and zant
	$(".btn").on("tap",function(){
		if($(this).hasClass("click")){
			$(this).removeClass("click");
		}
		else{
			$(this).addClass("click");
		}
		
	})

//想法
	$(".thoughtheader span").on("tap",function(){
		var index=$(this).index();
		var ww=$(".thoughtlist li").width();
		$(this).addClass("on").siblings("span").removeClass("on");
		$(".thoughtlist").animate({marginLeft:-index*ww+"px"},300);
	})
	
//nav
	$(".footer_list li").on("tap",function(){
		var index=$(this).index();
		$(".nav").eq(index).css("display","block").siblings().css("display","none");
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
