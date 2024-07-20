var RespNames = ["第幾張卡","第幾個反應","Location","DQ","位置編號","決定因子","FQ","(2)","內容","P","Z-Score","Special Score"];

var CardDict = ["Card I","Card II","Card III","Card IV","Card V","Card VI","Card VII","Card VIII","Card IX","Card X"];
var LocDict = ["W","D","Dd","S","WS","DS","DdS"];
var DQDict = ["+","o","v/+","v"];
var FQDict = ["+","o","u","-"," "];
var ZDict = ["ZW", "ZA", "ZD", "ZS"];
var ZestDict = [null,null,2.5,6,10,13.5,17,20.5,24,27.5,31,34.5,38,41.5,45.5,49,52.5,56,59.5,63,66.5,70,73.5,77,81,84.5,88,91.5,95,98.5,102.5,105.5,109.5,112.5,116.5,120,123.5,127,130.5,134,137.5,141,144.5,148,152,155.5,159,162.5,166,169.5,173];

var AllDetDict = ["Ma","Mp","Map","FMa","FMp","FMap","ma","mp","map",//8
"FC","CF","C","Cn","FC'","C'F","C'",//15
"FT","TF","T","FV","VF","V","FY","YF","Y","Fr","rF","FD","F"];

var AllConDict = ["H","(H)","Hd","(Hd)","Hx","A","(A)","Ad","(Ad)",//8
"An","Art","Ay","Bl","Cg","Ex","Fi","Fd","Ge","Hh","Cl","Sc","Sx","Xy","Id",//23
"Bt","Ls","Na"];

var AllSSDict = ["DV1","DV2","INC1","INC2","DR1","DR2","FAB1","FAB2","ALOG","CON",//9
"AB","AG","COP","CP","GHR","PHR","MOR","PER","PSV"," "];

var ZScore_Tran =
[[1,4,6,3.5],[4.5,3,5.5,4.5],[5.5,3,4,4.5],[2,4,3.5,5],[1,2.5,5,4],
[2.5,2.5,6,6.5],[2.5,1,3,4],[4.5,3,3,4],[5.5,2.5,4.5,5],[5.5,4,4.5,6]];

var AllIndex = [0];



function Reload(){
	document.location.reload();
}






function addResp(){ 
	var AResp = document.getElementsByName("Resp");
	var myTable = document.getElementById("RespTable");
	var DoAdd = true;
	for(let i=0; i<12; i++){
		if(AResp[i].value == "" | AResp[i].value == "選擇" | AResp[i].value == null){
			alert("請輸入 " + RespNames[i]);
			DoAdd = false;
			break;
		}
	}

	if(DoAdd){
		AllIndex.push(Number(AResp[1].value));
		AllIndex.sort(function(a,b){if(a>b) return 1;if(a<b) return -1; return 0;});
		var addRow = myTable.insertRow(AllIndex.indexOf(Number(AResp[1].value)));

		addRow.insertCell(0).innerHTML = AResp[0].value;
		addRow.insertCell(1).innerHTML = AResp[1].value;
		for(let i=2; i<AResp.length; i++) addRow.insertCell(i).innerHTML = AResp[i].value;
		if(AResp[10].value != " ") addRow.cells[10].innerHTML = ZScore_Tran[CardDict.indexOf(AResp[0].value)][ZDict.indexOf(AResp[10].value)];
		addRow.id = new Date().getTime();
		addRow.insertCell(12).innerHTML='<input type=\'button\'  value=\'删除\' onclick=\'delrow('+addRow.id+')\'>';

		var CardColor = ["Card I", "Card III", "Card V", "Card VII", "Card IX"];
		if(CardColor.includes(AResp[0].value)) addRow.style = "background-color:#E0E0E0;";

		AResp[1].value = Number(AResp[1].value) + 1;
	}
	
}

function delrow(trId){
	var ok = window.confirm("真的刪掉嗎><");
	var myTable = document.getElementById("RespTable");
	if(ok){
		delIndex = document.getElementById(trId).rowIndex;
		AllIndex.splice(delIndex,1);
		myTable.deleteRow(delIndex);
	}
}













function openSSDia(){
	var Dial = document.getElementById("SSDia");
	Dial.showModal();
}

function showBtnName_SS(BtnName){
	var SSNow_Dia = document.getElementById("mySS_Dia");
	if(SSNow_Dia.innerHTML == ""){
		SSNow_Dia.innerHTML = BtnName;
	}else{
		SSNow_Dia.innerHTML = SSNow_Dia.innerHTML + "," + BtnName;
	}
}

function SSNone(){
	var SSNow_Dia = document.getElementById("mySS_Dia");
	document.getElementById("RespSS").value = " ";
	SSNow_Dia.innerHTML = "";

	var Dial = document.getElementById("SSDia");
	Dial.close();
}

function SSDiaConf(){
	var SSNow_Dia = document.getElementById("mySS_Dia");
	document.getElementById("RespSS").value = SSNow_Dia.innerHTML;
	SSNow_Dia.innerHTML = "";

	var Dial = document.getElementById("SSDia");
	Dial.close();
}

function SSDiaRest(){
	document.getElementById("mySS_Dia").innerHTML = "";
}





function openConDia(){
	var Dial = document.getElementById("ConDia");
	Dial.showModal();
}

function showBtnName_Con(BtnName){
	var ConNow_Dia = document.getElementById("myCon_Dia");
	if(ConNow_Dia.innerHTML == ""){
		ConNow_Dia.innerHTML = BtnName;
	}else{
		ConNow_Dia.innerHTML = ConNow_Dia.innerHTML + "," + BtnName;
	}
}

function ConDiaConf(){
	var ConNow_Dia = document.getElementById("myCon_Dia");
	document.getElementById("RespCon").value = ConNow_Dia.innerHTML;
	ConNow_Dia.innerHTML = "";

	var Dial = document.getElementById("ConDia");
	Dial.close();
}

function ConDiaRest(){
	document.getElementById("myCon_Dia").innerHTML = "";
}






function openDetDia(){
	var Dial = document.getElementById("DetDia");
	Dial.showModal();
}

function showBtnName_Det(BtnName){
	var DetNow_Dia = document.getElementById("myDet_Dia");
	if(DetNow_Dia.innerHTML == ""){
		DetNow_Dia.innerHTML = BtnName;
	}else{
		DetNow_Dia.innerHTML = DetNow_Dia.innerHTML + "." + BtnName;
	}
}

function DetDiaConf(){
	var DetNow_Dia = document.getElementById("myDet_Dia");
	document.getElementById("RespDet").value = DetNow_Dia.innerHTML;
	DetNow_Dia.innerHTML = "";

	var Dial = document.getElementById("DetDia");
	Dial.close();
}

function DetDiaRest(){
	document.getElementById("myDet_Dia").innerHTML = "";
}





function Summary1(){
	var myTable = document.getElementById("RespTable");
	var myResp = [[],[],[],[],[],[],[],[],[],[],[],[]];
	var myResp1 = [];
	var myR = myTable.rows.length - 5;

	for(let j=1; j<(myR+1); j++){
		for(let i=0; i<12; i++) myResp[i].push(myTable.rows[j].cells[i].innerHTML)
	}
	
	// all calculator
	var count = 0;
	var myLoc = [0,0,0,0,0,0,0];
	var myLoc_StrSum = [0,0,0,0,0];
	var myDQ = [0,0,0,0];
	var myFQ = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
	var myDet = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var myDet_All = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var myBle = [];
	var myPair = 0;
	var myCon = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var mySS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var mySum6 = [0,0];
	var myZ = [0,0,0];
	var myP = 0;
	var mySmin = 0;

	for(let i=0; i<myR; i++){
		myLoc[LocDict.indexOf(myResp[2][i])] += 1;
		myDQ[DQDict.indexOf(myResp[3][i])] += 1;
		myFQ[0][FQDict.indexOf(myResp[6][i])] += 1;
		if(myResp[2][i].includes("S") & myResp[6][i] == "-") mySmin += 1;

		if(myResp[5][i].includes(".")){
			myBle.push(myResp[5][i]);
			myResp[5][i] = myResp[5][i].split(".");
			for(let j=0; j<myResp[5][i].length; j++) myDet_All[AllDetDict.indexOf(myResp[5][i][j])] += 1;
		}else{
			myDet[AllDetDict.indexOf(myResp[5][i])] += 1;
			myDet_All[AllDetDict.indexOf(myResp[5][i])] += 1;
		}
		
		if(["W","WS","D","DS"].includes(myResp[2][i])) myFQ[2][FQDict.indexOf(myResp[6][i])] += 1;
		if(typeof(myResp[5][i]) == "string"){
			if(["Ma","Mp","Map"].includes(myResp[5][i])) myFQ[1][FQDict.indexOf(myResp[6][i])] += 1;
		}else{
			if(myResp[5][i].includes("Ma") | myResp[5][i].includes("Mp") | myResp[5][i].includes("Map")) myFQ[1][FQDict.indexOf(myResp[6][i])] += 1;
		}

		if(myResp[7][i] == "(2)") myPair += 1;

		if(myResp[8][i].includes(",")){
			myResp[8][i] = myResp[8][i].split(",");
			for(let j=0; j<myResp[8][i].length; j++) myCon[AllConDict.indexOf(myResp[8][i][j])] += 1;
		}else{
			myCon[AllConDict.indexOf(myResp[8][i])] += 1;
		}

		if(myResp[9][i] == "P") myP += 1;

		if(myResp[10][i] != " "){
			myZ[0] += 1;
			myZ[1] += Number(myResp[10][i]);
		}

		if(myResp[11][i].includes(",")){
			myResp[11][i] = myResp[11][i].split(",");
			for(let j=0; j<myResp[11][i].length; j++) mySS[AllSSDict.indexOf(myResp[11][i][j])] += 1;
		}else{
			mySS[AllSSDict.indexOf(myResp[11][i])] += 1;
		}
	}

	// for StrSum_Z
	var StrSum_ZText = document.getElementsByName("StrSum_Z");
	myZ[2] = ZestDict[myZ[0]];
	for(let i=0; i<3; i++) StrSum_ZText[i].innerHTML = myZ[i];

	// for StrSum_Loc
	myLoc_StrSum[0] = myLoc[0] + myLoc[4];
	myLoc_StrSum[1] = myLoc[1] + myLoc[5];
	myLoc_StrSum[2] = myLoc[0] + myLoc[4] + myLoc[1] + myLoc[5];
	myLoc_StrSum[3] = myLoc[2] + myLoc[6];
	myLoc_StrSum[4] = myLoc[3] + myLoc[4] + myLoc[5] + myLoc[6];
	var StrSum_LocText = document.getElementsByName("StrSum_Loc");
	for(let i=0; i<5; i++) StrSum_LocText[i].innerHTML = myLoc_StrSum[i];

	// for DQ
	var StrSum_DQText = document.getElementsByName("StrSum_DQ");
	for(let i=0; i<4; i++) StrSum_DQText[i].innerHTML = myDQ[i];

	// for Determinants
	myDet = myDet.concat([myDet[0]+myDet[1]+myDet[2], myDet[3]+myDet[4]+myDet[5], myDet[6]+myDet[7]+myDet[8]]);
	myDet_All = myDet_All.concat([myDet_All[0]+myDet_All[1]+myDet_All[2], myDet_All[3]+myDet_All[4]+myDet_All[5], myDet_All[6]+myDet_All[7]+myDet_All[8]]);
	var StrSum_DetText = document.getElementsByName("StrSum_Det");
	if(myDet_All[29] != 0) StrSum_DetText[0].innerHTML = myDet_All[29];
	if(myDet_All[30] != 0) StrSum_DetText[1].innerHTML = myDet_All[30];
	if(myDet_All[31] != 0) StrSum_DetText[2].innerHTML = myDet_All[31];
	for(let i=3; i<23; i++) if(myDet_All[i+6] != 0) StrSum_DetText[i].innerHTML = myDet_All[i+6];
	var myM = myDet_All[29];
	var myFM = myDet_All[30];
	var mym = myDet_All[31];
	var myRefl = myDet_All[25]+myDet_All[26];
	var myFD = myDet_All[27];

	var BleTable = document.getElementById("BleTable");
	BleTable.deleteRow(0);
	var addBleRow = BleTable.insertRow(0);
	var DetBleCell = addBleRow.insertCell(0);
	addBleRow.id = "DetBle";
	DetBleCell.innerHTML='<td>Determinants - Blends</td>';
	DetBleCell.style = "background-color:#F0F0F0;";



	var StrSum_BleText = document.getElementById("DetBle");
	for(let i=1; i<StrSum_BleText.cells.length; i++) StrSum_BleText.deleteCell(1);
	for(let i=0; i<myBle.length; i++) StrSum_BleText.insertCell(i+1).innerHTML = myBle[i];

	// for (2)
	if(myPair != 0) StrSum_DetText[23].innerHTML = myPair;

	// for FQ
	var StrSum_FQText = document.getElementsByName("StrSum_FQ");
	for(let i=0; i<5; i++) StrSum_FQText[i].innerHTML = myFQ[0][i];
	for(let i=5; i<10; i++) StrSum_FQText[i].innerHTML = myFQ[1][i-5];
	for(let i=10; i<15; i++) StrSum_FQText[i].innerHTML = myFQ[2][i-10];

	// for Contents
	var StrSum_ConText = document.getElementsByName("StrSum_Con");
	for(let i=0; i<27; i++) if(myCon[i] != 0) StrSum_ConText[i].innerHTML = myCon[i];
	var myFd = myCon[16];

	// for Special Score
	var StrSum_SSText = document.getElementsByName("StrSum_SS");
	for(let i=0; i<19; i++) if(mySS[i] != 0) StrSum_SSText[i].innerHTML = mySS[i];
	var myAB = mySS[10];
	var myAG = mySS[11];
	var myCOP = mySS[12];
	var myCP = mySS[13];
	var myGHR = mySS[14];
	var myPHR = mySS[15];
	var myMOR = mySS[16];
	var myPER = mySS[17];
	var myPSV = mySS[18];

	var StrSum_Sum6Text = document.getElementsByName("StrSum_Sum6");
	var Sum6Wei = [1,2,2,4,3,6,4,7,5,7];
	for(let i=0; i<10; i++){
		mySum6[0] += mySS[i];
		mySum6[1] += mySS[i]*Sum6Wei[i];
	}
	StrSum_Sum6Text[0].innerHTML = mySum6[0];
	StrSum_Sum6Text[1].innerHTML = mySum6[1];



	// Ratios, Percentages, and Derivations
	// Core Section
	var RPD_1Text = document.getElementsByName("RPD_1");
	var myL = (myDet[28]/(myR - myDet[28])).toFixed(2);
	var WSumC = myDet_All[9]*0.5 + myDet_All[10] + myDet_All[11]*1.5;
	var EB = [myM,WSumC];
	var EA = EB[0] + EB[1];
	if(EA >= 4 & myL < 1){
		if(EA <= 10 & Math.abs(EB[0]-EB[1]) >= 2){
			if(EB[0] > EB[1]) var EBPer = (EB[0]/EB[1]).toFixed(2);
		}else if(EA > 10 & Math.abs(EB[0]-EB[1]) >= 2.5){
			if(EB[0] > EB[1]) var EBPer = (EB[0]/EB[1]).toFixed(2);
		}
	}
	var SumCpr = myDet_All[13] + myDet_All[14] + myDet_All[15];
	var SumT = myDet_All[16] + myDet_All[17] + myDet_All[18];
	var SumV = myDet_All[19] + myDet_All[20] + myDet_All[21];
	var SumY = myDet_All[22] + myDet_All[23] + myDet_All[24];
	var eb = [myFM+mym, SumCpr + SumT + SumV + SumY];
	var es = eb[0] + eb[1];
	var DScore_table = [-13,-10.5,-8,-5.5,-3,2.5,5,7.5,10,12.5,50];
	for(let i=0; i<11; i++){
		if(EA - es <= DScore_table[i]){
			var DScore = i-5;
			break;
		}
	}
	var Adjes = es;
	if(mym>1) Adjes -= (mym-1);
	if(SumY>1) Adjes -= (SumY-1);
	for(let i=0; i<11; i++){
		if(EA - Adjes <= DScore_table[i]){
			var AdjD = i-5;
			break;
		}
	}

	RPD_1Text[0].innerHTML = myR;
	RPD_1Text[1].innerHTML = myL;
	RPD_1Text[2].innerHTML = EB[0]+":"+EB[1];
	RPD_1Text[3].innerHTML = EA;
	if(EBPer){
		RPD_1Text[4].innerHTML = EBPer
	}else{
		RPD_1Text[4].innerHTML = "NA";
	}
	RPD_1Text[5].innerHTML = eb[0]+":"+eb[1];
	RPD_1Text[6].innerHTML = es;
	RPD_1Text[7].innerHTML = DScore;
	RPD_1Text[8].innerHTML = Adjes;
	RPD_1Text[9].innerHTML = AdjD;
	RPD_1Text[10].innerHTML = myFM;
	RPD_1Text[11].innerHTML = SumCpr;
	RPD_1Text[12].innerHTML = SumT;
	RPD_1Text[13].innerHTML = mym;
	RPD_1Text[14].innerHTML = SumV;
	RPD_1Text[15].innerHTML = SumY;

	// Ideation Section
	var RPD_2Text = document.getElementsByName("RPD_2");
	var a_p = [myDet_All[0]+myDet_All[2]+myDet_All[3]+myDet_All[5]+myDet_All[6]+myDet_All[8],myDet_All[1]+myDet_All[2]+myDet_All[4]+myDet_All[5]+myDet_All[7]+myDet_All[8]];
	var Ma_Mp = [myDet_All[0]+myDet_All[2],myDet_All[1]+myDet_All[2]];
	var Intell = 2*myAB+myCon[10]+myCon[11];
	var Lvl2 = mySS[1] + mySS[3] + mySS[5] + mySS[7];

	RPD_2Text[0].innerHTML = a_p[0]+":"+a_p[1];
	RPD_2Text[1].innerHTML = Ma_Mp[0]+":"+Ma_Mp[1];
	RPD_2Text[2].innerHTML = Intell;
	RPD_2Text[3].innerHTML = myMOR;
	RPD_2Text[4].innerHTML = mySum6[0];
	RPD_2Text[5].innerHTML = Lvl2;
	RPD_2Text[6].innerHTML = mySum6[1];
	RPD_2Text[7].innerHTML = myFQ[1][3];
	RPD_2Text[8].innerHTML = myFQ[1][4];

	// Affect Section
	var RPD_3Text = document.getElementsByName("RPD_3");
	var FC_ratio = [myDet_All[9],myDet_All[10]+myDet_All[11]];
	var Cons_ratio = [myDet_All[13]+myDet_All[14]+myDet_All[15],WSumC];
	var Afr = ((myR-myResp[0].indexOf("Card VIII"))/myResp[0].indexOf("Card VIII")).toFixed(2);
	var Comp_ratio = [myBle.length,myR];

	RPD_3Text[0].innerHTML = FC_ratio[0]+":"+FC_ratio[1];
	RPD_3Text[1].innerHTML = myDet_All[11];
	RPD_3Text[2].innerHTML = Cons_ratio[0]+":"+Cons_ratio[1];
	RPD_3Text[3].innerHTML = Afr;
	RPD_3Text[4].innerHTML = myLoc_StrSum[4];
	RPD_3Text[5].innerHTML = Comp_ratio[0]+":"+Comp_ratio[1];
	RPD_3Text[6].innerHTML = myCP;


	// Mediation Section
	var RPD_4Text = document.getElementsByName("RPD_4");
	var XAper = ((myFQ[0][0]+myFQ[0][1]+myFQ[0][2])/myR).toFixed(2);
	var WDAper = ((myFQ[2][0]+myFQ[2][1]+myFQ[2][2])/(myFQ[2][0]+myFQ[2][1]+myFQ[2][2]+myFQ[2][3]+myFQ[2][4])).toFixed(2);
	var Xminper = (myFQ[0][3]/myR).toFixed(2);
	var Xpluper = ((myFQ[0][0]+myFQ[0][1])/myR).toFixed(2);
	var Xuper = (myFQ[0][2]/myR).toFixed(2);

	RPD_4Text[0].innerHTML = XAper;
	RPD_4Text[1].innerHTML = WDAper;
	RPD_4Text[2].innerHTML = Xminper;
	RPD_4Text[3].innerHTML = mySmin;
	RPD_4Text[4].innerHTML = myP;
	RPD_4Text[5].innerHTML = Xpluper;
	RPD_4Text[6].innerHTML = Xuper;

	// Processing Section
	var RPD_5Text = document.getElementsByName("RPD_5");

	RPD_5Text[0].innerHTML = myZ[0];
	RPD_5Text[1].innerHTML = myLoc_StrSum[0]+":"+myLoc_StrSum[1]+":"+myLoc_StrSum[3];
	RPD_5Text[2].innerHTML = myLoc_StrSum[0]+":"+myM;
	RPD_5Text[3].innerHTML = myZ[1] - myZ[2];
	RPD_5Text[4].innerHTML = myPSV;
	RPD_5Text[5].innerHTML = myDQ[0];
	RPD_5Text[6].innerHTML = myDQ[3];

	// Interpersonal Section
	var RPD_6Text = document.getElementsByName("RPD_6");
	var HumCon = myCon[0] + myCon[1] + myCon[2] + myCon[3];
	var IsoInd = ((2*(myCon[19]+myCon[26])+myCon[17]+myCon[24]+myCon[25])/myR).toFixed(2);

	RPD_6Text[0].innerHTML = myCOP;
	RPD_6Text[1].innerHTML = myAG;
	RPD_6Text[2].innerHTML = myGHR+":"+myPHR;
	RPD_6Text[3].innerHTML = a_p[0]+":"+a_p[1];
	RPD_6Text[4].innerHTML = myFd;
	RPD_6Text[5].innerHTML = SumT;
	RPD_6Text[6].innerHTML = HumCon;
	RPD_6Text[7].innerHTML = myCon[0];
	RPD_6Text[8].innerHTML = myPER;
	RPD_6Text[9].innerHTML = IsoInd;

	// Self Perception Section
	var RPD_7Text = document.getElementsByName("RPD_7");
	var EgoInd = ((3*myRefl+myPair)/myR).toFixed(2);

	RPD_7Text[0].innerHTML = EgoInd;
	RPD_7Text[1].innerHTML = myRefl;
	RPD_7Text[2].innerHTML = SumV;
	RPD_7Text[3].innerHTML = myFD;
	RPD_7Text[4].innerHTML = myCon[9] + myCon[22];
	RPD_7Text[5].innerHTML = myMOR;
	RPD_7Text[6].innerHTML = myCon[0]+":"+(HumCon-myCon[0]);

	// Special Indices
	var RPD_8Text = document.getElementsByName("RPD_8");
	var SpeInd = [0,0,0,0];
	var ColShaBle = 0;
	// S-CON
	if((SumV+myFD)>2) SpeInd[3] += 1;
	var myBleSplit = [];
	for(let i=0; i<myBle.length; i++) myBleSplit.push(myBle[i].split("."));
	for(let i=0; i<myBle.length; i++){
		if(myBleSplit[i].includes("C") | myBleSplit[i].includes("CF") | myBleSplit[i].includes("FC")){
			if(myBle[i].includes("T") | myBle[i].includes("V") | myBle[i].includes("Y")){
				ColShaBle +=1;
			}
		}
	}
	if(ColShaBle > 0) SpeInd[3] += 1;
	if(EgoInd < 0.31 | EgoInd > 0.44) SpeInd[3] += 1;
	if(myMOR > 3) SpeInd[3] += 1;
	if((myZ[1] - myZ[2]) > 3.5 | (myZ[1] - myZ[2]) < -3.5) SpeInd[3] += 1;
	if(es > EA) SpeInd[3] += 1;
	if(myDet_All[10] + myDet_All[11] > myDet_All[9]) SpeInd[3] += 1;
	if(Xpluper < 0.7) SpeInd[3] += 1;
	if(myLoc_StrSum[4] > 3) SpeInd[3] += 1;
	if(myP < 3 | myP > 8) SpeInd[3] += 1;
	if(myCon[0] < 2) SpeInd[3] += 1;
	if(myR < 17) SpeInd[3] += 1;
	// PTI
	if(XAper < 0.7 & WDAper < 0.75) SpeInd[0] += 1;
	if(Xminper > 0.29) SpeInd[0] += 1;
	if(Lvl2 > 2 & mySS[7] > 0) SpeInd[0] += 1;
	if(myR < 17){
		if(mySum6[1] > 12) SpeInd[0] += 1;
	}else{
		if(mySum6[1] > 17) SpeInd[0] += 1;
	}
	if(myFQ[1][3] > 1 | Xminper > 0.4) SpeInd[0] += 1;
	// DEPI
	if(SumV > 0 | myFD > 2) SpeInd[1] += 1;
	if(ColShaBle > 0 | myLoc_StrSum[4] > 2) SpeInd[1] += 1;
	if(EgoInd < 0.33){
		SpeInd[1] += 1;
	}else{
		if(EgoInd > 0.44 & myRefl == 0) SpeInd[1] += 1;
	}
	if(Afr < 0.46 | myBle.length < 4) SpeInd[1] += 1;
	if(((SumY + SumV + SumT) > (myFM + mym)) | SumCpr > 2) SpeInd[1] += 1;
	if(myMOR > 2 | Intell > 3) SpeInd[1] += 1;
	if(myCOP < 2 | IsoInd > 0.24) SpeInd[1] += 1;
	// CDI
	if(EA < 6 | AdjD < 0) SpeInd[2] +=1;
	if(myCOP < 2 & myAG < 2) SpeInd[2] +=1;
	if(WSumC < 2.5 | Afr < 0.46) SpeInd[2] +=1;
	if(a_p[1] > (a_p[0] + 1) | myCon[0] < 2) SpeInd[2] +=1;
	if(SumT > 1 | IsoInd > 0.24 | myFd > 0) SpeInd[2] +=1;
	// HVI
	var HVI = false;
	if(SumT == 0){
		count = 0;
		if(myZ[0] > 12) count += 1;
		if(myZ[1] - myZ[2] > 3.5) count += 1;
		if(myLoc_StrSum[4] > 3) count += 1;
		if(HumCon > 6) count += 1;
		if(myCon[1] + myCon[3] + myCon[6] + myCon[8] > 3) count += 1;
		if(((myCon[0] + myCon[5])/(myCon[2] + myCon[7])) < 4) count += 1;
		if(myCon[13] > 3) count += 1;
		if(count > 3) HVI = true;
	}
	if(HVI){
		RPD_8Text[4].innerHTML = "YES";
	}else{
		RPD_8Text[4].innerHTML = "NO";
	}
	// OBS
	var OBS = false;
	count = 0;
	if(myLoc_StrSum[3] > 3) count += 1;
	if(myZ[0] > 12) count += 1;
	if(myZ[1] - myZ[2] > 3) count += 1;
	if(myP > 7) count += 1;
	if(count > 1 &  myFQ[0][0] > 3) OBS = true;
	if(myFQ[0][0] > 1) count += 1;
	if(count == 5) OBS = true;
	if(count > 2 & Xpluper > 0.89) OBS = true;
	if(myFQ[0][0] > 3 & Xpluper > 0.89) OBS = true;
	if(OBS){
		RPD_8Text[5].innerHTML = "YES";
	}else{
		RPD_8Text[5].innerHTML = "NO";
	}

	RPD_8Text[0].innerHTML = SpeInd[0];
	var SpeIndCutoff = [4,3,7];
	for(let i=1; i<4; i++){
		if(SpeInd[i] > SpeIndCutoff[i]){
			RPD_8Text[i].innerHTML = SpeInd[i] + " (Pos)";
		}else{
			RPD_8Text[i].innerHTML = SpeInd[i] + " (Neg)";
		}
	} 
//	document.getElementById("testText2").innerHTML = myResp.join(";");
}


function try1(){
	var temp = document.getElementById("testText1");
	temp.innerHTML = "hi";
}









/*
function openDetDia(){
	var Dial = document.getElementById("DetDialog");
	Dial.showModal();
}

function confDetWin(){
	var Dial = document.getElementById("DetDialog");
	var AllDetRad = document.querySelectorAll('[data-label="AllDet"]');
	var outP = [];

	for(let i=0; i<AllDetRad.length; i++){
		if(AllDetRad[i].checked) outP.push(AllDetDict[i])
		AllDetRad[i].checked = false;
	} 
	document.getElementById("RespDet").value = outP.join('.');
	Dial.close();
}

function resDetWin(){
	var Dial = document.getElementById("DetDialog");
	var AllDetRad = document.querySelectorAll('[data-label="AllDet"]');

	for(let i=0; i<AllDetRad.length; i++) AllDetRad[i].checked = false;
}





function openSSDia(){
	var Dial = document.getElementById("SSDialog");
	Dial.showModal();
}

function confSSWin(){
	var Dial = document.getElementById("SSDialog");
	var AllSSChe = document.querySelectorAll('[data-label="AllSS"]');
	var outP = [];

	for(let i=0; i<AllSSChe.length; i++){
		if(AllSSChe[i].checked) outP.push(AllSSDict[i]);
		AllSSChe[i].checked = false;
	} 
	document.getElementById("RespSS").value = outP.join(',');
	Dial.close();
}

function resSSWin(){
	var Dial = document.getElementById("SSDialog");
	var AllSSChe = document.querySelectorAll('[data-label="AllSS"]');

	for(let i=0; i<AllSSChe.length; i++) AllSSChe[i].checked = false;
}




function openConDia(){
	var Dial = document.getElementById("ConDialog");
	Dial.showModal();
}

function confConWin(){
	var Dial = document.getElementById("ConDialog");
	var AllConChe_Rad = document.querySelectorAll('[data-label="AllCon"]');
	var outP = [];

	for(let i=0; i<AllConChe_Rad.length; i++){
		if(AllConChe_Rad[i].checked) outP.push(AllConDict[i]);
		AllConChe_Rad[i].checked = false;
	} 
	document.getElementById("RespCon").value = outP.join(',');
	Dial.close();
}

function resConWin(){
	var Dial = document.getElementById("ConDialog");
	var AllConChe_Rad = document.querySelectorAll('[data-label="AllCon"]');

	for(let i=0; i<AllConChe_Rad.length; i++) AllConChe_Rad[i].checked = false;
}

*/


function test1(){
	var AResp = document.getElementsByName("Resp");

	AllResp = [["Card I","1","W","o","1","F","o"," ","A","P","ZW"," "],
	["Card I","2","D","+","4","Ma","o","(2)","H,Id"," ","ZA","GHR"],
	["Card I","3","WS","o","1","Ma","u"," ","(Hd)"," ","ZS","GHR"],
	["Card II","4","WS","o","1","Mp.CF","-"," ","Hd"," ","ZS","MOR,AB,PHR"],
	["Card III","5","D","+","1","Ma","o","(2)","H,Hh","P","ZA","COP,GHR"],
	["Card III","6","WS","o","1","F","-"," ","Hd"," ","ZW","PHR"],
	["Card IV","7","W","o","1","FD","o"," ","(A)"," ","ZW"," "],
	["Card V","8","W","o","1","F","o"," ","A","P","ZW"," "],
	["Card V","9","D","o","7","F","u"," ","(A)"," "," "," "],
	["Card VI","10","W","o","1","F","o"," ","(A)"," ","ZW","MOR,DV1"],
	["Card VII","11","D","+","9","Ma.FY","o","(2)","Hd","P","ZD","AG,GHR"],
	["Card VIII","12","W","+","1","FMa.Fr.FC","o"," ","A,Na","P","ZW","INC1"],
	["Card VIII","13","D","v/+","4","FC.FV","o"," ","Ls"," ","ZA"," "],
	["Card VIII","14","DdS","o","99","FC","-"," ","Ad"," ","ZS","PER"],
	["Card IX","15","W","v","1","Ma.C"," "," ","Hx"," "," ","AB,PHR"],
	["Card X","16","W","+","1","Mp","u"," ","(H),Art"," ","ZW","GHR"],
	["Card X","17","DdS","+","22","F","-"," ","Hd,Id"," ","ZA","PHR"]];
	for(let j=0; j<AllResp.length; j++) {
		for(let i=0; i<12; i++) AResp[i].value = AllResp[j][i];
		addResp();
	}
}

function test3(){
	var AResp = document.getElementsByName("Resp");

	AllResp = [["Card I","1","WS","o","1","Ma","o"," ","Ad"," ","ZS","INC1,PHR"],
	["Card I","2","W","o","1","Ma","o","(2)","(H)"," ","ZW","GHR"],
	["Card II","3","W","+","1","FC.Ma","u","(2)","A"," ","ZW","COP,MOR,FAB1,GHR"],
	["Card II","4","D","+","3","FC'.ma","o"," ","Fi,Bt"," ","ZA"," "],
	["Card III","5","D","+","1","Ma","-","(2)","H,An,Cg","P","ZA","MOR,PER,COP,AG,PHR"],
	["Card IV","6","W","+","1","FV.Map.YF","-"," ","H,Na","P","ZA","AG,PHR"],
	["Card V","7","W","o","1","F","o"," ","A,Art","P","ZW","PER,DR1"],
	["Card V","8","W","o","1","FMp","o"," ","A"," ","ZW"," "],
	["Card VI","9","W","+","1","Mp.FY","-"," ","H,Ls"," ","ZW","PHR"],
	["Card VI","10","W","v/+","1","ma","u"," ","Na"," ","ZW"," "],
	["Card VII","11","D","+","2","Mp.ma","o","(2)","H","P","ZD","COP,GHR"],
	["Card VII","12","Dd","+","99","Ma.FY","-","(2)","H,Hx"," ","ZA","AG,PHR"],
	["Card VIII","13","D","+","1","FMa.FC","u","(2)","A,Bt","P","ZA"," "],
	["Card VIII","14","W","v","1","FC.ma","o"," ","Bt"," "," "," "],
	["Card IX","15","D","+","9","FC.ma","-"," ","An,Bl,Sx"," ","ZA"," "],
	["Card X","16","Dd","+","99","Mp.CF","-","(2)","A,Id"," ","ZA","INC1,PHR"]];
	for(let j=0; j<AllResp.length; j++) {
		for(let i=0; i<12; i++) AResp[i].value = AllResp[j][i];
		addResp();
	}
}

function test2(){
	var AResp = document.getElementsByName("Resp");

	AllResp = [["Card I","1","WS","o","1","FC'","o"," ","Art,(A)"," ","ZS","AB"],
	["Card I","2","W","+","1","F","u","(2)","Art,(H)"," ","ZA","GHR"],
	["Card II","3","W","+","1","FMa.FC'.CF","o","(2)","A,Bl"," ","ZW","AG,MOR,PHR"],
	["Card II","4","DS","+","5","ma.VF","u"," ","Sc,Cl"," ","ZW"," "],
	["Card III","5","D","+","1","Ma","o","(2)","H,Id","P","ZA","AG,GHR"],
	["Card III","6","D","o","3","F","u"," ","Sc"," "," "," "],
	["Card IV","7","W","+","1","Ma.FD.TF","o"," ","H,Cg,Na","P","ZA","MOR,PHR"],
	["Card V","8","W","o","1","FMa.FC'","u"," ","A"," ","ZW","AG,PHR"],
	["Card VI","9","W","o","1","FT","o"," ","Ad","P","ZW","MOR"],
	["Card VI","10","D","+","4","ma","o"," ","Sc,Na"," ","ZW"," "],
	["Card VI","11","D","v","1","C'"," "," ","An"," "," ","MOR"],
	["Card VII","12","W","+","1","Ma","o","(2)","H,Ls","P","ZW","AG,GHR"],
	["Card VIII","13","W","o","1","FC.FC'","o"," ","Art"," ","ZW","AB"],
	["Card VIII","14","DS","o","3","F","o"," ","An"," ","ZS","PER"],
	["Card IX","15","W","+","1","FD.FC.FV","u"," ","Art"," ","ZW"," "],
	["Card X","16","D","v","1","CF.mp","o"," ","Na,Art"," "," "," "],
	["Card X","17","D","+","10","FC","o","(2)","A"," ","ZA","FAB1"],
	["Card X","18","DS","o","11","FC'","-"," ","Xy"," ","ZS"," "],
	["Card X","19","D","+","6","Ma","o","(2)","H,Cg"," ","ZA","COP,GHR"]];
	for(let j=0; j<AllResp.length; j++) {
		for(let i=0; i<12; i++) AResp[i].value = AllResp[j][i];
		addResp();
	}
}