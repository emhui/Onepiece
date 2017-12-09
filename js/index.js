// JavaScript Document
function menuFix() {
var sfEls = document.getElementById("nav01").getElementsByTagName("li");
for (var i=0; i<sfEls.length; i++) {
sfEls[i].onmouseover=function() {
this.className+=(this.className.length>0? " ": "") + "sfhover";
}
sfEls[i].onMouseDown=function() {
this.className+=(this.className.length>0? " ": "") + "sfhover";
}
sfEls[i].onMouseUp=function() {
this.className+=(this.className.length>0? " ": "") + "sfhover";
}
sfEls[i].onmouseout=function() {
this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"), 
"");
}
}
}


/*var img,count=1;
var photos=['F1','F2','F3'];


function start(){
	img  = document.getElementById("flash");
	window.setTimeout('flash()',1000);
	}
function flash(){
	var next = new Image();
	
	next.onload = function (){
		img.src = next.src;
		
		img.width = next.width;
		img.height = next.height;
		
		if(++count == photos.length){count=0;}
		window.setTimeout('flash()',1000);
	}
	next.src = 'images/'+photos[count]+'.jpg';
}*/

/*window.onload=start;*/
window.onload=menuFix;

var curIndex=0;
//时间间隔 单位毫秒
var timeInterval=3000;
var arr=new Array();
arr[0]="images/F1.jpg";
arr[1]="images/F2.jpg";
arr[2]="images/F3.jpg";
arr[3]="images/F4.jpg";

setInterval(changeImg,timeInterval);
function changeImg()
{
var obj=document.getElementById("flash");
if (curIndex==arr.length-1)
{
curIndex=0;
}
else
{
curIndex+=1;
}
obj.src=arr[curIndex];
} 