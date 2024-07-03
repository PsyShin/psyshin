


function submitB(){

//get input
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



	var testText1 = document.getElementById('testText');
	testText1.innerHTML = OTH_factors.join();

	//
	document.getElementById("PsychopathologyScaleScore").innerHTML = "&nbsp" + PPS_TotalScore;

	//
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