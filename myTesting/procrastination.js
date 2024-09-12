var negItems = [3, 4, 6, 8, 11, 13, 14, 15, 18, 20];
var itemFac = [null, 1, 4, 4, 3, 2, null, 2, null, 1, 4, 1, 4, 1, 1, 3, 3, 2, 1, 2];
var FacWei = [20, 6, 4, 3, 4];

function GetPR(ProcScore){
	var TaiwanNorm = [26, 27, 35, 37, 38, 39, 39, 39, 40, 42, 42, 42, 43, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 47, 47, 47, 47, 47, 47, 48, 48, 48, 48, 49, 49, 49, 49, 49, 49, 49, 50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 53, 53, 53, 53, 53, 53, 53, 54, 54, 54, 54, 55, 55, 55, 55, 55, 55, 55, 55, 56, 56, 56, 56, 57, 57, 57, 57, 57, 57, 58, 58, 58, 58, 58, 58, 58, 58, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 61, 61, 61, 61, 61, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 67, 67, 67, 67, 67, 67, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 71, 71, 71, 71, 71, 71, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 73, 73, 73, 73, 73, 73, 73, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 75, 75, 75, 75, 75, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 79, 79, 79, 79, 80, 80, 80, 80, 81, 81, 81, 81, 82, 82, 82, 83, 83, 84, 84, 85, 85, 85, 85, 85, 85, 87, 87, 89, 89, 91, 93, 94, 97];
	var Rank = [];
	if(ProcScore > 96) {
		Rank = [343, 344];
	}else{
		for(let i=0; i<344; i++) if((ProcScore-1) < TaiwanNorm[i]) {Rank.push(i); break;}
		for(let i=0; i<344; i++) if(ProcScore < TaiwanNorm[i]) {Rank.push(i); break;}
	}

	return ((Rank[0] + Rank[1])/6.88).toFixed(2);
}

function SubmitBtn(){
	var RawScores = [];

	for(let i=1; i<21; i++) for(let j=0; j<5; j++) if(document.getElementsByName("Proc"+i)[j].checked) RawScores.push(j+1);

	if(RawScores.length < 20) {
		alert("還有" + (20 - RawScores.length) + "題還沒填答，請填完20題哦！");
		return null;
	}

	ScaleScores = [0,0,0,0,0];
	MeanScores = [null,null,null,null,null];
	for(let i=0; i<20; i++){
		if(negItems.includes(i+1)){
			ScaleScores[0] += (6 - RawScores[i]);
			if(itemFac[i]) ScaleScores[itemFac[i]] += (6 - RawScores[i]);
		}else{
			ScaleScores[0] += RawScores[i];
			if(itemFac[i]) ScaleScores[itemFac[i]] += RawScores[i];
		}
	}


	for(let i=0; i<5; i++) MeanScores[i] = (ScaleScores[i]/FacWei[i]).toFixed(2);


	var resultText = document.getElementById("Score")
	resultText.innerHTML = "你的拖延量表總分是: " + ScaleScores[0] + " 分<br>你比全台 " + GetPR(ScaleScores[0]) + "% 的人還要愛拖延";
	resultText.style = "background-color: #fff; width = 80%; padding: 20px;"

	document.getElementById("InterTable").style.display = "block";


	// Radar
	// first clean the canvas
	var radarDiv = document.getElementById('RadarDiv');

	document.getElementById("RadarChart").remove();
	var newCanvas = document.createElement('canvas');
	newCanvas.setAttribute('id','RadarChart');
	newCanvas.setAttribute('style','padding: 10px; background-color: #fff');
	radarDiv.appendChild(newCanvas);

	var radarChart = document.getElementById("RadarChart");


	new Chart(radarChart,{
		data: {
			labels: ['Total', 'Delay', 'Poor Time Management', 'Until Deadline', 'Slow'],
			datasets: [{
				type: 'radar',
				label: 'Subscale',
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
			scale: {
				ticks: {
					font: {
						size: 20,
					},
					maxTicksLimit: 6,
				},
				max: 5,
				min: 0,
			},
			scales: {
				r: {
					pointLabels: {
						font: {
							size: 24
						}
					}
				}
			}
		}
	})
}


function PrintBtn(){
	window.print();
}

function TestBtn(){
	Person1 = [3,4,1,1,1,1,3,2,3,3,2,3,1,1,1,3,3,1,4,3];
	for(let i=1; i<21; i++) document.getElementsByName(("Proc"+i))[Person1[(i-1)]].checked = "checked";
}

