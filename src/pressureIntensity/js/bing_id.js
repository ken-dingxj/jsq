
//马基公式计算结果
function jieguo()
{
	//4个参数
var ect= document.getElementById('canshu1');
var lo= document.getElementById('canshu2');
var bo= document.getElementById('canshu3');
var t= document.getElementById('canshu4');
//如果为空
    if(canshu1.value==" 请填写数值")
	{
		canshu1.value=0;
	    canshu1.style.color="#888888";
	}
	
	if(canshu2.value==" 请填写数值")
	{
			alert("请填写长度！");
			return false;
	}
	if(canshu2.value<=0)
	{
			alert("长度不能小于或等于0");
			return false;
	}
	if(canshu3.value==" 请填写数值")
	{
		alert("请填写宽度！");
			return false;
	}
	if(canshu3.value<=0)
	{
			alert("宽度不能小于或等于0");
			return false;
	}
	if(canshu4.value==" 请填写数值")
	{
		alert("请填写厚度！");
			return false;
	}
	if(canshu4.value<=0)
	{
			alert("厚度不能小于或等于0");
			return false;
	}
	
//jiguo
var jieguo1=document.getElementById("jieguotd1");
var jieguo2=document.getElementById("jieguotd2");

 	//公式 0.05874*ect * t`0.5 * (lo*2+bo*2)`0.5
	var jieguo=Math.round(0.05874*ect.value*(Math.pow(t.value,0.5))*(Math.pow((2*bo.value+2*lo.value),0.5))*1000)/1000;
	jieguo1.value=jieguo;
	jieguo2.value=Math.round(((jieguo/9.81)*1000))/1000;
	//传递给下一个计算器
	var byect1=document.getElementById("byect1");
	byect1.value=jieguo1.value;
	//将 长宽 高 传递 给下一个页面
	var byect2=	document.getElementById("byect2");
	var byect3=	document.getElementById("byect3");
	var byect4=	document.getElementById("byect4");
	byect2.value=lo.value;
	byect3.value=bo.value;
	byect4.value=t.value;
	
}
//输如验证
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


function Onfocuskkk1(x)
{
      
   if(x.value=="1.550")
   {
	 x.value="";
  	x.style.color="#000";

   }
    else if(x.value==0)
 {
	  x.style.color="#000";
 }
}

function Onblurkkk1(x)
{

 if(x.value=="")
 {
	
   x.value="1.550";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 }
 else if(isNaN(x.value))
 {

	 x.value=1.550;
 }
 
}

function Onfocuskkk2(x)
{
      
   if(x.value=="1.450")
   {
	 x.value="";
  	x.style.color="#000";

   }
    else if(x.value==0)
 {
	  x.style.color="#000";
 }
}

function Onblurkkk2(x)
{

 if(x.value=="")
 {
	
   x.value="1.450";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 }
 else if(isNaN(x.value))
 {

	 x.value=1.450;
 }
 
}

function Onfocuskkk3(x)
{
      
   if(x.value=="1.350")
   {
	 x.value="";
  	x.style.color="#000";

   }
    else if(x.value==0)
 {
	  x.style.color="#000";
 }
}

function Onblurkkk3(x)
{

 if(x.value=="")
 {
	
   x.value="1.350";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 }
 else if(isNaN(x.value))
 {

	 x.value=1.350;
 }
 
}


function Onfocuskkk4(x)
{
      
   if(x.value=="1.270")
   {
	 x.value="";
  	x.style.color="#000";

   }
    else if(x.value==0)
 {
	  x.style.color="#000";
 }
}

function Onblurkkk4(x)
{

 if(x.value=="")
 {
	
   x.value="1.270";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 }
 else if(isNaN(x.value))
 {

	 x.value=1.270;
 }
 
}
//原纸环压 强度计算器
function hyqdjisuan()
{
	//将出现
	var hycs1=document.getElementById('hycs1');
	var hycs2=document.getElementById('hycs2');
	var hycs3=document.getElementById('hycs3');
	var hycs4=document.getElementById('hycs4');
	var hycs5=document.getElementById('hycs5');
	var hycs6=document.getElementById('hycs6');
	var hycs7=document.getElementById('hycs7');
	var hycs8=document.getElementById('hycs8');
	var hycs9=document.getElementById('hycs9');
	var hycs10=document.getElementById('hycs10');
	var hycs11=document.getElementById('hycs11');
	var hycs12=document.getElementById('hycs12');
	var hycs13=document.getElementById('hycs13');
	var hycs14=document.getElementById('hycs14');
	//8个结果
	var hyjg1=document.getElementById('hyjg1');
	var hyjg2=document.getElementById('hyjg2');
	var hyjg3=document.getElementById('hyjg3');
	var hyjg4=document.getElementById('hyjg4');
	var hyjg5=document.getElementById('hyjg5');
	var hyjg6=document.getElementById('hyjg6');
	var hyjg7=document.getElementById('hyjg7');
	
	//默认为0
	if(hycs1.value==" 请填写数值")
	{
		hycs1.value=0;
	    hycs1.style.color="#888888";
	}
	if(hycs2.value==" 请填写数值")
	{
		hycs2.value=0;
	    hycs2.style.color="#888888";
	}
	if(hycs3.value==" 请填写数值")
	{
		hycs3.value=0;
	    hycs3.style.color="#888888";
	}
	if(hycs4.value==" 请填写数值")
	{
		hycs4.value=0;
	    hycs4.style.color="#888888";
	}
	if(hycs5.value==" 请填写数值")
	{
		hycs5.value=0;
	    hycs5.style.color="#888888";
	}
	if(hycs6.value==" 请填写数值")
	{
		hycs6.value=0;
	    hycs6.style.color="#888888";
	}
	if(hycs7.value==" 请填写数值")
	{
		hycs7.value=0;
	    hycs7.style.color="#888888";
	}
	if(hycs8.value==" 请填写数值")
	{
		hycs8.value=0;
	    hycs8.style.color="#888888";
	}
	if(hycs9.value==" 请填写数值")
	{
		hycs9.value=0;
	    hycs9.style.color="#888888";
	}
	if(hycs10.value==" 请填写数值")
	{
		hycs10.value=0;
	    hycs10.style.color="#888888";
	}
	if(hycs11.value==" 请填写数值")
	{
		hycs11.value=0;
	    hycs11.style.color="#888888";
	}
	if(hycs12.value==" 请填写数值")
	{
		hycs12.value=0;
	    hycs12.style.color="#888888";
	}
	if(hycs13.value==" 请填写数值")
	{
		hycs13.value=0;
	    hycs13.style.color="#888888";
	}
	if(hycs14.value==" 请填写数值")
	{
		hycs14.value=0;
	    hycs14.style.color="#888888";
	}
	//计算结果
	hyjg1.value=Math.round( hycs1.value*hycs2.value*1000)/1000;
	hyjg2.value=Math.round( hycs3.value*hycs4.value*1000)/1000;
	hyjg3.value=Math.round( hycs5.value*hycs6.value*1000)/1000;
	hyjg4.value=Math.round( hycs7.value*hycs8.value*1000)/1000;
	hyjg5.value=Math.round( hycs9.value*hycs10.value*1000)/1000;
	hyjg6.value=Math.round( hycs11.value*hycs12.value*1000)/1000;
	hyjg7.value=Math.round( hycs13.value*hycs14.value*1000)/1000;
	//将7个结果 传递给下一个计算器
	var yzhyqd1=document.getElementById("yzhyqd1");
	var yzhyqd2=document.getElementById("yzhyqd2");
	var yzhyqd3=document.getElementById("yzhyqd3");
	var yzhyqd4=document.getElementById("yzhyqd4");
	var yzhyqd5=document.getElementById("yzhyqd5");
	var yzhyqd6=document.getElementById("yzhyqd6");
	var yzhyqd7=document.getElementById("yzhyqd7");
	
	yzhyqd1.value=hyjg1.value;
	yzhyqd2.value=hyjg2.value;
	yzhyqd3.value=hyjg3.value;
	yzhyqd4.value=hyjg4.value;
	yzhyqd5.value=hyjg5.value;
	yzhyqd6.value=hyjg6.value;
	yzhyqd7.value=hyjg7.value;

	
}
//清空数据

function qingnullsx()
{
			
	var hycs1=document.getElementById('hycs1');
	var hycs2=document.getElementById('hycs2');
	var hycs3=document.getElementById('hycs3');
	var hycs4=document.getElementById('hycs4');
	var hycs5=document.getElementById('hycs5');
	var hycs6=document.getElementById('hycs6');
	var hycs7=document.getElementById('hycs7');
	var hycs8=document.getElementById('hycs8');
	var hycs9=document.getElementById('hycs9');
	var hycs10=document.getElementById('hycs10');
	var hycs11=document.getElementById('hycs11');
	var hycs12=document.getElementById('hycs12');
	var hycs13=document.getElementById('hycs13');
	var hycs14=document.getElementById('hycs14');
	//8个结果
	var hyjg1=document.getElementById('hyjg1');
	var hyjg2=document.getElementById('hyjg2');
	var hyjg3=document.getElementById('hyjg3');
	var hyjg4=document.getElementById('hyjg4');
	var hyjg5=document.getElementById('hyjg5');
	var hyjg6=document.getElementById('hyjg6');
	var hyjg7=document.getElementById('hyjg7');
		 hycs14.style.color="#888888";
		 hycs13.style.color="#888888";
		 hycs12.style.color="#888888";
		 hycs11.style.color="#888888";
		 hycs10.style.color="#888888";
		 hycs9.style.color="#888888";
		 hycs8.style.color="#888888";
		 hycs7.style.color="#888888";
		 hycs6.style.color="#888888";
		 hycs5.style.color="#888888";
		 hycs4.style.color="#888888";
		 hycs3.style.color="#888888";
		 hycs2.style.color="#888888";
		 hycs1.style.color="#888888";
	 hycs1.value=" 请填写数值";
  	 hycs2.value=" 请填写数值";
     hycs3.value=" 请填写数值";
	 hycs4.value=" 请填写数值";
	 hycs5.value=" 请填写数值";
	 hycs6.value=" 请填写数值";
	 hycs7.value=" 请填写数值";
     hycs8.value=" 请填写数值";
	 hycs9.value=" 请填写数值";
	 hycs10.value=" 请填写数值";
	 hycs11.value=" 请填写数值";
	 hycs12.value=" 请填写数值";
	 hycs13.value=" 请填写数值";
	 hycs14.value=" 请填写数值";
	 
	 hyjg7.value="";
	 hyjg6.value="";
	 hyjg5.value="";
	 hyjg4.value="";
     hyjg3.value="";
     hyjg2.value="";
     hyjg1.value="";
}

//最后一个计算器
function  ectjisuan()
{
	var byect1=	document.getElementById("byect1");
	var byect2=	document.getElementById("byect2");
	var byect3=	document.getElementById("byect3");
	var byect4=	document.getElementById("byect4");
	//结果1个
	var ectjieguo=document.getElementById("ectjieguo");
	
	//判断为空
	if(byect1.value==" 请填写数值")
	{
			byect1.value=0;
	}
	if(byect2.value==" 请填写数值")
	{
			alert("请填写长度！");
			return false;
	}
	if(byect2.value<=0)
	{
			alert("长度不能小于或等于0");
			return false;
	}
	if(byect3.value==" 请填写数值")
	{
		alert("请填写宽度！");
			return false;
	}
	if(byect3.value<=0)
	{
			alert("宽度不能小于或等于0");
			return false;
	}
	if(byect4.value==" 请填写数值")
	{
		alert("请填写厚度！");
			return false;
	}
	if(byect4.value<=0)
	{
			alert("厚度不能小于或等于0");
			return false;
	}
	
	//计算结果
	ectjieguo.value=Math.round(byect1.value/(0.05874*Math.pow(byect4.value,0.5)*Math.pow((2*byect2.value+2*byect3.value),0.5))*1000)/1000;
	
	
}
//综合环压

function wlzzhhyqdjisuan()
{
	
	var yzhyqd1=document.getElementById("yzhyqd1");
	var yzhyqd2=document.getElementById("yzhyqd2");
	var yzhyqd3=document.getElementById("yzhyqd3");
	var yzhyqd4=document.getElementById("yzhyqd4");
	var yzhyqd5=document.getElementById("yzhyqd5");
	var yzhyqd6=document.getElementById("yzhyqd6");
	var yzhyqd7=document.getElementById("yzhyqd7");
	
			//1.瓦楞纸收缩率
	var ss1= document.getElementById('ss1');
	var ss2= document.getElementById('ss2');
	var ss3= document.getElementById('ss3');
	var ss4= document.getElementById('ss4');
	//瓦型选择
	var wx1= document.getElementById('wx1');
	var wx2= document.getElementById('wx2');
	var wx3= document.getElementById('wx3');
	//结果
	
	var yzqdjgg1=document.getElementById('yzqdjgg1');
	var yzqdjgg2=document.getElementById('yzqdjgg2');
	var yzqdjgg3=document.getElementById('yzqdjgg3');
	//用于存储下拉框的值

	var xiala1="";
	var xiala2="";
	var xiala3="";
	//判断文本框的值
	
	if(yzhyqd1.value==" 请填写数值"||yzhyqd1.value=="")
	{
			yzhyqd1.value=0;
	}
	if(yzhyqd2.value==" 请填写数值"||yzhyqd2.value=="")
	{
			yzhyqd2.value=0;
	}
	if(yzhyqd3.value==" 请填写数值"||yzhyqd3.value=="")
	{
			yzhyqd3.value=0;
	}
	if(yzhyqd4.value==" 请填写数值"||yzhyqd4.value=="")
	{
			yzhyqd4.value=0;
	}
	if(yzhyqd5.value==" 请填写数值"||yzhyqd5.value=="")
	{
			yzhyqd5.value=0;
	}
	if(yzhyqd6.value==" 请填写数值"||yzhyqd6.value=="")
	{
			yzhyqd6.value=0;
	}
	if(yzhyqd7.value==" 请填写数值"||yzhyqd7.value=="")
	{
			yzhyqd7.value=0;
	}
	
	//判断下拉框
if(wx1.value=="")
{
	wx1.selectedIndex=0;
	xiala1=0;
	
}
else if(wx1.value==1)
{
	wx1.selectedIndex=1;
	xiala1=ss1.value;
	
}
else if(wx1.value==2)
{
	xiala1=ss2.value;
	wx1.selectedIndex=2;
}
else if(wx1.value==3)
{
	xiala1=ss3.value;
	wx1.selectedIndex=3;
}
else if(wx1.value==4)
{
	xiala1=ss4.value;
	wx1.selectedIndex=4;
}


if(wx2.value=="")
{
	xiala2=0;
	wx2.selectedIndex=0;
}
else if(wx2.value==1)
{
	xiala2=ss1.value;
	wx2.selectedIndex=1;
}
else if(wx2.value==2)
{
	xiala2=ss2.value;
	wx2.selectedIndex=2;
}
else if(wx2.value==3)
{
	xiala2=ss3.value;
	wx2.selectedIndex=3;
}
else if(wx1.value==4)
{
	xiala2=ss4.value;
	wx2.selectedIndex=4;
}


if(wx3.value=="")
{
	xiala3=0;
	wx3.selectedIndex=0;
}
else if(wx3.value==1)
{
	xiala3=ss1.value;
	wx3.selectedIndex=1;
}
else if(wx3.value==2)
{
	xiala3=ss2.value;
	wx3.selectedIndex=2;
}
else if(wx3.value==3)
{
	xiala3=ss3.value;
	wx3.selectedIndex=3;
}
else if(wx3.value==4)
{
	xiala3=ss4.value;
	wx3.selectedIndex=4;
}


//开始计算结果
 yzqdjgg1.value=Math.round(((yzhyqd1.value*1)+(yzhyqd2.value*1)
			+(yzhyqd3.value*1)+(yzhyqd4.value*1)+(yzhyqd5.value*xiala1)+(yzhyqd6.value*xiala2)+(yzhyqd7.value*xiala3))*1000)/1000;
 yzqdjgg2.value=Math.round(yzqdjgg1.value/9.81/100*1000)/1000;
 yzqdjgg3.value=Math.round(yzqdjgg1.value/9.81/100*2.2046*2.54*1000)/1000;
//将第一个结果传递第3个计算器
var ect= document.getElementById('canshu1');
ect.value=yzqdjgg1.value;
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