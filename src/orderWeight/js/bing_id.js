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
	//重量选中
	var wx4= document.getElementById('wx4');
	//结果
	
	var yzqdjgg1=document.getElementById('yzqdjgg1');
	//用于存储下拉框的值

	var xiala1="";
	var xiala2="";
	var xiala3="";
	var xiala4="";
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
			+(yzhyqd3.value*1)+(yzhyqd4.value*1)+(yzhyqd5.value*xiala1)+(yzhyqd6.value*xiala2)+(yzhyqd7.value*xiala3)+(wx4.value*1))*1000)/1000;
 
 
}

//点击重量选折 开始添加
function addforzl()
{
	
	var wx4= document.getElementById('wx4');
	for(var i=9;i<101;i++)
	{
		wx4.options.add(new Option(i,i)); 
	}	
}
//清空数据
function jljisuannull()
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
	//重量选中
	var wx4= document.getElementById('wx4');
	//结果
	
	var yzqdjgg1=document.getElementById('yzqdjgg1');
	yzqdjgg1.value="";
     yzhyqd1.style.color="#888888";
	 yzhyqd1.value=" 请填写数值";
	 
	 yzhyqd2.style.color="#888888";
	 yzhyqd2.value=" 请填写数值";
	 
	 yzhyqd3.style.color="#888888";
	 yzhyqd3.value=" 请填写数值";
	 
	 yzhyqd4.style.color="#888888";
	 yzhyqd4.value=" 请填写数值";
	 
	 yzhyqd5.style.color="#888888";
	 yzhyqd5.value=" 请填写数值";
	 
	 yzhyqd6.style.color="#888888";
	 yzhyqd6.value=" 请填写数值";
	 
	 yzhyqd7.style.color="#888888";
	 yzhyqd7.value=" 请填写数值";
	 
	 wx1.selectedIndex=0;
	 wx2.selectedIndex=0;
	 wx3.selectedIndex=0;
	 wx4.selectedIndex=0;
}

//原纸可订单数计算器
function yzkddsjisuanqi()
{
		//克重
		var kzcsk1=document.getElementById("kzcsk1");
		var kzcsk2=document.getElementById("kzcsk2");
		var kzcsk3=document.getElementById("kzcsk3");
		var kzcsk4=document.getElementById("kzcsk4");
		var kzcsk5=document.getElementById("kzcsk5");
		//重量
		var yzzl1=document.getElementById("yzzl1");
		var yzzl2=document.getElementById("yzzl2");
		var yzzl3=document.getElementById("yzzl3");
		var yzzl4=document.getElementById("yzzl4");
		var yzzl5=document.getElementById("yzzl5");
		//系数下拉
		var xs1=document.getElementById("xs1");
		var xs2=document.getElementById("xs2");
		//长们开
		var qitac1=document.getElementById("qitac1");
		var qitac2=document.getElementById("qitac2");
		var qitac3=document.getElementById("qitac3");
		//结果
		var jjjg1=document.getElementById("jjjg1");
		var jjjg2=document.getElementById("jjjg2");
		var jjjg3=document.getElementById("jjjg3");
		var jjjg4=document.getElementById("jjjg4");
		var jjjg5=document.getElementById("jjjg5");
		var jjjg6=document.getElementById("jjjg6");
		
		//用于存储下拉框的值
			//1.瓦楞纸收缩率
		var ss1= document.getElementById('ss1');
		var ss2= document.getElementById('ss2');
		var ss3= document.getElementById('ss3');
		var ss4= document.getElementById('ss4');
		
		
		var xiala1="";
		var xiala2="";
	
	
		
		//如果为空者为0
		if(kzcsk1.value==" 请填写数值"||kzcsk1.value=="")
		{
			kzcsk1.value=0;
		}
		if(kzcsk2.value==" 请填写数值"||kzcsk2.value=="")
		{
			kzcsk2.value=0;
		}
		if(kzcsk3.value==" 请填写数值"||kzcsk3.value=="")
		{
			kzcsk3.value=0;
		}
		if(kzcsk4.value==" 请填写数值"||kzcsk4.value=="")
		{
			kzcsk4.value=0;
		}
		if(kzcsk5.value==" 请填写数值"||kzcsk5.value=="")
		{
			kzcsk5.value=0;
		}
		
		
		if(yzzl1.value==" 请填写数值"||yzzl1.value=="")
		{
			yzzl1.value=0;
		}
		if(yzzl2.value==" 请填写数值"||yzzl2.value=="")
		{
			yzzl2.value=0;
		}
		if(yzzl3.value==" 请填写数值"||yzzl3.value=="")
		{
			yzzl3.value=0;
		}
		if(yzzl4.value==" 请填写数值"||yzzl4.value=="")
		{
			yzzl4.value=0;
		}
		if(yzzl5.value==" 请填写数值"||yzzl5.value=="")
		{
			yzzl5.value=0;
		}
		
		
		
		if(qitac1.value==" 请填写数值")
		{
				alert("请填写长度！");
				return false;
		}
		if(qitac1.value<=0)
		{
				alert("长度不能小于或等于0");
				return false;
		}
		if(qitac2.value==" 请填写数值")
		{
			alert("请填写门幅！");
				return false;
		}
		if(qitac2.value<=0)
		{
				alert("门幅不能小于或等于0");
				return false;
		}
		if(qitac3.value==" 请填写数值")
		{
			alert("请填写开数！");
				return false;
		}
		if(qitac3.value<=0)
		{
				alert("开数不能小于或等于0");
				return false;
		}
		
			//判断下拉框
	if(xs1.value=="")
	{
		xs1.selectedIndex=0;
		xiala1=0;
		
	}
	else if(xs1.value==1)
	{
		xs1.selectedIndex=1;
		xiala1=ss1.value;
		
	}
	else if(xs1.value==2)
	{
		xiala1=ss2.value;
		xs1.selectedIndex=2;
	}
	else if(xs1.value==3)
	{
		xiala1=ss3.value;
		xs1.selectedIndex=3;
	}
	else if(xs1.value==4)
	{
		xiala1=ss4.value;
		xs1.selectedIndex=4;
	}

	
	if(xs2.value=="")
	{
		xs2.selectedIndex=0;
		xiala2=0;
		
	}
	else if(xs2.value==1)
	{
		xs2.selectedIndex=1;
		xiala2=ss1.value;
		
	}
	else if(xs2.value==2)
	{
		xiala2=ss2.value;
		xs2.selectedIndex=2;
	}
	else if(xs2.value==3)
	{
		xiala2=ss3.value;
		xs2.selectedIndex=3;
	}
	else if(xs2.value==4)
	{
		xiala2=ss4.value;
		xs2.selectedIndex=4;
	}


	//计算结果
	jjjg1.value=Math.round((yzzl1.value*1+yzzl2.value*1+yzzl3.value*1+yzzl4.value*1+yzzl5.value*1)*1000)/1000;
	
	jjjg2.value=Math.round(yzzl1.value/(kzcsk1.value*qitac1.value*qitac2.value*1)*qitac3.value*1000000000000);
	jjjg3.value=Math.round(yzzl2.value/(kzcsk2.value*qitac1.value*qitac2.value*xiala1)*qitac3.value*1000000000000);
	jjjg4.value=Math.round(yzzl3.value/(kzcsk3.value*qitac1.value*qitac2.value*1)*qitac3.value*1000000000000);
	jjjg5.value=Math.round(yzzl4.value/(kzcsk4.value*qitac1.value*qitac2.value*xiala2)*qitac3.value*1000000000000);
	jjjg6.value=Math.round(yzzl5.value/(kzcsk5.value*qitac1.value*qitac2.value*1)*qitac3.value*1000000000000);
	
	//将长。什么的传递给下个计算机
		var sqitac1=document.getElementById("sqitac1");
		var sqitac2=document.getElementById("sqitac2");
		var sqitac3=document.getElementById("sqitac3");
		
		sqitac1.value=qitac1.value;
		sqitac2.value=qitac2.value;
		sqitac3.value=qitac3.value;
		//将克重也传递给下个页面
			//克重
		var skzcsk1=document.getElementById("skzcsk1");
		var skzcsk2=document.getElementById("skzcsk2");
		var skzcsk3=document.getElementById("skzcsk3");
		var skzcsk4=document.getElementById("skzcsk4");
		var skzcsk5=document.getElementById("skzcsk5");
		skzcsk1.value=kzcsk1.value;
		skzcsk2.value=kzcsk2.value;
		skzcsk3.value=kzcsk3.value;
		skzcsk4.value=kzcsk4.value;
		skzcsk5.value=kzcsk5.value;
		//系数
		var sxs1=document.getElementById("sxs1");
		var sxs2=document.getElementById("sxs2");
		sxs1.selectedIndex=xs1.value;
		sxs2.selectedIndex=xs2.value;
		
		
		
}

//清空原纸可供订单数计算器信息

function yzkgddsjisuanjinull()
{
	    //克重
		var kzcsk1=document.getElementById("kzcsk1");
		var kzcsk2=document.getElementById("kzcsk2");
		var kzcsk3=document.getElementById("kzcsk3");
		var kzcsk4=document.getElementById("kzcsk4");
		var kzcsk5=document.getElementById("kzcsk5");
		//重量
		var yzzl1=document.getElementById("yzzl1");
		var yzzl2=document.getElementById("yzzl2");
		var yzzl3=document.getElementById("yzzl3");
		var yzzl4=document.getElementById("yzzl4");
		var yzzl5=document.getElementById("yzzl5");
		//系数下拉
		var xs1=document.getElementById("xs1");
		var xs2=document.getElementById("xs2");
		//长们开
		var qitac1=document.getElementById("qitac1");
		var qitac2=document.getElementById("qitac2");
		var qitac3=document.getElementById("qitac3");
		//结果
		var jjjg1=document.getElementById("jjjg1");
		var jjjg2=document.getElementById("jjjg2");
		var jjjg3=document.getElementById("jjjg3");
		var jjjg4=document.getElementById("jjjg4");
		var jjjg5=document.getElementById("jjjg5");
		var jjjg6=document.getElementById("jjjg6");
		
		//清空
		jjjg1.value="";
		jjjg2.value="";
		jjjg3.value="";
		jjjg4.value="";
		jjjg5.value="";
		jjjg6.value="";
		
		
	 kzcsk1.style.color="#888888";
	 kzcsk1.value=" 请填写数值";
	 kzcsk2.style.color="#888888";
	 kzcsk2.value=" 请填写数值";
	 kzcsk3.style.color="#888888";
	 kzcsk3.value=" 请填写数值";
	 kzcsk4.style.color="#888888";
	 kzcsk4.value=" 请填写数值";
	 kzcsk5.style.color="#888888";
	 kzcsk5.value=" 请填写数值";
	 
	 
	 yzzl1.style.color="#888888";
	 yzzl1.value=" 请填写数值";
	 yzzl2.style.color="#888888";
	 yzzl2.value=" 请填写数值";
	 yzzl3.style.color="#888888";
	 yzzl3.value=" 请填写数值";
	 yzzl4.style.color="#888888";
	 yzzl4.value=" 请填写数值";
	 yzzl5.style.color="#888888";
	 yzzl5.value=" 请填写数值";
	 
	 
	 qitac1.style.color="#888888";
	 qitac1.value=" 请填写数值";
	 qitac2.style.color="#888888";
	 qitac2.value=" 请填写数值";
	 qitac3.style.color="#888888";
	 qitac3.value=" 请填写数值";
	 
	 
	 xs1.selectedIndex=0;
	  xs2.selectedIndex=0;
		
}
//最后一个计算器

function zuihoujisuanji()
{
	
	//克重
		var skzcsk1=document.getElementById("skzcsk1");
		var skzcsk2=document.getElementById("skzcsk2");
		var skzcsk3=document.getElementById("skzcsk3");
		var skzcsk4=document.getElementById("skzcsk4");
		var skzcsk5=document.getElementById("skzcsk5");
		//重量
		var syzzl1=document.getElementById("syzzl1");

		//系数下拉
		var sxs1=document.getElementById("sxs1");
		var sxs2=document.getElementById("sxs2");
		//长们开
		var sqitac1=document.getElementById("sqitac1");
		var sqitac2=document.getElementById("sqitac2");
		var sqitac3=document.getElementById("sqitac3");
		//结果
		var sjjjg1=document.getElementById("sjjjg1");
		var sjjjg2=document.getElementById("sjjjg2");
		var sjjjg3=document.getElementById("sjjjg3");
		var sjjjg4=document.getElementById("sjjjg4");
		var sjjjg5=document.getElementById("sjjjg5");
		var sjjjg6=document.getElementById("sjjjg6");
		
		//用于存储下拉框的值
			//1.瓦楞纸收缩率
		var ss1= document.getElementById('ss1');
		var ss2= document.getElementById('ss2');
		var ss3= document.getElementById('ss3');
		var ss4= document.getElementById('ss4');
		
		
		var xiala1="";
		var xiala2="";
	
	
		
		//如果为空者为0
		if(skzcsk1.value==" 请填写数值"||skzcsk1.value=="")
		{
			skzcsk1.value=0;
		}
		if(skzcsk2.value==" 请填写数值"||skzcsk2.value=="")
		{
			skzcsk2.value=0;
		}
		if(skzcsk3.value==" 请填写数值"||skzcsk3.value=="")
		{
			skzcsk3.value=0;
		}
		if(skzcsk4.value==" 请填写数值"||skzcsk4.value=="")
		{
			skzcsk4.value=0;
		}
		if(skzcsk5.value==" 请填写数值"||skzcsk5.value=="")
		{
			skzcsk5.value=0;
		}
		
		
		if(syzzl1.value==" 请填写数值"||syzzl1.value=="")
		{
			syzzl1.value=0;
		}
	
		
		
		
		if(sqitac1.value==" 请填写数值")
		{
				alert("请填写长度！");
				return false;
		}
		if(sqitac1.value<=0)
		{
				alert("长度不能小于或等于0");
				return false;
		}
		if(sqitac2.value==" 请填写数值")
		{
			alert("请填写门幅！");
				return false;
		}
		if(sqitac2.value<=0)
		{
				alert("门幅不能小于或等于0");
				return false;
		}
		if(sqitac3.value==" 请填写数值")
		{
			alert("请填写开数！");
				return false;
		}
		if(sqitac3.value<=0)
		{
				alert("开数不能小于或等于0");
				return false;
		}
		
			//判断下拉框
	if(sxs1.value=="")
	{
		sxs1.selectedIndex=0;
		xiala1=0;
		
	}
	else if(sxs1.value==1)
	{
		sxs1.selectedIndex=1;
		xiala1=ss1.value;
		
	}
	else if(sxs1.value==2)
	{
		xiala1=ss2.value;
		sxs1.selectedIndex=2;
	}
	else if(sxs1.value==3)
	{
		xiala1=ss3.value;
		sxs1.selectedIndex=3;
	}
	else if(sxs1.value==4)
	{
		xiala1=ss4.value;
		sxs1.selectedIndex=4;
	}

	
	if(sxs2.value=="")
	{
		sxs2.selectedIndex=0;
		xiala2=0;
		
	}
	else if(sxs2.value==1)
	{
		sxs2.selectedIndex=1;
		xiala2=ss1.value;
		
	}
	else if(sxs2.value==2)
	{
		xiala2=ss2.value;
		sxs2.selectedIndex=2;
	}
	else if(sxs2.value==3)
	{
		xiala2=ss3.value;
		sxs2.selectedIndex=3;
	}
	else if(sxs2.value==4)
	{
		xiala2=ss4.value;
		sxs2.selectedIndex=4;
	}


	//计算结果
	

	sjjjg2.value=Math.round(syzzl1.value*skzcsk1.value*sqitac1.value*sqitac2.value*1/sqitac3.value/1000000000000*1000)/1000;
	sjjjg3.value=Math.round(syzzl1.value*skzcsk2.value*sqitac1.value*sqitac2.value*xiala1/sqitac3.value/1000000000000*1000)/1000;
	sjjjg4.value=Math.round(syzzl1.value*skzcsk3.value*sqitac1.value*sqitac2.value*1/sqitac3.value/1000000000000*1000)/1000;
	sjjjg5.value=Math.round(syzzl1.value*skzcsk4.value*sqitac1.value*sqitac2.value*xiala2/sqitac3.value/1000000000000*1000)/1000;
	sjjjg6.value=Math.round(syzzl1.value*skzcsk5.value*sqitac1.value*sqitac2.value*1/sqitac3.value/1000000000000*1000)/1000;
	
	sjjjg1.value=Math.round((sjjjg2.value*1+sjjjg3.value*1+sjjjg4.value*1+sjjjg5.value*1+sjjjg6.value*1)*1000)/1000;
	
}
//清空最后一个计算机哦哦哦
function lastnull()
{
	 var skzcsk1=document.getElementById("skzcsk1");
		var skzcsk2=document.getElementById("skzcsk2");
		var skzcsk3=document.getElementById("skzcsk3");
		var skzcsk4=document.getElementById("skzcsk4");
		var skzcsk5=document.getElementById("skzcsk5");
		//重量
		var syzzl1=document.getElementById("syzzl1");

		//系数下拉
		var sxs1=document.getElementById("sxs1");
		var sxs2=document.getElementById("sxs2");
		//长们开
		var sqitac1=document.getElementById("sqitac1");
		var sqitac2=document.getElementById("sqitac2");
		var sqitac3=document.getElementById("sqitac3");
		//结果
		var sjjjg1=document.getElementById("sjjjg1");
		var sjjjg2=document.getElementById("sjjjg2");
		var sjjjg3=document.getElementById("sjjjg3");
		var sjjjg4=document.getElementById("sjjjg4");
		var sjjjg5=document.getElementById("sjjjg5");
		var sjjjg6=document.getElementById("sjjjg6");
		
		//清空
		sjjjg1.value="";
		sjjjg2.value="";
		sjjjg3.value="";
		sjjjg4.value="";
		sjjjg5.value="";
		sjjjg6.value="";
		
		
	 skzcsk1.style.color="#888888";
	 skzcsk1.value=" 请填写数值";
	 skzcsk2.style.color="#888888";
	 skzcsk2.value=" 请填写数值";
	 skzcsk3.style.color="#888888";
	 skzcsk3.value=" 请填写数值";
	 skzcsk4.style.color="#888888";
	 skzcsk4.value=" 请填写数值";
	 skzcsk5.style.color="#888888";
	 skzcsk5.value=" 请填写数值";
	 
	 
	 syzzl1.style.color="#888888";
	 syzzl1.value=" 请填写数值";
	 syzzl2.style.color="#888888";
	 syzzl2.value=" 请填写数值";
	 syzzl3.style.color="#888888";
	 syzzl3.value=" 请填写数值";
	 syzzl4.style.color="#888888";
	 syzzl4.value=" 请填写数值";
	 syzzl5.style.color="#888888";
	 syzzl5.value=" 请填写数值";
	 
	 
	 sqitac1.style.color="#888888";
	 sqitac1.value=" 请填写数值";
	 sqitac2.style.color="#888888";
	 sqitac2.value=" 请填写数值";
	 sqitac3.style.color="#888888";
	 sqitac3.value=" 请填写数值";
	 
	 
	 sxs1.selectedIndex=0;
	  sxs2.selectedIndex=0;
	
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