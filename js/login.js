var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}


var zh=document.getElementById('zh');
var mm=document.getElementById('mm');
function login(){
    if(zh.value==""||mm.value==""){
        alert("账号或密码不能为空");
        return false;
    }
    else if(zh.value!=="zx" && mm.value!=="pity"){    
        alert("账号或密码错误(可以选择游客登录)");
        return false;
    }
    return true; // 添加明确的成功返回值
}

var con=document.getElementById('con')
function loadoff(){
    con.style.display="none";
}
function loadon(){
    con.style.display="flex";
}
window.onload=function(){
    loadon();
    setTimeout(loadoff,3000);
}

