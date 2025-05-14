function SubmitBtn(){

// All Calculator
	var AQScores = [0,0,0,0,0,0];
	var EQScore = 0;
	var FQScore = 0;
	var AQCScores = [0,0,0,0,0,0];

	var AQRaw = [];
	var EQRaw = [];
	var FQRaw = [];

	var AQ_PosItem = [2,4,5,6,7,9,12,13,16,18,19,20,21,22,23,26,33,35,39,41,42,43,45,46];
	var AQ_DimenItem = [0,1,4,1,2,2,3,4,2,1,0,2,0,4,0,1,3,3,2,4,4,0,2,4,1,3,3,2,2,2,3,1,3,1,3,0,1,3,3,4,4,4,1,0,0,1,0,0,2,4];
	var EQ_PosItem = [1,6,19,22,25,26,35,36,37,38,41,42,43,44,52,54,55,57,58,59,60];
	var EQ_NegItem = [4,8,10,11,12,14,15,18,21,27,28,29,32,34,39,46,48,49,50];
	var FQ_Score_Dist = [[5,2,0],[5,0],[0,5],[5,0],[0,5],[0,5],[0,5],[0,0],[5,0],[5,0],[0,0],[0,5],[5,0],[5,3,1,0],[0,1,3,5],[5,4,2,1,0],[0,0,0,0,0],[5,3,1,0],[0,0,0,0],[0,1,2,4,5],[0,0,0,0,0],[5,4,2,1,0],[5,4,2,1,0],[0,0,0,0,0],[0,1,3,5],[0,1,3,5],[0,1,2,4,5],[0,5,2],[0,1,2,3,4,5,5],[5,0,2],[5,4,2,1,0],[0,1,2,3,4,5],[0,1,2,3,3,4,5,5]];

// AQ
	for(let i=0; i<50; i++){
		var ItemNow = document.getElementsByName('AQ'+(i+1));
		for(let j=0; j<4; j++) if(ItemNow[j].checked) AQRaw.push(j);
	}

	for(let i=0; i<50; i++){
		if(AQ_PosItem.includes((i+1))){
			if(AQRaw[i] < 2) {
				AQScores[0] += 1;
				AQScores[AQ_DimenItem[i]+1] += 1;
			}
			AQCScores[0] += (3 - AQRaw[i]);
			AQCScores[AQ_DimenItem[i]+1] += (3 - AQRaw[i]);
		}else{
			if(AQRaw[i] > 1) {
				AQScores[0] += 1;
				AQScores[AQ_DimenItem[i]+1] += 1;
			}
			AQCScores[0] += AQRaw[i];
			AQCScores[AQ_DimenItem[i]+1] += AQRaw[i];
		}
	}

	var AQScoreText = document.getElementsByName("AQScore");
	for(let i=0; i<6; i++) AQScoreText[i].innerHTML = AQScores[i];

	var AQCScoreText = document.getElementsByName("AQCScore");
	for(let i=0; i<6; i++) AQCScoreText[i].innerHTML = AQCScores[i];

	// interpretation
	var ControlGrp = [[17.57,5.84],[2.4,2.16],[4.41,1.8],[5.7,2.15],[2.39,1.91],[2.67,1.61]];
	var AQ_Dimen_Interp = [["總分","社交技巧","注意力轉換","對細節過度注意","溝通","想像力"],[]];
	var AQIntText = document.getElementById("AQInterpret");
	if(AQScores[0] > 30){AQIntText.innerHTML = "<strong>量表總分: </strong>個案之自閉症類群量表得分 (AQ = "+ AQScores[0] +") 超過切截分數 (> 30)，顯示其有明顯亞斯伯格症特徵。"}else{AQIntText.innerHTML = "<strong>量表總分: </strong>個案之自閉症類群量表得分 (AQ = "+ AQScores[0] +") 未達切截分數 (≤ 30)，顯示其未呈現明顯亞斯伯格症特徵。"}
	for(let i=0; i<6; i++){
		if(AQScores[i] > ControlGrp[i][0] + 2*ControlGrp[i][1]){
			AQ_Dimen_Interp[1].push(2);
		}else if(AQScores[i] > ControlGrp[i][0] + ControlGrp[i][1]){
			AQ_Dimen_Interp[1].push(1);
		}else{AQ_Dimen_Interp[1].push(0);}
	}

	AQIntText.innerHTML += "<br><strong>向度得分: </strong>"
	if(AQScores[0] <= 30 & (AQ_Dimen_Interp[1].includes(1) | AQ_Dimen_Interp[1].includes(2))){
		AQIntText.innerHTML += "雖總分未達切截分數，但"
	}

	if(AQ_Dimen_Interp[1].includes(2)){
		var AQ_Dimen_Ser = [];
		for(i=1; i<6; i++) if(AQ_Dimen_Interp[1][i] == 2) AQ_Dimen_Ser.push(AQ_Dimen_Interp[0][i]);
		if(AQ_Dimen_Ser.length == 1) {
			AQIntText.innerHTML += "個案呈現有明顯的" + AQ_Dimen_Ser + "的問題 (其於此向度得分高於控制組2個標準差)"
		}else{AQIntText.innerHTML += "個案呈現有明顯的" + AQ_Dimen_Ser.join("、") + "等問題 (其於此些向度得分高於控制組2個標準差)"}

		if(AQ_Dimen_Interp[1].includes(1)){
			var AQ_Dimen_Mid = [];
			for(i=1; i<6; i++) if(AQ_Dimen_Interp[1][i] == 1) AQ_Dimen_Mid.push(AQ_Dimen_Interp[0][i]);
			if(AQ_Dimen_Mid.length == 1) {
				AQIntText.innerHTML += "，另其疑似有" + AQ_Dimen_Mid + "的問題 (其於此向度得分高於控制組1個標準差)。";
			}else{AQIntText.innerHTML += "，另其疑似有" + AQ_Dimen_Mid.join("、") + "等問題 (其於此些向度得分高於控制組1個標準差)。";}
		}else{AQIntText.innerHTML += "。";}
	}else if(AQ_Dimen_Interp[1].includes(1)){
		var AQ_Dimen_Mid = [];
		for(i=1; i<6; i++) if(AQ_Dimen_Interp[1][i] == 1) AQ_Dimen_Mid.push(AQ_Dimen_Interp[0][i]);
		if(AQ_Dimen_Mid.length == 1) {
			AQIntText.innerHTML += "個案疑似有" + AQ_Dimen_Mid + "的問題 (其於此向度得分高於控制組1個標準差)。";
		}else{AQIntText.innerHTML += "個案疑似有" + AQ_Dimen_Mid.join("、") + "等問題 (其於此些向度得分高於控制組1個標準差)。";}
	}else{AQIntText.innerHTML += "無明顯發現。";}


	document.getElementById("AQ_PSText").innerHTML = "P.S. 切截分數及常模皆參考自 AQ 台灣常模 (見下方參考資料)";


// EQ
	for(let i=0; i<60; i++){
		var ItemNow = document.getElementsByName('EQ'+(i+1));
		for(let j=0; j<4; j++) if(ItemNow[j].checked) EQRaw.push(j);
	}

	for(let i=0; i<60; i++){
		if(EQ_PosItem.includes((i+1))){
			if(EQRaw[i] == 0) EQScore += 2;
			if(EQRaw[i] == 1) EQScore += 1; 
		}
		if(EQ_NegItem.includes((i+1))){
			if(EQRaw[i] == 3) EQScore += 2;
			if(EQRaw[i] == 2) EQScore += 1; 
		}
	}

	document.getElementById("EQScore").innerHTML = EQScore;

	if(EQScore <= 30) {
		document.getElementById("EQInterpret").innerHTML = "<strong>量表總分: </strong>個案之同理心量表得分 (EQ = "+ EQScore +") 已達切截分數 (≤ 30)，顯示其同理心能力明顯不佳。";
	}else{
		document.getElementById("EQInterpret").innerHTML = "<strong>量表總分: </strong>個案之同理心量表得分 (EQ = "+ EQScore +") 未達切截分數 (> 30)，顯示其同理心能力與控制組相比無明顯差異。";
	}

	document.getElementById("EQ_PSText").innerHTML = "P.S. 切截分數及常模皆參考自 EQ paper (見下方參考資料)";



// FQ
	if(document.getElementById("Sex").value == "male"){
		document.getElementById("FQ_male").style.display = "block";
		document.getElementById("FQ_female").style.display = "none";
		var FQScoreText = document.getElementById("FQScore_male");
		var FQ_cutoff = 54.6;
		var clnSex = "男性";
	}else{
		document.getElementById("FQ_female").style.display = "block";
		document.getElementById("FQ_male").style.display = "none";
		var FQScoreText = document.getElementById("FQScore_female");
		var FQ_cutoff = 73.9;
		var clnSex = "女性";
	}
	for(let i=0; i<33; i++){
		var ItemNow = document.getElementsByName('FQ'+(i+1));
		for(let j=0; j<ItemNow.length; j++) if(ItemNow[j].checked) FQRaw.push(j);
		FQScore += FQ_Score_Dist[i][FQRaw[i]];
	}

	var FQ34_num = document.getElementsByName("FQ34");
	if(FQ34_num[2].value == 1 | FQ34_num[4].value == 1) FQScore += 5;


	FQScoreText.innerHTML = FQScore;

	if(FQScore < FQ_cutoff) {
		document.getElementById("FQInterpret").innerHTML = "<strong>量表總分: </strong>個案之友誼量表得分 (FQ = "+ FQScore +") 已達切截分數 (< "+ FQ_cutoff +")，顯示其友誼人際關係品質不佳。";
	}else{
		document.getElementById("FQInterpret").innerHTML = "<strong>量表總分: </strong>個案之友誼量表得分 (FQ = "+ FQScore +") 未達切截分數 (≥ "+ FQ_cutoff +")，顯示其友誼人際關係品質與"+clnSex+"同儕間無明顯差異。";
	}

	document.getElementById("FQ_PSText").innerHTML = "P.S. 此處切截分數以低於"+clnSex+"常模1個標準差為之<br>P.S. 常模皆參考自 FQ paper (見下方參考資料)<br>P.S. 文獻亦有以 < 70 作為切截分數，此切截具 76.5% 之敏感度 & 72.4% 之特異度。";
}