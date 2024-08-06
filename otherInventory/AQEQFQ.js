function SubmitBtn(){

// All Calculator
	var AQScores = [0,0,0,0,0,0];
	var EQScore = 0;
	var FQScore = 0;

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
		}else{
			if(AQRaw[i] > 1) {
				AQScores[0] += 1;
				AQScores[AQ_DimenItem[i]+1] += 1;
			}
		}
	}

	var AQScoreText = document.getElementsByName("AQScore");
	for(let i=0; i<6; i++) AQScoreText[i].innerHTML = AQScores[i];



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



// FQ
	if(document.getElementById("Sex").value == "male"){
		document.getElementById("FQ_male").style.display = "block";
		document.getElementById("FQ_female").style.display = "none";
		var FQScoreText = document.getElementById("FQScore_male");
	}else{
		document.getElementById("FQ_female").style.display = "block";
		document.getElementById("FQ_male").style.display = "none";
		var FQScoreText = document.getElementById("FQScore_female");
	}
	for(let i=0; i<33; i++){
		var ItemNow = document.getElementsByName('FQ'+(i+1));
		for(let j=0; j<ItemNow.length; j++) if(ItemNow[j].checked) FQRaw.push(j);
		FQScore += FQ_Score_Dist[i][FQRaw[i]];
	}

	var FQ34_num = document.getElementsByName("FQ34");
	if(FQ34_num[2].value == 1 | FQ34_num[4].value == 1) FQScore += 5;




	FQScoreText.innerHTML = FQScore;
}