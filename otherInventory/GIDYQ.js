function SubmitBtn(){
// All Calculator
	var GIDYQ_score = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
	var GIDYQ_catg = [0,0,1,1,0,0,0,0,0,0,1,3,1,1,1,0,1,1,1,2,2,2,3,0,0,0,0];
	var cat_score = [null,null,null,null];
	var cat_inum = [13,9,3,2];
	var missData = [0,0,0,0];

	for(let i=0; i<27; i++) {
		for(let j=0; j<5; j++) if(document.getElementsByName(("GIDYQ"+(i+1)))[j].checked) {
			if(i == 0 | i == 12 | i == 26) {
				GIDYQ_score[i] = 5-j;
				cat_score[GIDYQ_catg[i]] += 5-j;
			}else{
				GIDYQ_score[i] = j+1;
				cat_score[GIDYQ_catg[i]] += j+1;
			}
		}
		if(GIDYQ_score[i] == null) missData[GIDYQ_catg[i]] += 1;
	}

// get score
	var GIDYQ_rawText = document.getElementsByName("SNAP_raw");
	var SNAP_PRText = document.getElementsByName("SNAP_PR");

//	document.getElementById("test1").innerHTML = GIDYQ_score + "<br>" + missData + "<br>" + cat_score;

	var All_rawText = document.getElementsByName("All_raw");
	var All_meanText = document.getElementsByName("All_mean");

	for(let i=0; i<5; i++){
		if(i==0){
			All_rawText[i].innerHTML = cat_score[0] + cat_score[1] + cat_score[2] + cat_score[3];
			All_meanText[i].innerHTML = ((cat_score[0] + cat_score[1] + cat_score[2] + cat_score[3])/(27-missData[0] + missData[1] + missData[2] + missData[3])).toFixed(2);
		}else{
			All_rawText[i].innerHTML = cat_score[i-1];
			All_meanText[i].innerHTML = (cat_score[i-1]/(cat_inum[i-1] - missData[i-1])).toFixed(2);
		}
	}

}

function testBtn(){
	var test1 = [2,1,1,3,1,1,1,1,1,1,5,1,4,1,5,1,3,5,5,1,1,1,3,5,5,1,5];
	var test2 = [5,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,5];
	for(let i=0; i<27; i++) {
		document.getElementsByName(("GIDYQ"+(i+1)))[test2[i]-1].checked = "checked";
	}
}


function ReloadBtn(){
	document.location.reload();
}
