function SubmitBtn(){
// All Calculator
	var BDIScores = [0,0];
	var BDI_Cog = [1,2,3,5,6,7,8,9,14];

	var BAIScores = [0,0,0,0,0];
	var BAI_Categ = [1,4,1,2,2,1,3,1,2,2,3,1,1,2,3,3,2,4,1,4,4];

// BDI
	for(let i=0; i<21; i++) for(let j=0; j<4; j++) if(document.getElementsByName(("BDI"+(i+1)))[j].checked) {
		BDIScores[0] += j;
		if(BDI_Cog.includes(i+1)) BDIScores[1] += j;
	}
	document.getElementsByName("BDIScore")[0].innerHTML = BDIScores[0];
	document.getElementsByName("BDIScore")[1].innerHTML = BDIScores[1];
	document.getElementsByName("BDIScore")[2].innerHTML = BDIScores[0] - BDIScores[1];

// BAI
	for(let i=0; i<21; i++) for(let j=0; j<4; j++) if(document.getElementsByName(("BAI"+(i+1)))[j].checked) {
		BAIScores[0] += j;
		BAIScores[BAI_Categ[i]] += j;
	}
	for(let i=0; i<5; i++) document.getElementsByName("BAIScore")[i].innerHTML = BAIScores[i];
}


