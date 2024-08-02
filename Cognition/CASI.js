//norm
Age_Edu_Norm =
[[["教育程度0年", "年齡<80歲", "男性"],63,"63/64",0.94,0.8],
[["教育程度0年","年齡<80歲","女性"],49,"49/50",0.87,0.9],
[["教育程度0年","年齡≥80歲","男性"],46,"46/47",0.91,0.92],
[["教育程度0年","年齡≥80歲","女性"],46,"46/47",0.87,0.78],
[["教育程度1-5年","年齡<80歲"],67,"67/68",0.78,0.94],
[["教育程度1-5年","年齡≥80歲"],58,"58/59",0.86,0.93],
[["教育程度≥6年","年齡<80歲"],79,"79/80",0.89,0.92],
[["教育程度≥6年","年齡≥80歲"],81,"81/82",0.93,0.84]]

SubScale_Norm =
[[["LTM"],[9.9,0.5,9.4,8,9]],
[["STM"],[10.6,1.6,9,7.4]],
[["ATTEN"],[7.5,0.8,6.7,5.9]],
[["MENMA"],[8.3,1.7,6.6,4.9]],
[["ORIEN"],[17.3,1.4,15.9,14.6]],
[["ABSTR"],[9.6,1.6,8,6.4]],
[["LANG"],[9.5,1.1,8.4,7.3]],
[["DRAW"],[9.4,1.2,8.2,7]],
[["ANML"],[8.2,1.8,6.4,4.6]]]




function submitB(){
	var count = 0;

//get input
	var AllInfoText = document.getElementsByName("Info");
	var AllitemsText = document.getElementsByName("items");
	var AllSubScaleText = document.querySelectorAll('[data-label="SubScale"]');
	var Result = [["LTM","STM","ATTEN","MENMA","ORIEN","ABSTR","LANG","DRAW","ANML"],[]];
	var Calculator = [[1,2,3,4,5],[15,16,17,42,43,44,49],[7,32,33],[20,21,22,23,24,25],[0,9,10,11,12,13,18,19],[26,27,28,29,30,31],[34,38,45,46,47,41],[37],[14]];
	var Weight = [[1,1,1,1,1],[0.5,0.5,0.5,0.5,0.5,0.5,0.6],[1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1],[0.5,0.5,0.3,0.3,0.3,1],[1],[1]];
	var itemsRaw = [];
	var SubScale = [];
	var TotalScore = 0;
	for(let i=0; i<AllitemsText.length; i++) itemsRaw.push(AllitemsText[i].value);
	for(let i=0; i<9; i++){
		count = 0;
		for(let j=0; j<Calculator[i].length; j++) count += Number(itemsRaw[Calculator[i][j]])*Weight[i][j];
		SubScale.push(count);
		AllSubScaleText[i].innerHTML = SubScale[i];
		if(SubScale[i] < SubScale_Norm[i][1][2]) AllSubScaleText[i].style = "color: #FFFFFF; background-color: #EA7500";
		if(SubScale[i] < SubScale_Norm[i][1][3]) AllSubScaleText[i].style = "color: #FFFFFF; background-color: #642100";
		TotalScore += count;
	}
	AllSubScaleText[9].innerHTML = TotalScore;

//show all raw
	var AllitemsText2 = document.querySelectorAll('[data-label="items"]');
	var fill_order = [1,2,3,4,5,15,16,17,42,43,44,49,7,32,33,20,21,22,23,24,25,0,9,10,11,12,13,18,19,26,27,28,29,30,31,34,38,45,46,47,41];
	var itemsRawWei = [1,1,1,1,1,0.5,0.5,0.5,0.5,0.5,0.5,0.6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0.5,0.5,0.3,0.3,0.3,1]
	for(let i=0; i<fill_order.length; i++) AllitemsText2[i].innerHTML = itemsRaw[fill_order[i]];

//norm comparison
	var AllresultText = document.querySelectorAll('[data-label="result"]');
	var NormNum = null;
	if(AllInfoText[2].value == 0){
		if(AllInfoText[0].value < 80){
			if(AllInfoText[1].value == "male") {
				NormNum = 0;
			}else{
				NormNum = 1;
			}
		}else{
			if(AllInfoText[1].value == "male"){
				NormNum = 2;
			}else{
				NormNum = 3;
			}
		}
	}else if(AllInfoText[2].value <= 5){
		if(AllInfoText[0].value < 80){
			NormNum = 4;
		}else{
			NormNum = 5;
		}
	}else{
		if(AllInfoText[0].value < 80){
			NormNum = 6;
		}else{
			NormNum = 7;
		}
	}

	AllresultText[0].innerHTML = Age_Edu_Norm[NormNum][0].join(";&nbsp") + "<br>(切截分數&nbsp" + Age_Edu_Norm[NormNum][2] + ")";
	if(TotalScore > Age_Edu_Norm[NormNum][1]){
		AllresultText[1].innerHTML = "個案總分&nbsp" + TotalScore + "&nbsp<br>≥&nbsp切截分數&nbsp" + (Age_Edu_Norm[NormNum][1]+1);
		AllresultText[2].innerHTML = "CASI C-2.0 結果顯示，個案認知功能表現較接近<b><ins>非失智症組</ins></b>&nbsp<br>(切截分數之特異性及敏感性分別為&nbsp" + Age_Edu_Norm[NormNum][3] + ",&nbsp" + Age_Edu_Norm[NormNum][4] + ")";
	}else{
		AllresultText[1].innerHTML = "個案總分&nbsp" + TotalScore + "&nbsp<br>≤&nbsp切截分數&nbsp" + (Age_Edu_Norm[NormNum][1]);
		AllresultText[2].innerHTML = "CASI C-2.0 結果顯示，個案認知功能表現較接近<b><ins>失智症組</ins></b>&nbsp<br>(切截分數之特異性及敏感性分別為&nbsp" + Age_Edu_Norm[NormNum][3] + ",&nbsp" + Age_Edu_Norm[NormNum][4] + ")";
	}

//	test text
	var testText1 = document.getElementById('testText');
//	testText1.innerHTML = "hi";
//	testText1.innerHTML = itemsRaw[38];
}

function Reload(){
	document.location.reload();
}

function test1(){
}
