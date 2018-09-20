//自己发送消息
var SELF_MESSAGE=1;
//他人发送消息
var ONTHERS_MESSAGE=0;
//选择发送的语言(默认为自己发送)
var msgType=SELF_MESSAGE;
//图片网址（默认为张勇图片网址）
var imgUrl="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3315902465,996524985&fm=173&app=25&f=JPG?w=600&h=897&s=28D1A94CE4CA115551E0E09203005093";
//发言人名字（默认为张勇）
var speakman="张勇";
//存储输入过的网址列表
var imgUrlList=["https://image.wanda.cn/uploadfile/2013/0914/20130914090913657.jpg",
				"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3315902465,996524985&fm=173&app=25&f=JPG?w=600&h=897&s=28D1A94CE4CA115551E0E09203005093"
];
//存储输入过的名字列表
var speakmanList=["王健林","张勇"];

var name = "#floatMenu";
var menuYloc = null;

//初始化函数
$(function(){
	//监听键盘按键
	$(document).keypress(function(e) {
		//监听Enter键
	    if(e.which == 13) {
	    		//存储输入过的图片网址
	    		imgUrlList.push($("#imgUrl").val());
	    		//存储输入过的名字
	    		speakmanList.push($("#speakman").val());
	    		//获取值
	    		var message=$("#message").val();
	    		//根据发送类型显示数据
	    		if(msgType==ONTHERS_MESSAGE){
	    		//将对方的话语显示出来
	    			$("#content").append("<div class=\"row\"><div class=\"col-sm-2 alert alert-primary\"><img width=\"100px\" height=\"100px\" class=\"rounded-circle text-centered mx-auto d-block\"  src=\""+imgUrl+"\"> <h4 class=\"text-center\">"+speakman+"</h4></div><div class=\"col-sm-10 my-auto\" ><div class=\"d-block\" ><span class=\"text-left  alert alert-secondary\" style=\"font-size:80px\"> "+message+"</span></div></div></div>");
	    		}else if(msgType==SELF_MESSAGE){
	    		//将自己的对话呈现出来
		        	$("#content").append("<div class=\"row\"><div class=\"col-sm-10 my-auto\" ><div class=\"d-block text-right\" ><span class=\"text-right  alert alert-secondary\" style=\"font-size:80px\"> "+message+"</span></div> </div> <div class=\"col-sm-2 alert alert-primary\"><img width=\"100px\" height=\"100px\" class=\"rounded-circle text-centered mx-auto d-block\"  src=\""+imgUrl+"\"> <h4 class=\"text-center\">"+speakman+"</h4></div></div>");
		        }
		        $("#message").val("");
		        //将网页滚动到底部
		        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
		    }
		});

	//监听角色选择下拉框
		//监听发送者点击事件
		jQuery("#receiver").click(function(e){
			//根据点击更改msgType和下拉框名称
			msgType=ONTHERS_MESSAGE;
			$("#choic").html("接收者");
			e.preventDefault();
		});
		//监听接收者点击事件
		jQuery("#sender").click(function(e){
			//根据点击更改msgType和下拉框名称
			msgType=SELF_MESSAGE;
			$("#choic").html("发送者");
			e.preventDefault();
		});

	//监听图片网址输入框
	$("#imgUrl").on("change paste keyup", function() {
		//通过正则表达式判断是不是网址
	   	imgUrl=$(this).val(); 
	   	//移除原本的节点
	   	$("#imgUrl-choice").empty();
	   	//根据输入搜索输入历史来跳出选择节点
	   	imgUrlList.forEach(function(element){
	   		if(element.indexOf($("#imgUrl").val()) != -1){
			    $("#imgUrl-choice").append("<a class=\"dropdown-item\" >"+element+"</a>")
			}
	   	});
	   	//监听选择图片下拉框点击后将值填入下拉框（删除节点后需要重新增加监听）
		 $("#imgUrl-choice > a").click(function(){
		      imgUrl=$(this).text();
		      $("#imgUrl").val($(this).text());
	   });
	});

	//监听发言人输入框
	$("#speakman").on("change paste keyup", function() {
		//通过正则表达式判断是不是名字
	   	speakman=$(this).val();
	   	//移除原本的节点
	   	$("#speakman-choice").empty();
	   	//根据输入搜索输入历史来跳出选择节点
	   	speakmanList.forEach(function(element){
	   		if(element.indexOf($("#speakman").val()) != -1){
			    $("#speakman-choice").append("<a class=\"dropdown-item\" >"+element+"</a>")
			}
	   	});
	   	//监听选择名字下拉框点击后将值填入下拉框（删除节点后需要重新增加监听）
		$("#speakman-choice > a").click(function(){
		       speakman=$(this).text();
		      $("#speakman").val($(this).text());
		   });

	});


 

    menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
    $(window).scroll(function () { 
        var offset = menuYloc+$(document).scrollTop()+"px";
        $(name).animate({top:offset},{duration:500,queue:false});
    });

});