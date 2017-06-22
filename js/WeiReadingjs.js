function  getTimeFormat(Num){
	var m=parseInt(Num%3600/60);
	if(m<10){            //最常用的方法 if判断
		m="0"+m;
	}
	var s=parseInt(Num%60);
	s<10 && (s="0"+s);   //短路0p0
	return m+":"+s;
}
var ado=document.getElementById("myaudio");
var pdt=document.getElementById("proceedtime");
var plt=document.getElementById("playtime");
var btn=document.getElementById("btn");
var left=document.getElementById("left");
var right=document.getElementById("right");
var pB=document.getElementById("prograssBar");
var pMid=document.getElementById("playerMid");
var sbtn=document.getElementById("schedule_btn");
setInterval(function(){
	pdt.innerHTML=getTimeFormat(ado.currentTime);
	plt.innerHTML=getTimeFormat(ado.duration);
//	rng.value=ov.currentTime/ov.duration;
},1000)				
				
btn.onclick=function(){
	if(ado.paused){
		ado.play();
	}
	else{
		ado.pause();
	}
}		
				
				


//				rng.onchange=function(){
//					 ov.currentTime=ov.duration*this.value;
//				}
//				//setTimeout(()=>alert(ov.duration),2000);
//				window.onunload=function(){
//					  localStorage.setItem("vpos",ov.currentTime);
//				}
//				if(localStorage.getItem("vpos")){
//					var p=localStorage.getItem("vpos")
//					 ov.currentTime=p;
//				}