ScaleCateg = [1,1,3,1,1,2,2,2,3,4,null,4,3,3,3,2,null,4,4,4];


function SubmitBtn(){
	var RawScores = [];

	for(let i=1; i<21; i++) for(let j=0; j<3; j++) if(document.getElementsByName("PCL"+i)[j].checked) RawScores.push(j);

	if(RawScores.length < 20) {
		alert("還有" + (20 - RawScores.length) + "題還沒填答，請填完20題哦！");
		return null;
	}

	var ScaleScores = [0,0,0,0,0];
	for(let i=0; i<20; i++){
		ScaleScores[0] += RawScores[i];
	if(ScaleCateg[i] != null) ScaleScores[ScaleCateg[i]] += RawScores[i];
	}

	var ScalePort = [null, null, null, null];
	var NumbByCateg = [4,4,5,5];
	for(let i=0; i<4; i++) ScalePort[i] = ScaleScores[i+1]/NumbByCateg[i];


	if(ScaleScores[0] > 30) {
		var resultText = "得分: " + ScaleScores[0] + "<br>超過臨界值 (30)，顯示受評者很可能有心理病態特質。";
	}else{
		var resultText = "得分: " + ScaleScores[0] + "<br>未超過臨界值 (30)，顯示受評者應不具有心理病態特質。";
	}

	document.getElementById("Score").innerHTML = resultText;


	// barplot
	var barDiv = document.getElementById('BarDiv');
	barDiv.style.display = "block";

	document.getElementById("BarChart").remove();
	var newCanvas = document.createElement('canvas');
	newCanvas.setAttribute('id','BarChart');
	newCanvas.setAttribute('style','padding: 10px; background-color: #fff');
	barDiv.appendChild(newCanvas);

	var barChart = document.getElementById("BarChart");


	new Chart(barChart,{
		data: {
			labels: ['人際', '情感', '生活風格', '反社會'],
			datasets: [{
				type: 'bar',
				label: '各向度表現平均 (範圍: 0 - 2)',
				data: ScalePort,
				backgroundColor: 'rgba(255, 99, 132, 0.2)'
			}]
		},
		options: {
			scales: {
				y: {
					max: 2,
					min: 0
				}
			}
		}
	})
}



function TestBtn(){
	Person1 = [2,2,2,2,2,2,2,0,2,1,2,0,0,1,0,0,2,0,0,0];
	for(let i=1; i<21; i++) document.getElementsByName(("PCL"+i))[Person1[(i-1)]].checked = "checked";
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