window.onload=function(){
	showlist();
	showspan();
	}

function showhide(){
	var bh = document.getElementById('hd');
	var txt = document.getElementById('hd1');
	
	bh.onmouseover=function(){
		txt.style.display='block';
		}
	bh.onmouseout=function(){
		txt.style.display='none';
		}
	}
	
function showlist(){
	var btn2 = document.getElementById('btn');
	var i=0;
	var tt = document.getElementById('mulv').getElementsByTagName('li');
	var lc = document.getElementById('catage');
	
	btn2.onclick = function(){
		if(tt[tt.length-1].style.display=='none'){
			lc.style.height=1400+"px";
			btn2.value="△-关闭全部剧情";
			for(i=0; i<tt.length;i++){
				tt[i].style.display='block' ;
				}
			}
		else{
			lc.style.height=300+"px";
			btn2.value="▽-展开全部剧情";
			for(i=100; i<tt.length;i++){
				tt[i].style.display='none' ;
				}	
			}
			
		}
	}
	
 function showspan()
    {
        var topli = document.getElementById('mousettop').getElementsByTagName('ul')[0].getElementsByTagName('li');
        var div=document.getElementById('mid').getElementsByTagName('div');
        var str = new Array();
        topli[0].onmouseover=function()
        {
			topli[0].className="move";
			topli[1].className="";
			topli[2].className="";
            div[0].style.display='block';
            div[1].style.display='none';
            div[2].style.display='none';
        }
        topli[1].onmouseover=function()
        {
			topli[0].className="";
			topli[1].className="move";
			topli[2].className="";
            div[1].style.display='block';
            div[0].style.display='none';
            div[2].style.display='none';
        }
        topli[2].onmouseover=function()
        {
			topli[0].className="";
			topli[1].className="";
			topli[2].className="move";
            div[2].style.display='block';
            div[1].style.display='none';
            div[0].style.display='none';
        }
    }