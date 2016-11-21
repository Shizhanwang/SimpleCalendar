window.onload = function(){
	var arrChinese = ['欢乐中国年',
		'我和韦博那些事',
		'"行行摄摄"爱上按快门',
		'赢在韦博·第三届课件马拉松颁奖',
		'RM 12 峰会',
		'一起做同学·新生欢迎会',
		'"Do It Yourself"',
		'毕业典礼',
		'"韦博之星"年度英语风采大赛',
		'我和僵尸有个约会',
		'第四届课件马拉松颁奖典礼',
		'小鹿嘉年华'];
	var arrEnglish = ['Chinese New Year', 'Web And I', 'Fall In Love With Camera', 'With In Web-The 3th Courseware Marathon Ceremony', '12-Submit', 'Welcome To Web', '', 'Graduation', '"Star Of Web"English Show', 'Date With Zombies', 'The 4th Courseware Marathon Ceremony', 'Deer Carnival'];
	
	var oDiv = document.querySelector("#txt");
	var oUL = document.querySelector("#box");
	var liArr = oUL.children;
	
	for(var i =0;i<liArr.length;i++){
		liArr[i].onclick = (function(num){
			return function(){
				for(var j = 0;j<liArr.length;j++){
					liArr[j].className = "";
				}
				this.className = "active";
				oDiv.querySelectorAll("h2")[0].innerHTML = num + 1 +"月活动" ;
				oDiv.querySelectorAll("p")[0].innerHTML = arrChinese[num];
				oDiv.querySelectorAll("p")[1].innerHTML = arrEnglish[num];
			}
		})(i);
	}
	
}
