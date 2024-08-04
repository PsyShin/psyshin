function generateRep(){
	document.getElementById('generateRep').style.display = "none";
	var count = 0;

	var RespFromParent = window.opener.document.getElementById("ParentResp").innerHTML;
	RespFromParent = RespFromParent.split("--").reverse();

	var SeqScoTable = document.getElementById("SeqScoTable");
	var SeqSco_ind = document.getElementById("SeqSco").rowIndex;
	var CardColor = ["Card I", "Card III", "Card V", "Card VII", "Card IX"];
	var AllCard = [];
	for(let i=0; i<RespFromParent.length; i++) {
		var SeqSco_addRow = SeqScoTable.insertRow((SeqSco_ind + 1));
		for(let j=0; j<10; j++) SeqSco_addRow.insertCell(j).innerHTML = RespFromParent[i].split(";")[j];
		if(CardColor.includes(RespFromParent[i].split(";")[0])) SeqSco_addRow.style = "background-color:#E0E0E0;";
		AllCard.push(RespFromParent[i].split(";")[0]);
	}
	AllCard = AllCard.reverse();
	for(let i=8; i<7+RespFromParent.length; i++) if(SeqScoTable.rows[i].cells[0].innerHTML == AllCard[i-8]) SeqScoTable.rows[i].cells[0].innerHTML = "";


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

	var Sum6Col_Ele = window.opener.document.getElementsByName("StrSum_Sum6");
	var Sum6Col_Pdf = document.getElementsByName("Sum6Col");
	for(let i=0; i<2; i++) Sum6Col_Pdf[i].innerHTML = Sum6Col_Ele[i].innerHTML;


	var AppCol_Ele = window.opener.document.getElementsByName("InfPro_S3_LocByCard");
	var AppCol_Pdf = document.getElementsByName("AppCol");
	for(let i=0; i<10; i++) AppCol_Pdf[i].innerHTML = AppCol_Ele[i].innerHTML;


	var BlendsCol_Ele = window.opener.document.getElementById("ParentBlends").innerHTML.split(",");
	var BlendsCol_Pdf = document.getElementsByName("BlendsCol");
	for(let i=0; i<BlendsCol_Ele.length; i++) BlendsCol_Pdf[i].innerHTML = BlendsCol_Ele[i];


	var CoreCol_Ele = window.opener.document.getElementsByName("RPD_1");
	var CoreCol_Pdf = document.getElementsByName("CoreCol");
	for(let i=0; i<CoreCol_Ele.length; i++) CoreCol_Pdf[i].innerHTML = CoreCol_Ele[i].innerHTML;


	var AffCol_Ele = window.opener.document.getElementsByName("RPD_3");
	var AffCol_Pdf = document.getElementsByName("AffCol");
	for(let i=0; i<AffCol_Ele.length; i++) AffCol_Pdf[i].innerHTML = AffCol_Ele[i].innerHTML;


	var IntPerCol_Ele = window.opener.document.getElementsByName("RPD_6");
	var IntPerCol_Pdf = document.getElementsByName("IntPerCol");
	for(let i=0; i<IntPerCol_Ele.length; i++) IntPerCol_Pdf[i].innerHTML = IntPerCol_Ele[i].innerHTML;


	var IdeCol_Ele = window.opener.document.getElementsByName("RPD_2");
	var IdeCol1_Pdf = document.getElementsByName("IdeCol");
	var IdeCol2_Pdf = document.getElementsByName("IdeCol2");
	for(let i=0; i<IdeCol1_Pdf.length; i++) IdeCol1_Pdf[i].innerHTML = IdeCol_Ele[i].innerHTML;
	for(let i=0; i<IdeCol2_Pdf.length; i++) IdeCol2_Pdf[i].innerHTML = IdeCol_Ele[i+IdeCol1_Pdf.length].innerHTML;


	var MedCol_Ele = window.opener.document.getElementsByName("RPD_4");
	var MedCol_Pdf = document.getElementsByName("MedCol");
	for(let i=0; i<MedCol_Ele.length; i++) MedCol_Pdf[i].innerHTML = MedCol_Ele[i].innerHTML;


	var InfProCol_Ele = window.opener.document.getElementsByName("RPD_5");
	var InfProCol_Pdf = document.getElementsByName("InfProCol");
	for(let i=0; i<InfProCol_Ele.length; i++) InfProCol_Pdf[i].innerHTML = InfProCol_Ele[i].innerHTML;


	var SelPerCol_Ele = window.opener.document.getElementsByName("RPD_7");
	var SelPerCol_Pdf = document.getElementsByName("SelPerCol");
	for(let i=0; i<SelPerCol_Ele.length; i++) SelPerCol_Pdf[i].innerHTML = SelPerCol_Ele[i].innerHTML;


	var SelPerCol_Ele = window.opener.document.getElementsByName("RPD_7");
	var SelPerCol_Pdf = document.getElementsByName("SelPerCol");
	for(let i=0; i<SelPerCol_Ele.length; i++) SelPerCol_Pdf[i].innerHTML = SelPerCol_Ele[i].innerHTML;


	var SpeIndCol_Ele = window.opener.document.getElementsByName("RPD_8");
	var SpeIndCol_Pdf = document.getElementsByName("SpeIndCol");
	for(let i=0; i<SpeIndCol_Ele.length; i++) SpeIndCol_Pdf[i].innerHTML = SpeIndCol_Ele[i].innerHTML;

}