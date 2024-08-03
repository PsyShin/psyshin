function generateRep(){
	document.getElementById('generateRep').style.display = "none";
	var count = 0;

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

	for(let i=0; i<5; i++){
		LocCol_Pdf[i].innerHTML = LocCol_Ele[i].innerHTML;
		for(let j=0; j<3; j++) FQCol_Pdf[j+i*3].innerHTML = FQCol_Ele[i+j*5].innerHTML;
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


	var AppCol_Ele = window.opener.document.getElementsByName("InfPro_S3_LocByCard");
	var AppCol_Pdf = document.getElementsByName("AppCol");
	for(let i=0; i<10; i++) AppCol_Pdf[i].innerHTML = AppCol_Ele[i].innerHTML;


	var BlendsCol_Ele = window.opener.document.getElementById("ParentBlends").innerHTML.split(",");
	var BlendsCol_Pdf = document.getElementsByName("BlendsCol");
	for(let i=0; i<BlendsCol_Ele.length; i++) BlendsCol_Pdf[i].innerHTML = BlendsCol_Ele[i];


	var CoreCol_Ele = window.opener.document.getElementsByName("RPD_1");
	var CoreCol_Pdf = document.getElementsByName("CoreCol");
	for(let i=0; i<CoreCol_Ele.length; i++) CoreCol_Pdf[i].innerHTML = CoreCol_Ele[i].innerHTML;
}