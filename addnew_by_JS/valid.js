function valid()
	{		
		var a=document.form1.nname.value;
		var b=document.form1.ttel.value;
		var c=document.form1.mmail.value;
		var d=document.form1.aadre.value;
		var e=document.form1.QQQ.value;
		var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
		var mPattern = /^1[34578]\d{9}$/;
		var qPattern = /^[1-9][0-9]\d{3,10}$/;
		var myReg= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
 
		if (a==null || a==""){
			alert("姓名必须填写");
			return false;
		}
		else if(!uPattern.test(a)){
			alert("用户名形式不正确\n请输入4到16位用户名（字母，数字，下划线，减号）");
			return false;
		}
		
		if(b!=null&&b!=""){
			if(!mPattern.test(b)){
				alert("手机号不存在\n请输入正确的11位手机号");
				return false;
			}
			
		}
		if(c!=null&&c!=""){
			if(!myReg.test(c)){
　　　　    	alert("邮箱格式不对!");
　　　　		return false;
			}
		}
		if(e!=null&&e!=""){
			if(!qPattern.test(e)){
				alert("QQ号不存在");
				return false;
			}
			else{
				return true;
			}
		}
			
	}