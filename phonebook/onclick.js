    function $(eleStr){
        switch(eleStr.substr(0,1)){
        case "#":
            return document.getElementById(eleStr.substr(1));
            break;
        case ".":
            return document.getElementsByClassName(eleStr.substr(1));
            break;
        case "_":
            return document.getElementsByName(eleStr.substr(1));
            break;
        default:
            return document.getElementsByTagName(eleStr);
        break;
        }
    }

    onload = function(){

        doOperator();       
    }

    function doOperator(){

        var updates =$(".update");//class update的所有元素
        var dels =$(".del");//class del的所有元素
        for (var i = 0; i < dels.length; i++) {
            dels[i].onclick =   function(){
                if(confirm("是否确定删除？")){  //提示是否删除
                    //var row = this.parentNode.parentNode; //取到tr对象
                    //row.parentNode.removeChild(row);  //移除tr
                    $("#stuRecordTable").deleteRow(this.parentNode.parentNode.rowIndex);
                }
            }
            updates[i].onclick = function(){
                var operatorCell1 = this.parentNode.parentNode.getElementsByTagName("td")[0]; //取到要操作的td对象
                var operatorCell2 = this.parentNode.parentNode.getElementsByTagName("td")[1]; //取到要操作的td对象
                var operatorCell3 = this.parentNode.parentNode.getElementsByTagName("td")[2]; //取到要操作的td对象
                
				//1.修改按钮上有两个功能：修改，确定修改
                if(this.value == "修改"){
                    this.value = "确定";
                    operatorCell1.innerHTML ="<input value='"+operatorCell1.innerHTML+"'/>";//把内容变成文本框
                    operatorCell2.innerHTML ="<input value='"+operatorCell2.innerHTML+"'/>";//把内容变成文本框
                    operatorCell3.innerHTML ="<input value='"+operatorCell3.innerHTML+"'/>";//把内容变成文本框
                    //做修改操作
                }else{
				    if(confirm("是否确定修改？")){  //提示是否修改
					operatorCell1.innerHTML =operatorCell1.getElementsByTagName("input")[0].value;//把文本框变成内容
                    operatorCell2.innerHTML =operatorCell2.getElementsByTagName("input")[0].value;//把文本框变成内容
                    operatorCell3.innerHTML =operatorCell3.getElementsByTagName("input")[0].value;//把文本框变成内容
                    
					this.value = "修改";//做确定修改
                    }
                }
            }
        }
    }
    function addRow(){
        var rs = $("#stuRecordTable").rows;  //table取到所有的行
        var insertR = $("#stuRecordTable").insertRow(rs.length-1); //给表格添加一行(不包单元格)
        //insertR.innerHTML = rs[1].innerHTML;    
        var c1 = insertR.insertCell(0);       
        c1.innerHTML = "";
        var c2 = insertR.insertCell(1);
        c2.innerHTML = "";
		var c2 = insertR.insertCell(2);
        c2.innerHTML = "";
        var c3 = insertR.insertCell(3);
        c3.innerHTML ='<input type="button" value="删除" class="del"/> <input type="button" value="修改" class="update"/>';

        doOperator();

        var cs = rs[1].cells; //取到当前行的所有单元格
        //alert(cs[1].innerHTML);
    }