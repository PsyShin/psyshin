function ShowChild(childname){
	var ChildsCon = document.getElementsByClassName("Childs");
	for(let i=0; i<ChildsCon.length; i++) ChildsCon[i].style = "display: none;";
	document.getElementById(childname).style = "display: block;";
}


DiagDict = [];

function ShowCriteria(Diagnosis){
	var AllDiags = document.getElementsByClassName("AllDiags");
	for(let i=0; i<AllDiags.length; i++) AllDiags[i].style = "display: none;"
	document.getElementById(Diagnosis).style = "display: block;"
}