// Configurational Approach Norm

CANorm = [[["器質性腦損傷"],[4,6,9,10,12,13,14,16,26],[8.5,7,8,10,10,10,10,7,1],[2,1,2,2,2,2,2,2,1],[10,7]],
[["思覺失調症"],[1,2,3,6,8,10,11,12,13,15],[10,10,10,7.75,10,7,7,7,7,7],[2,2,1,1,1,1,2,1,1,2],[7,4]],
[["單極性憂鬱症"],[1,7,8,9,18],[4,10,10,10,1],[2,1,2,1,2],[6,4]],
[["精神官能症"],[1,7,8,9,18,19,23,25,26],[4,7,7,6,1,1,1,1,1],[2,2,1,2,2,2,2,1,1],[8,4]],
[["智能障礙"],[1,4,6,10,13,14,18,21],[7,4,10,10,10,5.5,1,1],[2,1,2,2,2,2,2,2],[8,5]],
[["青少年情緒困擾"],[1,2,3,6,9,11,14],[4,5,10,7.75,6,7,5.5],[2,1,2,2,2,2,2],[9,7]]];




function submitB(){

//get input
	var count = 0;
	var PPS_factors = [];
	var OTH_factors = [];
	var PPS_TotalScore = 0;
	for(let i=1; i<18; i++){
		var item = document.getElementsByName("PPS_"+i);
		for(let j=0; j<item.length; j++){
			if(item[j].checked){
				PPS_factors.push(item[j].value);
				PPS_TotalScore += Number(item[j].value);
				break;
			}
		}
	}
	for(let i=1; i<10; i++){
		var item = document.getElementsByName("OthFac_"+i);
		if(item[0].checked){
			OTH_factors.push(2);
		}else{
			OTH_factors.push(0);
		}
	}


// 測試文字
//	var testText1 = document.getElementById('testText');
//	testText1.innerHTML = OTH_factors.join();

// Psychopathology Scale 總分
	document.getElementById("PsychopathologyScaleScore").innerHTML = "&nbsp" + PPS_TotalScore;

// Psychopathology Scale 常模組別比較
	var PPS_Norm = [[32.8, 53, 61.7, 66.2, 78.3, 97.1, 101.1], [4.9, 9.5, 8.7, 6.4, 11.8, 12.1, 14.5]];
	var PPS_NormName = ["一般人組", "門診精神官能症組", "住院精神官能症組", "單極憂鬱症組", "門診思覺失調症組", "慢性思覺失調症組", "器質性腦損傷組"];
	var ptGroup = [];
	var minDiff = PPS_TotalScore;
	for(let i=0; i<7; i++){
		if(Math.abs(PPS_TotalScore - PPS_Norm[0][i]) < minDiff){
			ptGroup = [PPS_NormName[i], PPS_Norm[0][i], PPS_Norm[1][i]];
			minDiff = PPS_TotalScore - PPS_Norm[0][i];
		}
	}
	document.getElementById("NormCompare").innerHTML = "&nbsp個案較接近" + ptGroup[0] + "(平均數: " + ptGroup[1] + ", 標準差: " + ptGroup[2] + ")";



// Configurational Approach
	//show raw score
	var Raw_PPS_forshow = document.querySelectorAll('[data-label="原始分數"]');
	for(let i=1; i<18; i++) Raw_PPS_forshow[i].innerHTML = PPS_factors[i-1];
	count = 18;
	for(var i of [18, 19, 21, 23, 25, 26]){
		if(OTH_factors[i-18] == 2){
			Raw_PPS_forshow[count].innerHTML = "Y";
		}else{
			Raw_PPS_forshow[count].innerHTML = "N";
		}
		count += 1;
	}
	//compare configuration
	var SigGrp = [[],[]];
	var CAResult = [0,0,0,0,0,0];
	var ALL_factors = PPS_factors.concat(OTH_factors);
	for(let i=0; i<6; i++){
		GrpNow = CANorm[i];
		for(let j=0; j<GrpNow[1].length; j++){
			if(Number(ALL_factors[GrpNow[1][j]-1]) >= GrpNow[2][j]){
				CAResult[i] += GrpNow[3][j];
				var forBacGro = document.querySelectorAll('[data-cell="c'+ (i+1) +'_'+ GrpNow[1][j] +'"]');
				forBacGro[0].style = "background-color: #FFE4CA";
				forBacGro[1].style = "background-color: #FFE4CA";
			}
		}
		document.getElementById("WeiGrp"+(i+1)).innerHTML = CAResult[i];
		if(CAResult[i] >= GrpNow[4][0]){
			document.querySelectorAll('[data-cell="cut_score"]')[i].style = "background-color: #FFE4CA";
			SigGrp[0].push(GrpNow[0][0]);
		}else if(CAResult[i] >= GrpNow[4][1]){
			document.querySelectorAll('[data-cell="margin_score"]')[i].style = "background-color: #FFE4CA";
			SigGrp[1].push(GrpNow[0][0]);
		}
	}
	// description
	var CADescrib = document.getElementById("CADescrib");
	CADescrib.innerHTML = "<br>組型分析結果顯示:<br>個案於 " + SigGrp[0].join(", ") + " 組別達到切截分數" + "<br>表示其作畫品質表現與此類病人之表現非常相近" + "<br><br>另，其於 " + SigGrp[1].join(", ") + " 組別達邊緣分數，但尚未達切截分數";
}



function test1(){
	var RawScore = [1,1,1,0,3,1,2,1,3,3,1,3,0,0,3,3,4]
	var RawScoreOth = [0,0,1,1,0,0,0,1,1]

	for(let i=1; i<18; i++){
		var item = document.getElementsByName("PPS_"+i);
		item[RawScore[i-1]].checked = true;
	}

	for(let i=1; i<10; i++){
		var item = document.getElementsByName("OthFac_"+i);
		item[RawScoreOth[i-1]].checked = true;
	}
}