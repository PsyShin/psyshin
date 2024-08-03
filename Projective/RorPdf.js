function generateRep(){
	document.getElementById('generateRep').style.display = "none";
	var Zscore_Ele = window.opener.document.getElementsByName("StrSum_Z");
	var Zscore_Pdf = document.getElementsByName("Zscore");
	for(let i=0; i<3; i++) Zscore_Pdf[i].innerHTML = Zscore_Ele[i].innerHTML;
}