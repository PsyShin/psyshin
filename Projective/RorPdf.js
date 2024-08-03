function generateRep(){
	document.getElementById('generateRep').style.display = "none";

	var Zscore_Ele = window.opener.document.getElementsByName("StrSum_Z");
	var Zscore_Pdf = document.getElementsByName("Zscore");
	for(let i=0; i<3; i++) Zscore_Pdf[i].innerHTML = Zscore_Ele[i].innerHTML;


	var DQCol_Ele = window.opener.document.getElementsByName("StrSum_DQ");
	var DQCol_Pdf = document.getElementsByName("DQCol");
	for(let i=0; i<4; i++) DQCol_Pdf[i].innerHTML = DQCol_Ele[i].innerHTML;


	var LocCol_Ele = window.opener.document.getElementsByName("StrSum_Loc");
	var LocCol_Pdf = document.getElementsByName("LocCol");

	var FQCol_Ele = window.opener.document.getElementsByName("StrSum_FQ");
	var FQCol_Pdf = document.getElementsByName("FQCol");

	for(let i=0; i<5; i++) {
		LocCol_Pdf[i].innerHTML = LocCol_Ele[i].innerHTML;
		for(let j=0; j<3; j++) FQCol_Pdf[i+5*j].innerHTML = FQCol_Ele[i+5*j].innerHTML;
	}


	var DetCol_Ele = window.opener.document.getElementsByName("StrSum_Det");
	var DetCol_Pdf = document.getElementsByName("DetCol");
	for(let i=0; i<24; i++) DetCol_Pdf[i].innerHTML = DetCol_Ele[i].innerHTML;


	var ConCol_Ele = window.opener.document.getElementsByName("StrSum_Con");
	var ConCol_Pdf = document.getElementsByName("ConCol");
	for(let i=0; i<27; i++) ConCol_Pdf[i].innerHTML = ConCol_Ele[i].innerHTML;


	var SSCol_Ele = window.opener.document.getElementsByName("StrSum_SS");
	var SSCol_Pdf = document.getElementsByName("SSCol");
	for(let i=0; i<19; i++) SSCol_Pdf[i].innerHTML = SSCol_Ele[i].innerHTML;
}
