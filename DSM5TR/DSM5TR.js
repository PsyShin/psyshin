function ShowChild(childname){
	var ChildsCon = document.getElementsByClassName("Childs");
	for(let i=0; i<ChildsCon.length; i++) ChildsCon[i].style = "display: none;";
	document.getElementById(childname).style = "display: block;";
}

function ShowCriteria(Diagnosis){
	var AllDiags = document.getElementsByClassName("AllDiags");
	for(let i=0; i<AllDiags.length; i++) AllDiags[i].style = "display: none;";
	document.getElementById(Diagnosis).style = "display: block;";
	
	document.getElementById('blank25').style = "display:none;";
}

function ShowCriteriaPh(Diagnosis){
	var AllDiags = document.getElementsByClassName("AllDiags");
	for(let i=0; i<AllDiags.length; i++) AllDiags[i].style = "display: none;";
	document.getElementById(Diagnosis).style = "display: block;";
	document.getElementById('DSM5List').style = "display: none;";

	document.getElementById('blank25').style = "display: none;";
}

function OpenSubCri(SubCri){
	if(document.getElementById(SubCri).style.display == ''){
		document.getElementById(SubCri).style.display = 'block';
	}else{
		document.getElementById(SubCri).style.display = ''
	}
}



// for Phone
function DSM5Btn(){
	document.getElementById('DSM5List').style = "display: block;";
}