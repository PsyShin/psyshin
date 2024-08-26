var rawToScore = [0,0.5,1,2,3];

function CDRCal(raw6Cat){
	var CDRoutp = raw6Cat[0];

	var ScoreDist = [0,0,0,0,0];
	var LR_M = [0,0];
	for(let i=1; i<6; i++) {
		ScoreDist[rawToScore.indexOf(raw6Cat[i])] += 1;
		if(raw6Cat[i] > raw6Cat[0]) {LR_M[1] += 1;} else if(raw6Cat[i] < raw6Cat[0]) {LR_M[0] += 1;}
	}

	// exception1. When M = 0.5, CDR = 1 if at least three of the other categories are scored 1 or greater. 
	// exception2. If M = 0.5, CDR cannot be 0; it can only be 0.5 or 1.
	if(raw6Cat[0] == 0.5){
		if(LR_M[1] >= 3){
			CDRoutp = 1;
			return [CDRoutp, "<br>M = 0.5 時，CDR 只能是 0.5 或 1。<br>若 ≥ 3 個次類別 ≥ 1 分，則 CDR = 1；否則 CDR 為 0.5。"];
		}else{
			CDRoutp = 0.5;
			return [CDRoutp, "<br>M = 0.5 時，CDR 只能是 0.5 或 1。<br>若 ≥ 3 個次類別 ≥ 1 分，則 CDR = 1；否則 CDR 為 0.5。"];
		}
	}
	// exception3. If M = 0, CDR = 0, unless there is impairment (0.5 or greater) in two or more secondary categories, in which case CDR = 0.5.
	if(raw6Cat[0] == 0){
		if(LR_M[1] >= 2){
			CDRoutp = 0.5;
			return [CDRoutp, "<br>M = 0 時，CDR = 0。<br>但當 ≥ 2 個次類別 ≥ 0.5 分時，CDR = 0.5。"];
		}else{
			CDRoutp = 0;
			return [CDRoutp, "<br>M = 0 時，CDR = 0。<br>但當 ≥ 2 個次類別 ≥ 0.5 分時，CDR = 0.5。"];
		}
	}


	// Step1. CDR = M if at least three secondary categories are given the same score as memory.
	if(ScoreDist[rawToScore.indexOf(raw6Cat[0])] >= 3) return [CDRoutp, "<br>若 ≥ 3 個次類別與 M 同分，則 CDR = M。"];

	// Step3. when three secondary categories are scored on one side of M and two secondary categories are scored on the other side of M, CDR = M
	if((LR_M[0] == 3 & LR_M[1] == 2) | (LR_M[0] == 2 & LR_M[1] == 3)) return [CDRoutp, "<br>當 3 個次類別得分於 M 的一側，且 2 個次類別得分於 M 的另一側，則 CDR = M。"];

	// Step ties. With ties in the secondary categories on one side of M, choose the tied scores closest to M for CDR
	if(ScoreDist.filter(x => x == 2).length == 2 & (LR_M[0] >= 4 | LR_M[1] >= 4)){
		if(ScoreDist[(rawToScore.indexOf(raw6Cat[0]) + 1)] == 2){
			CDRoutp = rawToScore[rawToScore.indexOf(raw6Cat[0]) + 1];
			return [CDRoutp, "<br>若次類別有兩兩同分 (tie) 且有兩組同分組皆出現於 M 的一側，則 CDR 為最接近 M 的同分組分數。"];
		}
		if(ScoreDist[(rawToScore.indexOf(raw6Cat[0]) - 1)] == 2){
			CDRoutp = rawToScore[rawToScore.indexOf(raw6Cat[0]) - 1];
			return [CDRoutp, "<br>若次類別有兩兩同分 (tie) 且有兩組同分組皆出現於 M 的一側，則 CDR 為最接近 M 的同分組分數。"];
		}
		if(ScoreDist[(rawToScore.indexOf(raw6Cat[0]) + 2)] == 2){
			CDRoutp = rawToScore[rawToScore.indexOf(raw6Cat[0]) + 2];
			return [CDRoutp, "<br>若次類別有兩兩同分 (tie) 且有兩組同分組皆出現於 M 的一側，則 CDR 為最接近 M 的同分組分數。"];
		}
		if(ScoreDist[(rawToScore.indexOf(raw6Cat[0]) - 2)] == 2){
			CDRoutp = rawToScore[rawToScore.indexOf(raw6Cat[0]) - 2];
			return [CDRoutp, "<br>若次類別有兩兩同分 (tie) 且有兩組同分組皆出現於 M 的一側，則 CDR 為最接近 M 的同分組分數。"];
		}
	}

	// Step2. Whenever three or more secondary categories are given a score greater or less than the memory score, CDR = score of majority of secondary categories on whichever side of M has the greater number of secondary categories
	// exception. When M = 1 or greater, CDR cannot be 0; in this circumstance, CDR = 0.5 when the majority of secondary categories are 0
	if(LR_M[0] >= 3 | LR_M[1] >= 3){
		CDRoutp = rawToScore[ScoreDist.indexOf(Math.max.apply(null, ScoreDist))];
		if(CDRoutp == 0 & raw6Cat[0] >= 1){
			CDRoutp = 0.5;
			return [CDRoutp, "<br>當 ≥ 3 個次類別分數高於 (或低於) M，CDR 為較多次類別那側中，分數出現最多遍的分數。<br>並且若 M ≥ 1，CDR 不能為 0，故當 M ≥ 1 且多數次類別為 0 時，CDR = 0.5。"];
		}else{
			return [CDRoutp, "<br>當 ≥ 3 個次類別分數高於 (或低於) M，CDR 為較多次類別那側中，分數出現最多遍的分數。"];
		}
	}

	// Step. When only one or two secondary categories are given the same score as M, CDR = M as long as no more than two secondary categories ure on either side of M
	if(ScoreDist[rawToScore.indexOf(raw6Cat[0])] == 1 | ScoreDist[rawToScore.indexOf(raw6Cat[0])] == 2){
		if(Math.max.apply(null, ScoreDist) <= 2){
			CDRoutp = raw6Cat[0];
			return [CDRoutp, "<br>當僅 1 或 2 個次類別與 M 同分，且 M 的兩側皆未出現超過 2 個次類別，則 CDR = M。"];
		}
	}

	return ScoreDist + LR_M;
}

function SubmitBtn(){
	// get rawScore
	var CDR6Cate = [];
	var ShowTable = document.getElementsByName("Cate6");
	for(let i=0; i<6; i++) for(let j=1; j<6; j++) if(ShowTable[i].cells[j]) ShowTable[i].cells[j].style.backgroundColor = "rgba(255,255,255,0)";
	document.getElementById("CA2").style.backgroundColor = "rgba(255,255,255,0)";
	document.getElementById("CA2").style.backgroundColor = "rgba(255,255,255,0)";
	// get raw data
	for(let i=1; i<7; i++) for(let j=0; j<5; j++) if(document.getElementsByName("CDR"+i)[j].checked) CDR6Cate.push(j);
	// show table
	for(let i=0; i<6; i++) {
		if(i == 3 & CDR6Cate[i] >= 3){
			if(CDR6Cate[i] == 3) document.getElementById("CA2").style.backgroundColor = "#E0E0E0";
			if(CDR6Cate[i] == 4) document.getElementById("CA3").style.backgroundColor = "#E0E0E0";
			ShowTable[i].cells[4].style.backgroundColor = "#E0E0E0";
			continue;
		}
		if(i == 5){
			if(CDR6Cate[i] == 0) {
				ShowTable[i].cells[1].style.backgroundColor = "#E0E0E0";
			}else{
				ShowTable[i].cells[CDR6Cate[i]].style.backgroundColor = "#E0E0E0";
			}
			continue;
		}
		ShowTable[i].cells[CDR6Cate[i]+1].style.backgroundColor = "#E0E0E0";
	}
	// transform to score
	for(let i=0; i<6; i++) CDR6Cate[i] = rawToScore[CDR6Cate[i]];

	// calculator
	// outp
	OutpText = ["CDR 總分: ", "判定標準: "]
	for(let i=0; i<2; i++) document.getElementsByName("ScoreOutp")[i].innerHTML = OutpText[i] + "<strong><u>" + CDRCal(CDR6Cate)[i] + "</strong></u>";
}

function PrintBtn(){
	window.print();
}


