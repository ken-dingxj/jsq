//移入移出特效
//正在制作中的对话框
function tishio()
{
	alert("预计10月21日上线,尽请期待！");	
}
function Onfocus(x)
{
      
   if(x.value==" 请填写数值")
   {
	 x.value="";
  	x.style.color="#000";

   }
    else if(x.value==0)
 {
	  x.style.color="#000";
 }
}
function Onblur(x)
{

 if(x.value=="")
 {
	
   x.value=" 请填写数值";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 } else if(isNaN(x.value))
 {

	 x.value=" 请填写数值";
	  x.style.color="#888888";
 }
 
}

//耐破强度计算结果
function naipojieguo()
{
	//8个参数
var naipo1= document.getElementById('naipo1');
var naipo2= document.getElementById('naipo2');
var naipo3= document.getElementById('naipo3');
var naipo4= document.getElementById('naipo4');
var naipo5= document.getElementById('naipo5');
var naipo6= document.getElementById('naipo6');
var naipo7= document.getElementById('naipo7');
var naipo8= document.getElementById('naipo8');

if(naipo1.value==" 请填写数值"||naipo1.value=="")
{
		naipo1.value=0;
}
if(naipo2.value==" 请填写数值"||naipo2.value=="")
{
		naipo2.value=0;
}
if(naipo3.value==" 请填写数值"||naipo3.value=="")
{
		naipo3.value=0;
}
if(naipo4.value==" 请填写数值"||naipo4.value=="")
{
		naipo4.value=0;
}
if(naipo5.value==" 请填写数值"||naipo5.value=="")
{
		naipo5.value=0;
}
if(naipo6.value==" 请填写数值"||naipo6.value=="")
{
		naipo6.value=0;
}
if(naipo7.value==" 请填写数值"||naipo7.value=="")
{
		naipo7.value=0;
}
if(naipo8.value==" 请填写数值"||naipo8.value=="")
{
		naipo8.value=0;
}

//4个结果
var naipojg1=document.getElementById('naipojg1');
var naipojg2=document.getElementById('naipojg2');
var naipojg3=document.getElementById('naipojg3');
var naipojg4=document.getElementById('naipojg4');

//个参数	
	var wlznp1= document.getElementById('wlznp1');
	var wlznp2= document.getElementById('wlznp2');
	var wlznp3= document.getElementById('wlznp3');
	var wlznp4= document.getElementById('wlznp4');
//结果1
naipojg1.value= Math.round(naipo1.value*naipo2.value*1000)/1000;
//结果2
naipojg2.value= Math.round(naipo3.value*naipo4.value*1000)/1000;
//结果3
naipojg3.value= Math.round(naipo5.value*naipo6.value*1000)/1000;
//结果4
naipojg4.value= Math.round(naipo7.value*naipo8.value*1000)/1000;

//如果有1个结果为空！
if(!naipojg1.value=="" && !naipojg2.value=="" && !naipojg3.value==""  &&  !naipojg4.value==""  ){
	//&&  !naipojg1.value=="NaN"  &&  !naipojg2.value == "NaN"  &&  !naipojg3.value  ==  "NaN"  &&  !naipojg4.value  ==  "NaN"
//赋值给下一个界面
wlznp1.value=naipojg1.value;
wlznp2.value=naipojg2.value;
wlznp3.value=naipojg3.value;
wlznp4.value=naipojg4.value;

//算出结果
//3个结果
	var wlzjg1= document.getElementById('wlzjg1');
	var wlzjg2= document.getElementById('wlzjg2');
	var wlzjg3= document.getElementById('wlzjg3');
	//4个结果
	var nums=parseInt(wlznp1.value)+parseInt(wlznp2.value)+parseInt(wlznp3.value)+parseInt(wlznp4.value);
	//1结果
	wlzjg1.value=Math.round(0.95*nums*1000)/1000;
	wlzjg2.value=Math.round(0.95*nums*1000/9.81/10000*1000)/1000;
	//2结果
	wlzjg3.value=Math.round(0.95*nums*1000/9.81/10000*2.2046*Math.pow(2.54,2)*1000)/1000;
	//3结果
	
	//继续传递下一个值
	if(!wlzjg1.value=="")
	{
		
		var ccqd1= document.getElementById('ccqd1').value;
		var ccqd1=wlzjg1.value;
		var ccjg1=document.getElementById('ccjg1');
		var ccjg2=document.getElementById('ccjg2');
		var ccjg3=document.getElementById('ccjg3');
		document.getElementById('ccqd1').value=wlzjg1.value;
		ccjg1.value=Math.round((ccqd1*0.0054+2.1635)*1000)/1000;
		ccjg2.value=Math.round((ccqd1*0.0054+2.1635)/9.81*100*1000)/1000;
		ccjg3.value=Math.round((ccqd1*0.0054+2.1635)/9.81*100*2.2046/2.54/12*1000)/1000;
	}
	}
}

function qingkongsuoyou()
{
		//8个参数
	var naipo1= document.getElementById('naipo1');
	var naipo2= document.getElementById('naipo2');
	var naipo3= document.getElementById('naipo3');
	var naipo4= document.getElementById('naipo4');
	var naipo5= document.getElementById('naipo5');
	var naipo6= document.getElementById('naipo6');
	var naipo7= document.getElementById('naipo7');
	var naipo8= document.getElementById('naipo8');
	var naipojg1=document.getElementById('naipojg1');
	var naipojg2=document.getElementById('naipojg2');
	var naipojg3=document.getElementById('naipojg3');
	var naipojg4=document.getElementById('naipojg4');
	var wlznp1= document.getElementById('wlznp1');
	var wlznp2= document.getElementById('wlznp2');
	var wlznp3= document.getElementById('wlznp3');
	var wlznp4= document.getElementById('wlznp4');
	var wlzjg1= document.getElementById('wlzjg1');
	var wlzjg2= document.getElementById('wlzjg2');
	var wlzjg3= document.getElementById('wlzjg3');
	var ccqd1= document.getElementById('ccqd1');
	var ccjg1=document.getElementById('ccjg1');
	var ccjg2=document.getElementById('ccjg2');
	var ccjg3=document.getElementById('ccjg3');

   naipo1.style.color="#888888";
   naipo1.value=" 请填写数值";
   naipo2.style.color="#888888";
   naipo2.value=" 请填写数值";
   naipo3.style.color="#888888";
   naipo3.value=" 请填写数值";
   naipo4.style.color="#888888";
   naipo4.value=" 请填写数值";
   naipo5.style.color="#888888";
   naipo5.value=" 请填写数值";
   naipo6.style.color="#888888";
   naipo6.value=" 请填写数值";
   naipo7.style.color="#888888";
   naipo7.value=" 请填写数值";
   naipo8.style.color="#888888";
   naipo8.value=" 请填写数值";
   
	 naipojg1.value="";
	 naipojg2.value="";
	 naipojg3.value="";
	 naipojg4.value="";
	 
	  wlznp1.style.color="#888888";
      wlznp1.value=" 请填写数值";
	  wlznp2.style.color="#888888";
      wlznp2.value=" 请填写数值";
	  wlznp3.style.color="#888888";
      wlznp3.value=" 请填写数值";
	  wlznp4.style.color="#888888";
      wlznp4.value=" 请填写数值";
   
	
	 
	 wlzjg1.value="";
	 wlzjg2.value="";
	 wlzjg3.value="";
	 
	 ccqd1.style.color="#888888";
	 ccqd1.value=" 请填写数值";
	 
	 ccjg1.value="";
	 ccjg2.value="";
	 ccjg3.value="";

}
//瓦楞纸耐破
function wlznojieguo()
{
	//个参数	
	var wlznp1= document.getElementById('wlznp1');
	var wlznp2= document.getElementById('wlznp2');
	var wlznp3= document.getElementById('wlznp3');
	var wlznp4= document.getElementById('wlznp4');
	
	if(wlznp1.value==" 请填写数值"||wlznp1.value=="")
	{
			wlznp1.value=0;
	}
	if(wlznp2.value==" 请填写数值"||wlznp2.value=="")
	{
			wlznp2.value=0;
	}
	if(wlznp3.value==" 请填写数值"||wlznp3.value=="")
	{
			wlznp3.value=0;
	}
	if(wlznp4.value==" 请填写数值"||wlznp4.value=="")
	{
			wlznp4.value=0;
	}
	
	//3个结果
	var wlzjg1= document.getElementById('wlzjg1');
	var wlzjg2= document.getElementById('wlzjg2');
	var wlzjg3= document.getElementById('wlzjg3');
	
	//4个结果
	var nums=parseInt(wlznp1.value)+parseInt(wlznp2.value)+parseInt(wlznp3.value)+parseInt(wlznp4.value);
	//1结果
	wlzjg1.value=Math.round(0.95*nums*1000)/1000;
	wlzjg2.value=Math.round(0.95*nums*1000/9.81/10000*1000)/1000;
	//2结果
	wlzjg3.value=Math.round(0.95*nums*1000/9.81/10000*2.2046*Math.pow(2.54,2)*1000)/1000;
	//3结果
//继续传递下一个值
	if(!wlzjg1.value=="")
	{
		
		var ccqd1= document.getElementById('ccqd1').value;
		var ccqd1=wlzjg1.value;
		var ccjg1=document.getElementById('ccjg1');
		var ccjg2=document.getElementById('ccjg2');
		var ccjg3=document.getElementById('ccjg3');
		document.getElementById('ccqd1').value=wlzjg1.value;
		ccjg1.value=Math.round((ccqd1*0.0054+2.1635)*1000)/1000;
		ccjg2.value=Math.round((ccqd1*0.0054+2.1635)/9.81*100*1000)/1000;
		ccjg3.value=Math.round((ccqd1*0.0054+2.1635)/9.81*100*2.2046/2.54/12*1000)/1000;
	}
	
	
}
//瓦楞纸戳穿强度
function wlzccqd()
{
		
	var ccqd1= document.getElementById('ccqd1').value;
	var ccjg1=document.getElementById('ccjg1');
	var ccjg2=document.getElementById('ccjg2');
	var ccjg3=document.getElementById('ccjg3');
	
	ccjg1.value=Math.round((ccqd1*0.0054+2.1635)*1000)/1000;
	ccjg2.value=Math.round((ccqd1*0.0054+2.1635)/9.81*100*1000)/1000;
	ccjg3.value=Math.round((ccqd1*0.0054+2.1635)/9.81*100*2.2046/2.54/12*1000)/1000;
	
}

//单位换算
function hsdanxuan()
{
	   //原数值
		var danweihs=document.getElementById('danweihs').value;
		//下拉
		var xiala=document.getElementById("xiala");
		//结果
		var ts1=document.getElementById("ts1");
		var ts2=document.getElementById("ts2");
		var ts3=document.getElementById("ts3");
		var ts4=document.getElementById("ts4");
		
		//获取所选址的值
		var xialzhi=xiala.options[xiala.selectedIndex].value;
		
		if(xialzhi==51)
		{
			ts1.innerHTML=Math.round(danweihs*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*98.1*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*14.233*1000)/1000;
			
		}else if(xialzhi==52)
		{
			ts1.innerHTML=Math.round(danweihs/98.1*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*1000)/1000;
			ts3.innerHTML=Math.round(danweihs/98.1*14.233*1000)/1000;
		}
		else if(xialzhi==53)
		{
			ts1.innerHTML=Math.round(danweihs/14.233*1000)/1000;
			ts2.innerHTML=Math.round(danweihs/14.233*98.1*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*1000)/1000;
		}
		else if(xialzhi==21)
		{
			ts1.innerHTML=Math.round(danweihs*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*1000*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*1000*2.2046*1000)/1000;
			ts4.innerHTML=Math.round(danweihs*1000*2.2046*16*1000)/1000;
		}
		else if(xialzhi==22)
		{
			ts1.innerHTML=Math.round(danweihs/1000*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*2.2046*1000)/1000;
			ts4.innerHTML=Math.round(danweihs*2.2046*16*1000)/1000;
		}
		else if(xialzhi==23)
		{
			ts1.innerHTML=Math.round(danweihs/2.2046/1000*1000)/1000;
			ts2.innerHTML=Math.round(danweihs/2.2046*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*1000)/1000;
			ts4.innerHTML=Math.round(danweihs*16*1000)/1000;
		}
		else if(xialzhi==24)
		{
			ts1.innerHTML=Math.round(danweihs/16/2.2046/1000*1000)/1000;
			ts2.innerHTML=Math.round(danweihs/16/2.2046*1000)/1000;
			ts3.innerHTML=Math.round(danweihs/16*1000)/1000;
			ts4.innerHTML=Math.round(danweihs*1000)/1000;
		}
		else if(xialzhi==11)
		{
			ts1.innerHTML=Math.round(danweihs*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*3*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*3*12*1000)/1000;
			ts4.innerHTML=Math.round(danweihs*3*12*2.54*1000)/1000;
			
		}
		else if(xialzhi==12)
		{
			ts1.innerHTML=Math.round(danweihs/3*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*12*1000)/1000;
			ts4.innerHTML=Math.round(danweihs*12*2.54*1000)/1000;
			
		}
		else if(xialzhi==13)
		{
			
			ts1.innerHTML=Math.round(danweihs/12/3*1000)/1000;
			ts2.innerHTML=Math.round(danweihs/12*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*1000)/1000;
			ts4.innerHTML=Math.round(danweihs*2.54*1000)/1000;
		}
		else if(xialzhi==14)
		{
			ts1.innerHTML=Math.round(danweihs/2.54/12/3*1000)/1000;
			ts2.innerHTML=Math.round(danweihs/2.54/12*1000)/1000;
			ts3.innerHTML=Math.round(danweihs/2.54*1000)/1000;
			ts4.innerHTML=Math.round(danweihs*1000)/1000;
			
		}
			else if(xialzhi==31)
		{
			ts1.innerHTML=Math.round(danweihs*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*2.2046*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*9.81*1000)/1000;

		}
			else if(xialzhi==32)
		{
			ts1.innerHTML=Math.round(danweihs/2.2046*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*1000)/1000;
			ts3.innerHTML=Math.round(danweihs/2.2046*9.81*1000)/1000;

			
		}
			else if(xialzhi==33)
		{
			ts1.innerHTML=Math.round(danweihs/9.81*1000)/1000;
			ts2.innerHTML=Math.round(danweihs/9.81*2.2046*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*1000)/1000;
		}
		else if(xialzhi==41)
		{
			ts1.innerHTML=Math.round(danweihs*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*981*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*5.6*1000)/1000;	
		}
			else if(xialzhi==42)
		{
			ts1.innerHTML=Math.round(danweihs/981*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*1000)/1000;
			ts3.innerHTML=Math.round(danweihs/981*5.6*1000)/1000;	
		}
		
	
		else if(xialzhi==43)
		{
			ts1.innerHTML=Math.round(danweihs/5.6*1000)/1000;
			ts2.innerHTML=Math.round(danweihs/5.6*981*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*1000)/1000;	
		}
		else if(xialzhi==61)
		{
			ts1.innerHTML=Math.round(danweihs*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*10.19*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*0.737*1000)/1000;	
			
		}
			else if(xialzhi==62)
		{
			ts1.innerHTML=Math.round(danweihs/10.19*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*1000)/1000;
			ts3.innerHTML=Math.round(danweihs/10.19*0.737*1000)/1000;	
			
		}
			else if(xialzhi==63)
		{
			ts1.innerHTML=Math.round(danweihs/0.737*1000)/1000;
			ts2.innerHTML=Math.round(danweihs/0.737*10.19*1000)/1000;
			ts3.innerHTML=Math.round(danweihs*1000)/1000;	
			
		}
			else if(xialzhi==71)
		{
			ts1.innerHTML=Math.round(danweihs*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*0.205*1000)/1000;
			
		}
			else if(xialzhi==72)
		{
			ts1.innerHTML=Math.round(danweihs/0.205*1000)/1000;
			ts2.innerHTML=Math.round(danweihs*1000)/1000;
			
		}
	
		
	
}
//单选改变内容
function huansuan()
{
	//获取选中的按钮
	var rdo = document.getElementsByName("rdo");
	//选中按钮的值
	var num;
	//循环查询出选中的按钮
	  for (var i = 0; i < rdo.length; i++) {
            if (rdo[i].checked) {
                num = rdo[i].value;
            }
        }
		
		//alert("您选中了"+num);
		
	//更具点击的按钮 来决定下拉框 以及 换算方法和方式
	var xiala=document.getElementById("xiala");
	var td1=document.getElementById("td1");
	var td2=document.getElementById("td2");
	var td3=document.getElementById("td3");
	var td4=document.getElementById("td4");
	if(num==1)
	{
			xiala.options.length=0;
			qingkong();
		    xiala.options.add(new Option("码",11));
			xiala.options.add(new Option("英尺",12));
			xiala.options.add(new Option("英寸",13));
			xiala.options.add(new Option("厘米",14));
			td1.innerHTML="码:";
			td2.innerHTML="英尺:";
			td3.innerHTML="英寸:";
			td4.innerHTML="厘米:";
	}
	else if(num==2)
	{
			xiala.options.length=0;
			qingkong();
		    xiala.options.add(new Option("吨",21));
			xiala.options.add(new Option("千克",22));
			xiala.options.add(new Option("磅",23));
			xiala.options.add(new Option("盎司",24));
			td1.innerHTML="吨:";
			td2.innerHTML="千克:";
			td3.innerHTML="磅:";
			td4.innerHTML="盎司:";
	}
	else if(num==3)
	{
			xiala.options.length=0;
			qingkong();
		    xiala.options.add(new Option("千克力",31));
			xiala.options.add(new Option("磅力",32));
			xiala.options.add(new Option("牛顿",33));
			td1.innerHTML="千克力:";
			td2.innerHTML="磅力:";
			td3.innerHTML="牛顿:";
	}
	else if(num==4)
	{
			qingkong();
			xiala.options.length=0;
		    xiala.options.add(new Option("kgf/CM",41));
			xiala.options.add(new Option("N/M",42));
			xiala.options.add(new Option("LBS/IN",43));
			td1.innerHTML="kgf/CM:";
			td2.innerHTML="N/M:";
			td3.innerHTML="LBS/IN:";
	}
	else if(num==5)
	{
			qingkong();
			xiala.options.length=0;
		    xiala.options.add(new Option("kgf/CM^2",51));
			xiala.options.add(new Option("Kpa",52));
			xiala.options.add(new Option("PSI",53));
			td1.innerHTML="kgf/CM^2:";
			td2.innerHTML="Kpa:";
			td3.innerHTML="PSI:";
	}
	else if(num==6)
	{
			qingkong();
			xiala.options.length=0;
		    xiala.options.add(new Option("J",61));
			xiala.options.add(new Option("kgf·CM",62));
			xiala.options.add(new Option("ft·lbt",63));
			td1.innerHTML="J:";
			td2.innerHTML="kgf·CM:";
			td3.innerHTML="ft·lbt:";
	}
	else if(num==7)
	{
			qingkong();
			xiala.options.length=0;
		    xiala.options.add(new Option("g/M^2",71));
			xiala.options.add(new Option("LBS/1000ft^2",72));
			td1.innerHTML="g/M^2:";
			td2.innerHTML="LBS/1000ft^2:";

	}
	
	
}
//清空数据
function qingkong()
{
		var td1=document.getElementById("td1");
	var td2=document.getElementById("td2");
	var td3=document.getElementById("td3");
	var td4=document.getElementById("td4");
	//结果
		var ts1=document.getElementById("ts1");
		var ts2=document.getElementById("ts2");
		var ts3=document.getElementById("ts3");
		var ts4=document.getElementById("ts4");
		
			td1.innerHTML="";
			td2.innerHTML="";
			td3.innerHTML="";
			td4.innerHTML="";
			
			
			ts1.innerHTML="";
			ts2.innerHTML="";
			ts3.innerHTML="";
			ts4.innerHTML="";
		
}