/*
* @Author: Marte
* @Date:   2018-06-14 15:33:24
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-26 17:36:32
*/
'use strict';
function IsNull(){
    var cname = document.getElementById('username');
    var sname = document.getElementById('CheckName');
    
    /*判断中文正则表达式*/
    /*var regname=/^[\u0391-\uFFE5]+$/;*/

    if(cname.value.length==0){

        sname.className="chkRed";
        sname.innerHTML="对不起，用户名不能为空!";//请将“文本框”改成你需要验证的属性名称!
        return 1;

    }
    else{

       /* if(!cname.value.match(regname)){
            sname.className="chkRed";
            sname.innerHTML="对不起，输入非中文!";
        }*/
        /*else{*/
        sname.className="chkGrn";
        sname.innerHTML="";
        return 0;
        /*}*/
    }
}

function ChkPwd(){
    var cpwd = document.getElementById('password');
    var tpwd = document.getElementById('CheckPwd');
    var regpwd=/^[a-zA-Z]\w{5,17}$/;

    if(cpwd.value.length==0){

        tpwd.className="chkRed";
        tpwd.innerHTML="对不起，密码不能为空!";//请将“文本框”改成你需要验证的属性名称!
    }
    else{

        if(!cpwd.value.match(regpwd)){
            tpwd.className="chkRed";
            tpwd.innerHTML="对不起，以字母开头，长度在6-18之间，只能包含字符、数字和下划线!";
        }
        else{
            tpwd.className="chkGrn";
            tpwd.innerHTML="";
        }
    }
}

function ChkRepwd(){
    var fpwd = document.getElementById('password');
    var spwd = document.getElementById('Conf_password');
    var trpwd = document.getElementById('CheckRpwd')

    if(fpwd.value!=spwd.value){
        trpwd.className="chkRed";
        trpwd.innerHTML="两次密码输入不一致!";
    }
    else{
        trpwd.innerHTML="";
    }
    // On load
}

function ChkPhone(){
    var fphe = document.getElementById('phoneNumber');
    var sphe = document.getElementById('CheckPhone');
    var regphe = /^1[3|4|5|7|8][0-9]{9}$/;

    if (fphe.value.length==0){
        sphe.className="chkRed";
        sphe.innerHTML="对不起，手机号不能为空!";
    }

    else{
         if (!fphe.value.match(regphe)){
            sphe.className="chkRed";
            sphe.innerHTML="手机号不符合规范";
        }
        else{
            sphe.innerHTML="";
        }
    }
}

function ChkEmail() {
    var femail = document.getElementById('email');
    var semail = document.getElementById('CheckEmail');
    var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

    if(femail.value.length==0){
        semail.innerHTML = "对不起，邮箱不能为空!";
    }
    else{
        if(!femail.value.match(regEmail)){
            semail.innerHTML = "邮箱不符合规范";
        }
        else{
            semail.innerHTML = "";
        }
    }
}