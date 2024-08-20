// Configurational Approach Norm

CANorm = [[["器質性腦損傷"],[4,6,9,10,12,13,14,16,26],[8.5,7,8,10,10,10,10,7,1],[2,1,2,2,2,2,2,2,1],[10,7]],
[["思覺失調症"],[1,2,3,6,8,10,11,12,13,15],[10,10,10,7.75,10,7,7,7,7,7],[2,2,1,1,1,1,2,1,1,2],[7,4]],
[["單極性憂鬱症"],[1,7,8,9,18],[4,10,10,10,1],[2,1,2,1,2],[6,4]],
[["精神官能症"],[1,7,8,9,18,19,23,25,26],[4,7,7,6,1,1,1,1,1],[2,2,1,2,2,2,2,1,1],[8,4]],
[["智能障礙"],[1,4,6,10,13,14,18,21],[7,4,10,10,10,5.5,1,1],[2,1,2,2,2,2,2,2],[8,5]],
[["青少年情緒困擾"],[1,2,3,6,9,11,14],[4,5,10,7.75,6,7,5.5],[2,1,2,2,2,2,2],[9,7]]];

// Interpretation Norm

IntNorm =
[["PPS_1","【from 1. 序列】【組織及計畫的態度與技巧】<br>排列過度精確且難因情境調整 -> 可能強迫<br>排列不規律或混亂 -> 焦慮, 激躁的思覺失調, 缺乏控制<br>右而左 -> 消極或反抗傾向<br>一圖一張 (或總共超過 2 張) -> 自我中心或對立特質"],
["PPS_2","【from 2. 首圖位置】【對其世界的定向】<br>非典型位置 -> 迴避與外界的連結<br>在中心且圖很大 -> 自戀, 自我中心, 被動對立"],
["PPS_3","【from 3. 空間使用】【情緒調適, 性格, 自我定向】<br>過度擴張 -> 敵意, 發洩, 武斷<br>過度侷限 -> 被動, 退縮, 孤僻 or 壓抑敵意, 受虐傾向 ex: paranoid 可能呈現圖小但空間、使用過度擴張"],
["PPS_4","【from 4. 相撞】【自我功能受損】<br>預期計畫能力不佳, 衝動, 難區辨圖形-背景關係<br>【其他解釋】<br>生理損傷 -> 周圍神經或肌肉受損 & 適於區辨器質性腦傷<br>發展因素 -> 7歲前常見相撞 運動控制及知覺敏感發展"],
["PPS_5","【from 5. 轉紙】【壓抑或潛在的攻擊或對立】紙與卡擺放不一，導致知覺失調及焦慮，進而產生轉紙或轉卡的衝動<br>不轉 -> 健康者抑制衝動<br>轉 -> 潛藏或被動對立"],
["PPS_6","【from 6. 閉合困難】【維持適切人際關係, 情緒適應】<br>-> 於人際關係中易感害怕<br>-> 整體情緒困擾"],
["PPS_7","【from 7. 交叉困難】【心理阻塞】<br>-> 猶豫不決, 強迫疑心, 畏懼<br>【人際關係困難】"],
["PPS_8","【from 8. 曲率困難】【情緒展現困難】<br>曲率增加 -> 情緒性及情緒反應過度<br>曲率減少 -> 情緒性減低及憂鬱低落<br>曲率不規律 -> 情緒行為不穩定(若同時曲率增加) -> 敵意展現"],
["PPS_9","【from 9. 角度改變】【情感 affective 刺激處理困難】情感控制及衝動控制困難<br>角度增加 (變鈍) -> 情感性減低<br>角度減少 (變尖銳) -> 情感性增加適於區辨器質性腦損傷"],
["PPS_10","【from 10. 知覺旋轉】【自我功能嚴重困擾】<br>成人旋轉角度大 -> 嚴重心理病理 <br>兒童旋轉角度大 -> 嚴重對立<br>輕度順時鐘旋轉 -> 憂鬱傾向<br>輕度逆時鐘旋轉 -> 對立傾向<br>沒有意識到旋轉錯誤 -> 思覺失調或器質性腦損傷<br>測試極限時無法修正 -> 更支持精神病或器質性腦損傷"],
["PPS_11","【from 11. 退化】【對創傷的嚴重且慢性防衛機制】【自我功能及整合的缺陷】<br>-> 思覺失調: 人格解構, 對慢性衝突不適切的補償<br>-> 強烈焦慮之精神官能症: 無效的防衛機制<br>-> 兒童可能發展延宕 (9 歲前常見退化)<br>-> 或 情緒問題, 攻擊行為"],
["PPS_12","【from 12. 簡化】【對外在客體投注 cathexis 減少】<br>-> 面對要求時 企圖減少心力耗損 (可能對立傾向或詐病)<br>-> 衝動控制, 執行功能困難"],
["PPS_13","【from 13. 破碎】【知覺-動作功能缺陷】【抽象及整合之運思能力受損】<br>適於區辨精神病 & 器質性腦損傷"],
["PPS_14","【from 14. 重疊困難】<br>適於區辨器質性腦損傷"],
["PPS_15","【from 15. 精緻化或塗鴉】【衝動控制困難】【強烈外顯的焦慮】【心智退化或腦傷】"],
["PPS_16","【from 16. 持續】【心智彈性】<br>-> 難轉換心智思維 (mindset)<br>-> 固著於已建立的心智思維<br>適於區辨器質性腦損傷"],
["PPS_17","【from 17. 重畫】【無適切預期性計畫】【強烈自我批評】<br>輕度 -> 目前有高焦慮"],
["OthFac_1","【from other1. 使用空間】【行為特質】<br>異常壓縮 (越多圖壓縮 則越支持此假設) -> 退縮, 害怕, 內隱敵意<br>異常擴張 (越多圖擴張 則越支持此假設) -> 過度自信, 叛逆, 自我中心<br>異常壓縮及異常擴張皆有 -> 矛盾行為模式 (approach-avoidance)"],
["OthFac_2","【from other2. 邊邊使用】【內隱焦慮】<br>-> 有內隱焦慮<br>-> 企圖透過外在支持以維持控制 (減低無能感)"],
["OthFac_3","【from other3. 刺激卡片位置移動】【壓抑或潛在的攻擊或對立】<br>(同轉紙的解釋)"],
["OthFac_4","【from other4. 尺寸整體增或減】<br>整體增大<br>-> (感受) 不適, 無能感<br>-> (行為) 代償, 外顯, 武斷<br>整體減小<br>-> (感受) 高焦慮, 疑心<br>-> (行為) 退縮, 被動, 抑制<br>極小<br> -> 自我功能破碎"],
["OthFac_5","【from other5. 尺寸逐漸增或減】<br>逐步增大<br>-> 易怒, 失控傾向, 衝動行為展現<br>逐步減小<br>-> 傾向於 退縮, 抑制, 憂鬱反應<br>其他解釋: 易身心症狀抱怨, 挫折忍受度低, 自我控制差"],
["OthFac_6","【from other6. 尺寸單獨增或減】【情緒困擾】【內在難以自在展現的性格歷程】<br>圖 A 圓形部分改變 -> 與對女性的態度有關<br>圖 A 菱形部分改變 -> 與對男性的態度有關<br>圖 7, 8 部分改變 -> 與性有關議題 (尤其陰莖)<br>青少年圖形尺寸不均 -> 發洩行為, 反社會傾向<br>垂直向尺寸增減 -> 與權威關係衝突有關<br>水平向或側邊尺寸增減 -> 與形成或維持人際關係有關"],
["OthFac_7","【from other7. 運筆軌跡偏離】<br>【人格特質】<br>離心軌跡 centrifugal -> 自信, 獨立自主<br>向心軌跡 centripetal -> 自我中心, 對立<br>【人際關係】<br>垂直向運筆困難 -> 與權威角色有人際關係困難<br>水平向運筆困難 -> 難維持適切之同儕關係<br>【行為】<br>逆時鐘 -> 主動, 外顯對立<br>順時鐘 -> 被動, 對立, 自我中心, 憂鬱"],
["OthFac_8","【from other8. 運筆軌跡不一致】<br>可能精神狀態阻塞 (psychic blocking)<br>作風劇變時的圖可能對其具有特殊或象徵性的意義<br>持續想要發洩強烈的內在衝突"],
["OthFac_9","【from other9. 筆觸品質】<br>筆觸過重 -> 焦慮外顯<br>兒童筆觸過重 -> 敵意, 攻擊性<br>筆觸過輕 -> 焦慮內化或被抑制<br>筆觸品質不一 -> 運動控制差, 神經問題, 焦慮<br>素描 -> 感到不適 且有代償企圖"]];




function submitB(){

//get input
	var count = 0;
	var PPS_factors = [];
	var OTH_factors = [];
	var PPS_TotalScore = 0;
	var IntTrueFalse = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
	for(let i=1; i<18; i++){
		var item = document.getElementsByName("PPS_"+i);
		for(let j=0; j<item.length; j++){
			if(item[j].checked){
				PPS_factors.push(item[j].value);
				PPS_TotalScore += Number(item[j].value);
				if(Number(item[j].value) > 1) IntTrueFalse[i-1] = true;
				break;
			}
		}
	}
	for(let i=1; i<10; i++){
		var item = document.getElementsByName("OthFac_"+i);
		if(item[0].checked){
			OTH_factors.push(2);
			IntTrueFalse[i+16] = true;
		}else{
			OTH_factors.push(0);
		}
	}


// 測試文字
//	var testText1 = document.getElementById('testText');
//	testText1.innerHTML = OTH_factors.join();

// Psychopathology Scale 總分
	document.getElementById("PsychopathologyScaleScore").innerHTML = "&nbsp" + PPS_TotalScore;

// Psychopathology Scale 常模組別比較
	var PPS_Norm = [[32.8, 53, 61.7, 66.2, 78.3, 97.1, 101.1], [4.9, 9.5, 8.7, 6.4, 11.8, 12.1, 14.5]];
	var PPS_NormName = ["一般人組", "門診精神官能症組", "住院精神官能症組", "單極憂鬱症組", "門診思覺失調症組", "慢性思覺失調症組", "器質性腦損傷組"];
	var ptGroup = [];
	var minDiff = PPS_TotalScore;
	for(let i=0; i<7; i++){
		if(Math.abs(PPS_TotalScore - PPS_Norm[0][i]) < minDiff){
			ptGroup = [PPS_NormName[i], PPS_Norm[0][i], PPS_Norm[1][i]];
			minDiff = PPS_TotalScore - PPS_Norm[0][i];
		}
	}
	document.getElementById("NormCompare").innerHTML = "&nbsp個案較接近" + ptGroup[0] + "(平均數: " + ptGroup[1] + ", 標準差: " + ptGroup[2] + ")";



// Configurational Approach
	//show raw score
	var Raw_PPS_forshow = document.querySelectorAll('[data-label="原始分數"]');
	for(let i=1; i<18; i++) Raw_PPS_forshow[i].innerHTML = PPS_factors[i-1];
	count = 18;
	for(var i of [18, 19, 21, 23, 25, 26]){
		if(OTH_factors[i-18] == 2){
			Raw_PPS_forshow[count].innerHTML = "Y";
		}else{
			Raw_PPS_forshow[count].innerHTML = "N";
		}
		count += 1;
	}
	//compare configuration
	var SigGrp = [[],[]];
	var CAResult = [0,0,0,0,0,0];
	var ALL_factors = PPS_factors.concat(OTH_factors);
	for(let i=0; i<6; i++){
		GrpNow = CANorm[i];
		for(let j=0; j<GrpNow[1].length; j++){
			if(Number(ALL_factors[GrpNow[1][j]-1]) >= GrpNow[2][j]){
				CAResult[i] += GrpNow[3][j];
				var forBacGro = document.querySelectorAll('[data-cell="c'+ (i+1) +'_'+ GrpNow[1][j] +'"]');
				forBacGro[0].style = "background-color: #FFE4CA";
				forBacGro[1].style = "background-color: #FFE4CA";
			}
		}
		document.getElementById("WeiGrp"+(i+1)).innerHTML = CAResult[i];
		if(CAResult[i] >= GrpNow[4][0]){
			document.querySelectorAll('[data-cell="cut_score"]')[i].style = "background-color: #FFE4CA";
			SigGrp[0].push(GrpNow[0][0]);
		}else if(CAResult[i] >= GrpNow[4][1]){
			document.querySelectorAll('[data-cell="margin_score"]')[i].style = "background-color: #FFE4CA";
			SigGrp[1].push(GrpNow[0][0]);
		}
	}
	// description
	var CADescrib = document.getElementById("CADescrib");
	if(SigGrp[0] != []) CADescrib.innerHTML = "<br>組型分析結果顯示:<br>個案於 " + SigGrp[0].join(", ") + " 組別達到切截分數" + "<br>表示其作畫品質表現與此類病人之表現非常相近";
	if(SigGrp[1] != []) CADescrib.innerHTML += "<br><br>另，其於 " + SigGrp[1].join(", ") + " 組別達邊緣分數，但尚未達切截分數";



// Projective Analysis
	var ProjIntText = document.getElementById("ProjInt");
	ProjIntOutp = "";
	for(let i=0; i<IntNorm.length; i++) if(IntTrueFalse[i]) ProjIntOutp += ("<br><br>" + IntNorm[i][1]);
	ProjIntText.innerHTML = ProjIntOutp;
}



function Reload(){
	document.location.reload();
}



function test1(){
	var RawScore = [1,1,1,0,3,1,2,1,3,3,1,3,0,0,3,3,4]
	var RawScoreOth = [0,0,1,1,0,0,0,1,1]

	for(let i=1; i<18; i++){
		var item = document.getElementsByName("PPS_"+i);
		item[RawScore[i-1]].checked = true;
	}

	for(let i=1; i<10; i++){
		var item = document.getElementsByName("OthFac_"+i);
		item[RawScoreOth[i-1]].checked = true;
	}
}


function test2(){
	var RawScore = [3,2,1,6,3,4,3,3,5,3,3,3,3,2,3,3,4];
	var RawScoreOth = [1,1,1,1,1,1,1,1,1];

	for(let i=1; i<18; i++){
		var item = document.getElementsByName("PPS_"+i);
		item[RawScore[i-1]].checked = true;
	}

	for(let i=1; i<10; i++){
		var item = document.getElementsByName("OthFac_"+i);
		item[RawScoreOth[i-1]].checked = true;
	}
}