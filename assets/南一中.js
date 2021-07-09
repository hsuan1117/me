var result=[]
for(var i=0;i<3;i++){
	var e=$("body > div.outer-outer > div > div > div > div.mainbody > div > div > div > div > table > tbody > tr > td.col_02 > div > div.col_middle > div.cm_03 > div.cm_02 > div.cm_01").children().eq(0).find("table").find("td")
	var html=""
	for(var k=0;k<e.length;k++){
		if(k%3==0){
			//日期
			html+="時間"+$("body > div.outer-outer > div > div > div > div.mainbody > div > div > div > div > table > tbody > tr > td.col_02 > div > div.col_middle > div.cm_03 > div.cm_02 > div.cm_01").children().eq(0).find("table").find("td").eq(k).html()
		}else if(k%3==1){
			//內容
			html+=$("body > div.outer-outer > div > div > div > div.mainbody > div > div > div > div > table > tbody > tr > td.col_02 > div > div.col_middle > div.cm_03 > div.cm_02 > div.cm_01").children().eq(0).find("table").find("td").eq(k).find("a").html()
			
		}else if(k%3==2){
			//處室
			//var html=$("body > div.outer-outer > div > div > div > div.mainbody > div > div > div > div > table > tbody > tr > td.col_02 > div > div.col_middle > div.cm_03 > div.cm_02 > div.cm_01").children().eq(0).find("table").find("td").eq(k).html()
		}
		html+="<hr>"
		console.log(html)
	}
	console.log(html)
	result.push(html)
}