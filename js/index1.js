$(document).ready(function () {
var array =Array();
//验证手机号
$(".username").blur(function () {
   var phone=$(this).val();
    // var phone = jQuery("#phone").val();
    var flag = false;
    var message = "";
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if(phone == ''){
        message = "手机号码不能为空！";
        $(this).focus();
        return false;
    }else if(phone.length !=11){
        message = "请输入有效的手机号码！";
        $(this).focus();
        return false;
    }else if(!myreg.test(phone)){
        message = "请输入有效的手机号码！";
        $(this).focus();
        return false;
    }else{
        flag = true;
    }
    if(!flag){
        //提示错误效果
        //jQuery("#phoneDiv").removeClass().addClass("ui-form-item has-error");
        //jQuery("#phoneP").html("");
        //jQuery("#phoneP").html("<i class=\"icon-error ui-margin-right10\"> <\/i>"+message);
        //jQuery("#phone").focus();
        console.log(flag);
    }else{
        array.push(phone);
        console.log("aaaaadddddd");
        //提示正确效果
        //jQuery("#phoneDiv").removeClass().addClass("ui-form-item has-success");
        //jQuery("#phoneP").html("");
        //jQuery("#phoneP").html("<i class=\"icon-success ui-margin-right10\"> <\/i>该手机号码可用");
    }
    // return flag;
    console.log(phone);
});
// 判断密码是否是6位
$(".password").blur(function () {
    var password=$(this).val();
    var ival = parseInt(password);//如果变量val是字符类型的数则转换为int类型 如果不是则ival为NaN
    // console.log(typeof(ival));
    var reg = new RegExp(/^\d{6}$/);     //工作密码必须是6位数字
    if(!reg.test(password)) {
        $(this).focus();
        // alert("工作密码必须为8位数字！");
        return false;
    }else {
        array.push(password);
    }
});
//点击登录按钮判断是否跳转
    $(".landing").click(function () {
        console.log(array.length);
        if(array.length==2){
            location.href="home.html";
        }else {
            console.log("请输入手机号和密码!");
        }
    });
$(".factory_title").on("click","a",function () {
   // $(".factory_body").slideToggle(2000);
    $(this).parents(".factory").find(".factory_body").slideToggle("slow");
    if($(this).text()=="收起"){
        $(this).text("展开");
        console.log("aaa");
    }else {
        console.log("bbb");
        $(this).text("收起");
    }
});
});
//验证手机号是否存在
function checkPhoneIsExist(){
    var phone = jQuery(".username").val();
    var flag = true;
    jQuery.ajax(
        { url: "checkPhone?t=" + (new Date()).getTime(),
            data:{phone:phone},
            dataType:"json",
            type:"GET",
            async:false,
            success:function(data) {
                var status = data.status;
                if(status == "0"){
                    flag = false;
                }
            }
        });
    return flag;
}