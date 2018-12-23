

function validform()
	{		
		var x=document.form1.nname.value;
		var y=document.form1.ppassword.value;
		var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
		
		if (x==null || x==""){
			alert("姓名必须填写");
			return false;
		}
		else if(!uPattern.test(x)){
			alert("用户名形式不正确\n请输入4到16位（字母，数字，下划线，减号）");
			return false;
		}
		else if(y==null || y=="" ){
			alert("密码必须填写");
			return false;
		}
		else if(y.length<6){
			alert("密码位数至少为为6位");
			return false;
		}
		else{
			return true;
		}		
	}
	

	
