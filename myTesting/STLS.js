var intimateName = null;
var AllTypesEx = [["完滿的愛",[129,123,131],"完滿的愛: 包含了所有的愛情三元素 (親密、激情、承諾)，是 Sternberg 認為的完滿的愛。"],["愚昧的愛", [93,123,131], "愚昧的愛: 有激情、承諾，但不具有親密的愛。像是閃婚，承諾通常是基於短暫的激情，而非基於更穩定的親密情感連結，容易造成最後離婚收場。"],["陪伴的愛", [129,73,131], "陪伴的愛: 有親密、承諾，但不具有激情的愛。像許多步入晚期的婚姻關係，激情逐漸褪色，關係轉為靈魂伴侶的姿態 (老夫老妻般)。"],["浪漫的愛", [129,123,85], "浪漫的愛: 有親密、激情，但不具有承諾的愛。如同羅密歐與茱麗葉般充滿浪漫色彩的愛情，有著強烈且親密的情感連結與渴望結合的激情，然而卻是難以維持承諾的悲劇。"],["空洞的愛", [93,73,131], "空洞的愛: 僅有承諾，不具有親密、激情的愛。如有政治或經濟利益考量的婚約，僅有婚約承諾，但不存在任何情感連結與激情成分，可謂沒有任何愛的空泛關係。"],["癡迷的愛", [93,123,85], "癡迷的愛: 僅有激情，不具有親密、承諾的愛。如一見鍾情 (激情的情)，僅存在短暫激情的渴求，像見到暗戀對象而心跳加速、呼吸急促、大腦混亂，容易發展出不具親密與承諾的激情砲友關係。"],["喜歡", [129,73,85], "喜歡: 僅有親密，不具有激情、承諾的愛。如同許多朋友關係，喜歡或欣賞對方是基於對他的認識及相互理解，但不存在激情與承諾。"],["沒有愛", [93,73,85], "沒有愛: 不具有任何愛的元素，就...沒有愛。"]];


function NameCheck(){
	intimateName = document.getElementById("IntimateName").value;
	var AllnameInItem = document.getElementsByName("nameInItem");
	for(let i=0; i<AllnameInItem.length; i++) AllnameInItem[i].innerHTML = intimateName;
}



function SubmitBtn(){
	var RawScores = [];

	for(let i=1; i<46; i++) for(let j=0; j<9; j++) if(document.getElementsByName("STLS"+i)[j].checked) RawScores.push(j+1);

	if(intimateName == null) {
		alert("請輸入你想測試與誰的親密關係！");
		return null;
	}

	if(RawScores.length < 45) {
		alert("還有" + (45 - RawScores.length) + "題還沒填答，請填完45題哦！");
		return null;
	}

	ScaleScores = [0,0,0];
	MeanScores = [null,null,null];
	for(let i=0; i<15; i++){
		ScaleScores[0] += RawScores[i];
		ScaleScores[1] += RawScores[i+15];
		ScaleScores[2] += RawScores[i+30];
	}


	for(let i=0; i<3; i++) MeanScores[i] = (ScaleScores[i]/15).toFixed(2);


//	var resultText = document.getElementById("Score");
//	resultText.innerHTML = ScaleScores;
//	resultText.style = "background-color: #fff; width = 80%; padding: 20px;";


	document.getElementById("InterTable").style.display = "block";
	var resultText = document.getElementsByName("ScoreTable");
	for(let i=0; i<3; i++) resultText[i].innerHTML = ScaleScores[i];

	var myLabel = "與" + intimateName + "的親密關係";
	document.getElementById("NameInTable").innerHTML = myLabel;

	if(ScaleScores[0] > 111){
		if(ScaleScores[1] > 98){
			if(ScaleScores[2] > 108){var myType = AllTypesEx[0];}else{var myType = AllTypesEx[3];}
		}else{
			if(ScaleScores[2] > 108){var myType = AllTypesEx[2];}else{var myType = AllTypesEx[6];}
		}
	}else{
		if(ScaleScores[1] > 98){
			if(ScaleScores[2] > 108){var myType = AllTypesEx[1];}else{var myType = AllTypesEx[5];}
		}else{
			if(ScaleScores[2] > 108){var myType = AllTypesEx[4];}else{var myType = AllTypesEx[7];}
		}
	}
	document.getElementById("ResultInTable").innerHTML = myLabel + "是屬於" + myType[2];


	// Radar
	// first clean the canvas
	var radarDiv = document.getElementById('RadarDiv');
	radarDiv.style.display = "block";

	document.getElementById("RadarChart").remove();
	var newCanvas = document.createElement('canvas');
	newCanvas.setAttribute('id','RadarChart');
	newCanvas.setAttribute('style','padding: 10px; background-color: #fff');
	radarDiv.appendChild(newCanvas);

	var radarChart = document.getElementById("RadarChart");


	new Chart(radarChart,{
		data: {
			labels: ['親密', '激情', '承諾'],
			datasets: [{
				type: 'radar',
				label: '常模平均',
				data: [(111/15), (98/15), (108/15)],
				backgroundColor: 'rgba(184, 111, 111, 0.2)',
				borderColor: 'rgb(184, 111, 111)',
				pointBackgroundColor: 'rgb(184, 111, 111)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(184, 111, 111)'
			},{
				type: 'radar',
				label: myLabel,
				data: MeanScores,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)'
			}]
		},
		options: {
			responsive: true,
			scale: {
				ticks: {
					font: {
						size: 10,
					},
					maxTicksLimit: 6,
				},
				max: 9,
				min: 1,
			},
			scales: {
				r: {
					pointLabels: {
						font: {
							size: 12
						}
					}
				}
			}
		}
	})
}


function TestBtn(){
	Person1 = [5,7,3,7,6,4,7,8,6,7,6,5,3,6,3,7,8,7,8,5,3,6,3,7,3,6,3,7,5,6,7,6,3,3,3,2,4,7,2,8,3,7,6,8,3];
	for(let i=1; i<46; i++) document.getElementsByName(("STLS"+i))[Person1[(i-1)]].checked = "checked";

	document.getElementById("IntimateName").value = "隔壁班阿志";
	NameCheck();
}



function LoveTypes(typeTF){
	if(typeTF[0]){
		if(typeTF[1]){
			if(typeTF[2]){var myType = AllTypesEx[0];}else{var myType = AllTypesEx[3];}
		}else{
			if(typeTF[2]){var myType = AllTypesEx[2];}else{var myType = AllTypesEx[6];}
		}
	}else{
		if(typeTF[1]){
			if(typeTF[2]){var myType = AllTypesEx[1];}else{var myType = AllTypesEx[5];}
		}else{
			if(typeTF[2]){var myType = AllTypesEx[4];}else{var myType = AllTypesEx[7];}
		}
	}

	var MeanScores = [];
	for(let i=0; i<3; i++) MeanScores[i] = myType[1][i]/15;

	var typeInterText = document.getElementById("typeInter");
	typeInterText.innerHTML = myType[2];
	

	var radarDiv = document.getElementById('RadarDiv2');
	radarDiv.style.display = "block";

	document.getElementById("RadarChart2").remove();
	var newCanvas = document.createElement('canvas');
	newCanvas.setAttribute('id','RadarChart2');
	newCanvas.setAttribute('style','padding: 10px; background-color: #fff');
	radarDiv.appendChild(newCanvas);

	var radarChart = document.getElementById("RadarChart2");


	new Chart(radarChart,{
		data: {
			labels: ['親密', '激情', '承諾'],
			datasets: [{
				type: 'radar',
				label: '常模平均',
				data: [(111/15), (98/15), (108/15)],
				backgroundColor: 'rgba(184, 111, 111, 0.2)',
				borderColor: 'rgb(184, 111, 111)',
				pointBackgroundColor: 'rgb(184, 111, 111)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(184, 111, 111)'
			},{
				type: 'radar',
				label: myType[0],
				data: MeanScores,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)'
			}]
		},
		options: {
			responsive: true,
			scale: {
				ticks: {
					font: {
						size: 10,
					},
					maxTicksLimit: 6,
				},
				max: 9,
				min: 1,
			},
			scales: {
				r: {
					pointLabels: {
						font: {
							size: 12
						}
					}
				}
			}
		}
	})
}