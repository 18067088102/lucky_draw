var allName = new Array();
var allPhone = new Array();
console.info(localStorage.getItem("aaa"))

var nametxt = $('.name');
var allPhonetxt = $('.phone');
var pcount = allName.length-1;//参加人数
var runing = true;
var td = 10;//内定中奖,从最小奖开始，共10个名额
var num = 0;
var t;
//开始停止
function start() {
	if (runing) {
		runing = false;
		$('#btntxt').removeClass('start').addClass('stop');
		$('#btntxt').html('停止');
		startNum()
	} else {
		runing = true;
		$('#btntxt').removeClass('stop').addClass('start');
		$('#btntxt').html('开始');
		stop();
		zd();//内定中奖
	}
}
//循环参加名单
function startNum() {
	num = Math.floor(Math.random() * pcount);
	nametxt.html(allName[num]);
	allPhonetxt.html(allPhone[num]);
	t = setTimeout(startNum, 0);
}
//停止跳动
function stop() {
	pcount = allName.length-1;
	clearInterval(t);
	t = 0;
}

function zd() {
	if(td <= 3){
		if (td == 1) {
			nametxt.html('周一一');
			allPhonetxt.html('15112345678');
			$('.list').prepend("<p>"+td+' '+"周一一 -- 15112345678</p>");
		}
		if (td == 2) {
			nametxt.html('李二二');
			allPhonetxt.html('151000000000');
			$('.list').prepend("<p>"+td+' '+"李二二 -- 151000000000</p>");
		}
		if (td == 3) {
			nametxt.html('张三三');
			allPhonetxt.html('1511111111');
			$('.list').prepend("<p>"+td+' '+"张三三 -- 1511111111</p>");
		}
	}else if(td > 3){
		//打印中奖者名单
		$('.list').prepend("<p>"+td+' '+allName[num]+" -- "+allPhone[num]+"</p>");
		if(pcount <= 0){
			alert("投票结束");
		}
		//将已中奖者从数组中"删除",防止二次中奖
		allName.splice($.inArray(allName[num], allName), 1);
		allPhone.splice($.inArray(allPhone[num], allPhone), 1);
	}
	td = td - 1;
}
