
//输如验证
function tishio()
{
	alert("预计10月21日上线,尽请期待！");	
}

function Onfocus(x)
{
      
   if(x.value=="请填写数值")
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
	
   x.value="请填写数值";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 } else if(isNaN(x.value))
 {

	 x.value="请填写数值";
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


function Onfocuslll1(x)
{
      
   if(x.value=="0.6")
   {
	 x.value="";
  	x.style.color="#000";

   }
    else if(x.value==0)
 {
	  x.style.color="#000";
 }
}

function Onblurlll1(x)
{

 if(x.value=="")
 {
	
   x.value="0.6";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 }
 else if(isNaN(x.value))
 {

	 x.value=0.6;
 }
 
}


function Onfocuslll2(x)
{
      
   if(x.value=="0.8")
   {
	 x.value="";
  	x.style.color="#000";

   }
    else if(x.value==0)
 {
	  x.style.color="#000";
 }
}

function Onblurlll2(x)
{

 if(x.value=="")
 {
	
   x.value="0.8";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 }
 else if(isNaN(x.value))
 {

	 x.value=0.8;
 }
 
}


function Onfocuslll3(x)
{
      
   if(x.value=="70")
   {
	 x.value="";
  	x.style.color="#000";

   }
    else if(x.value==0)
 {
	  x.style.color="#000";
 }
}

function Onblurlll3(x)
{

 if(x.value=="")
 {
	
   x.value="70";
    x.style.color="#888888";
 }
 else if(x.value==0)
 {
	  x.style.color="#888888";
 }
 else if(isNaN(x.value))
 {

	 x.value=70;
 }
 
}


//清空瓦楞纸板价格计算
function wlznull()
{
	//重量
var kz1= document.getElementById('kz1');
var kz2= document.getElementById('kz2');
var kz3= document.getElementById('kz3');
var kz4= document.getElementById('kz4');
var kz5= document.getElementById('kz5');
var kz6= document.getElementById('kz6');
var kz7= document.getElementById('kz7');
//单价
var dj1= document.getElementById('dj1');
var dj2= document.getElementById('dj2');
var dj3= document.getElementById('dj3');
var dj4= document.getElementById('dj4');
var dj5= document.getElementById('dj5');
var dj6= document.getElementById('dj6');
var dj7= document.getElementById('dj7');

//成本
var cb1= document.getElementById('cb1');
var cb2= document.getElementById('cb2');
var cb3= document.getElementById('cb3');
var cb4= document.getElementById('cb4');
var cb5= document.getElementById('cb5');
var cb6= document.getElementById('cb6');
var cb7= document.getElementById('cb7');


//瓦楞纸板加工费
var jgf= document.getElementById('jgf');

   
   kz1.style.color="#888888";
   kz1.value="请填写数值";
   
   kz2.style.color="#888888";
   kz2.value="请填写数值";
   
   kz3.style.color="#888888";
   kz3.value="请填写数值";
   
   kz4.style.color="#888888";
   kz4.value="请填写数值";
   
   kz5.style.color="#888888";
   kz5.value="请填写数值";
   
   kz6.style.color="#888888";
   kz6.value="请填写数值";
   
   kz7.style.color="#888888";
   kz7.value="请填写数值";
   
   dj1.style.color="#888888";
   dj1.value="请填写数值";
   
   dj2.style.color="#888888";
   dj2.value="请填写数值";
   
   dj3.style.color="#888888";
   dj3.value="请填写数值";
   
   dj4.style.color="#888888";
   dj4.value="请填写数值";
   
   dj5.style.color="#888888";
   dj5.value="请填写数值";
   
   dj6.style.color="#888888";
   dj6.value="请填写数值";
   
   dj7.style.color="#888888";
   dj7.value="请填写数值";
   
   jgf.style.color="#888888";
   jgf.value="请填写数值";
   
  cb1 .innerHTML="";
  cb2 .innerHTML="";
  cb3 .innerHTML="";
  cb4 .innerHTML="";
  cb5 .innerHTML="";
  cb6 .innerHTML="";
  cb7 .innerHTML="";
   
   zbjg1.value="";
   zbjg2.value="";
   
}

//纸板计算结果
function zbcbjisuan()
{
	//1.瓦楞纸收缩率
var ss1= document.getElementById('ss1');
var ss2= document.getElementById('ss2');
var ss3= document.getElementById('ss3');
var ss4= document.getElementById('ss4');
//重量
var kz1= document.getElementById('kz1');
var kz2= document.getElementById('kz2');
var kz3= document.getElementById('kz3');
var kz4= document.getElementById('kz4');
var kz5= document.getElementById('kz5');
var kz6= document.getElementById('kz6');
var kz7= document.getElementById('kz7');
//单价
var dj1= document.getElementById('dj1');
var dj2= document.getElementById('dj2');
var dj3= document.getElementById('dj3');
var dj4= document.getElementById('dj4');
var dj5= document.getElementById('dj5');
var dj6= document.getElementById('dj6');
var dj7= document.getElementById('dj7');

//成本
var cb1= document.getElementById('cb1');
var cb2= document.getElementById('cb2');
var cb3= document.getElementById('cb3');
var cb4= document.getElementById('cb4');
var cb5= document.getElementById('cb5');
var cb6= document.getElementById('cb6');
var cb7= document.getElementById('cb7');

//瓦型选择
var wx1= document.getElementById('wx1');
var wx2= document.getElementById('wx2');
var wx3= document.getElementById('wx3');
//瓦楞纸板加工费
var jgf= document.getElementById('jgf');
//结果1.2


	
var zbjg1= document.getElementById('zbjg1');
var zbjg2= document.getElementById('zbjg2');
//用于存储下拉框的值

var xiala1="";
var xiala2="";
var xiala3="";

//判断加工费
if(jgf.value=="请填写数值"||jgf.value=="")
{
	jgf.value=0;
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


//判断是否为空

if(kz1.value=="请填写数值"||kz1.value=="")
{
		kz1.value=0;
}

if(kz2.value=="请填写数值"||kz2.value=="")
{
		kz2.value=0;
}
if(kz3.value=="请填写数值"||kz3.value=="")
{
		kz3.value=0;
}
if(kz4.value=="请填写数值"||kz4.value=="")
{
		kz4.value=0;
}
if(kz5.value=="请填写数值"||kz5.value=="")
{
		kz5.value=0;
}
if(kz6.value=="请填写数值"||kz6.value=="")
{
		kz6.value=0;
}
if(kz7.value=="请填写数值"||kz7.value=="")
{
		kz7.value=0;
}

if(dj1.value=="请填写数值"||dj1.value=="")
{
		dj1.value=0;
}
if(dj2.value=="请填写数值"||dj2.value=="")
{
		dj2.value=0;
}

if(dj3.value=="请填写数值"||dj3.value=="")
{
		dj3.value=0;
}

if(dj4.value=="请填写数值"||dj4.value=="")
{
		dj4.value=0;
}

if(dj5.value=="请填写数值"||dj5.value=="")
{
		dj5.value=0;
}

if(dj6.value=="请填写数值"||dj6.value=="")
{
		dj6.value=0;
}

if(dj7.value=="请填写数值"||dj7.value=="")
{
		dj7.value=0;
}



//计算出成本
cb1.innerHTML=Math.round(kz1.value*dj1.value/1000000*1000)/1000;
cb2.innerHTML=Math.round(kz2.value*dj2.value/1000000*1000)/1000;
cb3.innerHTML=Math.round(kz3.value*dj3.value/1000000*1000)/1000;
cb4.innerHTML=Math.round(kz4.value*dj4.value/1000000*1000)/1000;
cb5.innerHTML=Math.round(kz5.value*dj5.value/1000000*1000)/1000;
cb6.innerHTML=Math.round(kz6.value*dj6.value/1000000*1000)/1000;
cb7.innerHTML=Math.round(kz7.value*dj7.value/1000000*1000)/1000;

//总成本
zbjg1.value=Math.round(((cb1.innerHTML*1)+(cb2.innerHTML*1)+(cb3.innerHTML*1)+(cb4.innerHTML*1)+(cb5.innerHTML*xiala1)+(cb6.innerHTML*xiala2)+(cb7.innerHTML*xiala3))*1000)/1000;
zbjg2.value=Math.round(((zbjg1.value*1)+(jgf.value*1))*1000)/1000;
//将原纸传递给下一个
	var zxcb1=document.getElementById("zxcb1");
	var zxcb2=document.getElementById("zxcb2");
	zxcb1.innerHTML=zbjg1.value;
	zxcb2.innerHTML=zbjg1.value;
	//原纸成本
	var bzcb1=document.getElementById('bzcb1');
	var bzcb2=document.getElementById('bzcb2');
	var bzcb3=document.getElementById('bzcb3');
	var bzcb4=document.getElementById('bzcb4');
	bzcb1.innerHTML =bzcb2.innerHTML=bzcb3.innerHTML=bzcb4.innerHTML=zbjg1.value;
	
}

//普通纸箱价格计算

function ptzxjgjisuan()
{
	//加工费
	var zxjgf1=document.getElementById("zxjgf1");
	var zxjgf2=document.getElementById("zxjgf2");
	var zxjgf3=document.getElementById("zxjgf3");
	//原纸成本
	var zxcb1=document.getElementById("zxcb1");
	var zxcb2=document.getElementById("zxcb2");
	//展开面积
	var zxmj1=document.getElementById("zxmj1");
	var zxmj2=document.getElementById("zxmj2");
	//纸箱结果(单)
	var zxjgd1=document.getElementById("zxjgd1");
	var zxjgd2=document.getElementById("zxjgd2");
	var zxjgd3=document.getElementById("zxjgd3");
	var zxjgd4=document.getElementById("zxjgd4");
	//结果双()
	var zxjgs1=document.getElementById("zxjgs1");
	var zxjgs2=document.getElementById("zxjgs2");
	var zxjgs3=document.getElementById("zxjgs3");
	var zxjgs4=document.getElementById("zxjgs4");
	//判断是否为空
	
		//判断展开面积
	if(zxmj1.value=="请填写数值"||zxmj1.value=="")
	{
		zxmj1.value=0;
	}
		if(zxmj2.value=="请填写数值"||zxmj2.value=="")
	{
		zxmj2.value=0;
	}
	//算结果
	
	zxjgd1.innerHTML=Math.round((zxcb1.innerHTML*zxmj1.value)/ (zxjgf3.value/100)*1000)/1000;
	zxjgd2.innerHTML=Math.round(((zxcb1.innerHTML*1+zxjgf1.value*1)*zxmj1.value)*1000)/1000;
	zxjgd3.innerHTML=Math.round(((zxjgd1.innerHTML/zxmj1.value)-zxcb1.innerHTML)*1000)/1000;
	zxjgd4.innerHTML=Math.round(Math.round((zxcb1.innerHTML*zxmj1.value/zxjgd2.innerHTML)*1000)/1000*100*1000)/1000+"%";
	
	zxjgs1.innerHTML=Math.round(zxcb2.innerHTML*zxmj2.value/(zxjgf3.value/100)*1000) /1000;
	zxjgs2.innerHTML=Math.round(((zxcb2.innerHTML*1+zxjgf2.value*1)*zxmj2.value)*1000)/1000;
	zxjgs3.innerHTML=Math.round((zxjgs1.innerHTML/zxmj2.value-zxcb2.innerHTML)*1000)/1000;
	zxjgs4.innerHTML=Math.round(Math.round(zxcb2.innerHTML*zxmj2.value/zxjgs2.innerHTML*1000) /1000*100*1000)/1000+"%";
	

	
}

//普通纸箱价格清空
function zxptnull()
{
	
	//原纸成本
	var zxcb1=document.getElementById("zxcb1");
	var zxcb2=document.getElementById("zxcb2");
	//展开面积
	var zxmj1=document.getElementById("zxmj1");
	var zxmj2=document.getElementById("zxmj2");
	
	//纸箱结果(单)
	var zxjgd1=document.getElementById("zxjgd1");
	var zxjgd2=document.getElementById("zxjgd2");
	var zxjgd3=document.getElementById("zxjgd3");
	var zxjgd4=document.getElementById("zxjgd4");
	//结果双()
	var zxjgs1=document.getElementById("zxjgs1");
	var zxjgs2=document.getElementById("zxjgs2");
	var zxjgs3=document.getElementById("zxjgs3");
	var zxjgs4=document.getElementById("zxjgs4");
	//加工费
	var zxjgf1=document.getElementById("zxjgf1");
	var zxjgf2=document.getElementById("zxjgf2");
	var zxjgf3=document.getElementById("zxjgf3");
	
   zxjgf1.style.color="#888888";
   zxjgf1.value="0.6";
   
   zxjgf2.style.color="#888888";
   zxjgf2.value="0.8";
   
     zxjgf3.style.color="#888888";
   zxjgf3.value="70";
	
	zxcb1.innerHTML="";
	zxcb2.innerHTML="";
	
	   
   zxmj1.style.color="#888888";
   zxmj1.value="请填写数值";
   
    zxmj2.style.color="#888888";
   zxmj2.value="请填写数值";
	
	
	
	zxjgd1.innerHTML="";
	zxjgd2.innerHTML="";
	zxjgd3.innerHTML="";
	zxjgd4.innerHTML="";
	zxjgs1.innerHTML="";
	zxjgs2.innerHTML="";
	zxjgs3.innerHTML="";
	zxjgs4.innerHTML="";

}

//标准纸箱价格计算
function bzzxjisuan()
{
	
	
	//长宽高
	var chang=document.getElementById('chang');
	var kuang=document.getElementById('kuang');
	var gao=document.getElementById('gao');
	//判断是否开始计算
	if(chang.value=="请填写数值"||kuang.value=="请填写数值"||gao.value=="请填写数值")
	{
		
		alert("请先填写长宽高!");
		return false;
	}
	else if(chang.value <= 0 || kuang.value <= 0 || gao.value <=0)
	{
		
		alert("不能小于或等于0!");
		return false;
	}
	//原纸成本
	var bzcb1=document.getElementById('bzcb1');
	var bzcb2=document.getElementById('bzcb2');
	var bzcb3=document.getElementById('bzcb3');
	var bzcb4=document.getElementById('bzcb4');
	//展开面积
	
	var bzmj1=document.getElementById('bzmj1');
	var bzmj2=document.getElementById('bzmj2');
	var bzmj3=document.getElementById('bzmj3');
	var bzmj4=document.getElementById('bzmj4');
	
	//纸箱价格1行
	
	var bzzxjgh11=document.getElementById('bzzxjgh11');
	var bzzxjgh12=document.getElementById('bzzxjgh12');
	var bzzxjgh13=document.getElementById('bzzxjgh13');
	var bzzxjgh14=document.getElementById('bzzxjgh14');
	//纸箱价格2行
	var bzzxjgh21=document.getElementById('bzzxjgh21');
	var bzzxjgh22=document.getElementById('bzzxjgh22');
	var bzzxjgh23=document.getElementById('bzzxjgh23');
	var bzzxjgh24=document.getElementById('bzzxjgh24');
	//纸箱价格3行
	var bzzxjgh31=document.getElementById('bzzxjgh31');
	var bzzxjgh32=document.getElementById('bzzxjgh32');
	var bzzxjgh33=document.getElementById('bzzxjgh33');
	var bzzxjgh34=document.getElementById('bzzxjgh34');
	//纸箱价格4行
	var bzzxjgh41=document.getElementById('bzzxjgh41');
	var bzzxjgh42=document.getElementById('bzzxjgh42');
	var bzzxjgh43=document.getElementById('bzzxjgh43');
	var bzzxjgh44=document.getElementById('bzzxjgh44');
	
	//加工费
	var zxjgf1=document.getElementById("zxjgf1");
	var zxjgf2=document.getElementById("zxjgf2");
	var zxjgf3=document.getElementById("zxjgf3");
	
	//计算结果
	//面积
	var mianji=(chang.value*kuang.value*2)+(chang.value*gao.value*2)+(kuang.value*gao.value*2);
	bzmj1.innerHTML=Math.round((((chang.value*1+kuang.value*1)*2)+3)*(kuang.value*1+gao.value*1)/10000*1000)/1000;
	bzmj2.innerHTML=Math.round((chang.value*1+kuang.value*1+3)*(kuang.value*1+gao.value*1)*2/10000*1000)/1000;
	bzmj3.innerHTML=Math.round((((chang.value*1+kuang.value*1)*2)+4)*(kuang.value*1+gao.value*1)/10000*1000)/1000;
	bzmj4.innerHTML=Math.round(((chang.value*1+1*kuang.value+4)*2)*(kuang.value*1+gao.value*1)/10000*1000)/1000;
	//纸箱价格1行
	bzzxjgh11.innerHTML=Math.round(bzcb1.innerHTML*bzmj1.innerHTML/(zxjgf3.value/100)*1000)/1000;
	bzzxjgh12.innerHTML=Math.round(((bzcb1.innerHTML*1+zxjgf1.value*1)*bzmj1.innerHTML)*1000)/1000;
	bzzxjgh13.innerHTML=Math.round(((bzzxjgh11.innerHTML/bzmj1.innerHTML)-bzcb1.innerHTML)*1000)/1000;
	bzzxjgh14.innerHTML=Math.round(Math.round(bzcb1.innerHTML*bzmj1.innerHTML/bzzxjgh12.innerHTML*1000)/1000*100*1000)/1000+"%";

	
	bzzxjgh21.innerHTML=Math.round(bzcb2.innerHTML*bzmj2.innerHTML/(zxjgf3.value/100)*1000)/1000;
	bzzxjgh22.innerHTML=Math.round(((bzcb2.innerHTML*1+zxjgf1.value*1)*bzmj2.innerHTML)*1000)/1000;
	bzzxjgh23.innerHTML=Math.round(((bzzxjgh21.innerHTML/bzmj2.innerHTML)-bzcb2.innerHTML)*1000)/1000;
	bzzxjgh24.innerHTML=Math.round(Math.round(bzcb2.innerHTML*bzmj2.innerHTML/bzzxjgh22.innerHTML*1000)/1000*100*1000)/1000+"%";

	
	
	bzzxjgh31.innerHTML=Math.round(bzcb3.innerHTML*bzmj3.innerHTML/(zxjgf3.value/100)*1000)/1000;
	bzzxjgh32.innerHTML=Math.round((bzcb3.innerHTML*1+zxjgf2.value*1)*bzmj3.innerHTML*1000)/1000;
	bzzxjgh33.innerHTML=Math.round(((bzzxjgh31.innerHTML/bzmj3.innerHTML)-bzcb3.innerHTML)*1000)/1000;
	bzzxjgh34.innerHTML=Math.round(Math.round(bzcb3.innerHTML*bzmj3.innerHTML/bzzxjgh32.innerHTML*1000)/1000*100*1000)/1000+"%";

	
	
	bzzxjgh41.innerHTML=Math.round(bzcb4.innerHTML*bzmj4.innerHTML/(zxjgf3.value/100)*1000)/1000;
	bzzxjgh42.innerHTML=Math.round((bzcb4.innerHTML*1+zxjgf2.value*1)*bzmj4.innerHTML*1000)/1000;
	bzzxjgh43.innerHTML=Math.round(((bzzxjgh41.innerHTML/bzmj4.innerHTML)-bzcb4.innerHTML)*1000)/1000;
	bzzxjgh44.innerHTML=Math.round(Math.round(bzcb4.innerHTML*bzmj4.innerHTML/bzzxjgh42.innerHTML*1000)/1000*100*1000)/1000+"%";
	
	
	
}
//标准纸箱价格清空
function bzzxnull()
{
	
	//长宽高
	var chang=document.getElementById('chang');
	var kuang=document.getElementById('kuang');
	var gao=document.getElementById('gao');
	//原纸成本
	var bzcb1=document.getElementById('bzcb1');
	var bzcb2=document.getElementById('bzcb2');
	var bzcb3=document.getElementById('bzcb3');
	var bzcb4=document.getElementById('bzcb4');
	//展开面积
	
	var bzmj1=document.getElementById('bzmj1');
	var bzmj2=document.getElementById('bzmj2');
	var bzmj3=document.getElementById('bzmj3');
	var bzmj4=document.getElementById('bzmj4');
	
	//纸箱价格1行
	
	var bzzxjgh11=document.getElementById('bzzxjgh11');
	var bzzxjgh12=document.getElementById('bzzxjgh12');
	var bzzxjgh13=document.getElementById('bzzxjgh13');
	var bzzxjgh14=document.getElementById('bzzxjgh14');
	//纸箱价格2行
	var bzzxjgh21=document.getElementById('bzzxjgh21');
	var bzzxjgh22=document.getElementById('bzzxjgh22');
	var bzzxjgh23=document.getElementById('bzzxjgh23');
	var bzzxjgh24=document.getElementById('bzzxjgh24');
	//纸箱价格3行
	var bzzxjgh31=document.getElementById('bzzxjgh31');
	var bzzxjgh32=document.getElementById('bzzxjgh32');
	var bzzxjgh33=document.getElementById('bzzxjgh33');
	var bzzxjgh34=document.getElementById('bzzxjgh34');
	//纸箱价格4行
	var bzzxjgh41=document.getElementById('bzzxjgh41');
	var bzzxjgh42=document.getElementById('bzzxjgh42');
	var bzzxjgh43=document.getElementById('bzzxjgh43');
	var bzzxjgh44=document.getElementById('bzzxjgh44');
	
	//清空td
	bzcb1.innerHTML="";
	bzcb2.innerHTML="";
	bzcb3.innerHTML="";
	bzcb4.innerHTML="";
	
	bzmj1.innerHTML="";
	bzmj2.innerHTML="";
	bzmj3.innerHTML="";
	bzmj4.innerHTML="";
	
	bzzxjgh11.innerHTML="";
	bzzxjgh12.innerHTML="";
	bzzxjgh13.innerHTML="";
	bzzxjgh14.innerHTML="";
	
	bzzxjgh21.innerHTML="";
	bzzxjgh22.innerHTML="";
	bzzxjgh23.innerHTML="";
	bzzxjgh24.innerHTML="";
	
	bzzxjgh31.innerHTML="";
	bzzxjgh32.innerHTML="";
	bzzxjgh33.innerHTML="";
	bzzxjgh34.innerHTML="";
	
	bzzxjgh41.innerHTML="";
	bzzxjgh42.innerHTML="";
	bzzxjgh43.innerHTML="";
	bzzxjgh44.innerHTML="";
	chang.style.color="#888888";
	kuang.style.color="#888888";
	gao.style.color="#888888";
	chang.value="请填写数值";
	kuang.value="请填写数值";
	gao.value="请填写数值";
	
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