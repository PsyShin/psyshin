
document.addEventListener('DOMContentLoaded', function () {
	var hamburgers = document.querySelectorAll('.hamburger');

    hamburgers.forEach(function (hamburger) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('is-active');
            var navigation = document.querySelector('.navigation');
            if (navigation.classList.contains('show')) {
            	navigation.classList.remove('show');
            } else {
            	navigation.classList.add('show');
            }
        });
    });

    document.getElementById('DSMopen').addEventListener('click', function(){
        var password = '';
        password=prompt('這裡是管制區，要跟管理員索取密碼才能放行哦！\n輸入密碼:','');
        if (password != null) {
	    if (password == 'DSM5' | password == 'DSM5TR') {
		window.open(password + '/' + password + '.html')
	    }else{
            	window.open('myTesting/' + password + ".html");
	    }
        };
    });

    document.getElementById('AboutShin').addEventListener('click', function(){
        alert("心理小秘書是由Shin心理師於醫院爆肝之際\n又投入更多新鮮的肝孵育而來\n雖然心理小秘書剛出生\n但他會慢慢成長茁壯\n還望各位夥伴接納與關懷\n\n另外Shin心理師熱愛大海\n網頁的所有背景都是Shin親手拍攝\n而水下的照片也是由Shin潛水下去拍攝的\n但是Shin是潛水孤兒\n可以認領我去潛水 世界各地都可以 哭了");
    });

    document.getElementById('BSRSBtn').addEventListener('click', function(){
        document.getElementById('BSRS_Dialog').showModal();
    });

    document.getElementById('BSRSBtn2').addEventListener('click', function(){
        document.getElementById('BSRS_Dialog').showModal();
    });

    document.getElementById('BSRS_closeBtn').addEventListener('click', function(){
        document.getElementById('BSRS_Dialog').close();
    });

    document.getElementById('BSRS_OKBtn').addEventListener('click', function(){
        //get raw
        var BSRS_raw = [];
        for(let i=0; i<6; i++) for(let j=0; j<5; j++) if(document.getElementsByName("BSRS" + (i+1))[j].checked) BSRS_raw.push(j);

        if(BSRS_raw.length < 6){
            alert('請填完6題再按下算分哦～');
            return null;
        }

        var BSRS_TotalScore = 0;
        for(let i=0; i<5; i++) BSRS_TotalScore += BSRS_raw[i];
        
        var BSRS_Inter = "";
        if(BSRS_TotalScore <= 5) BSRS_Inter = "一般正常範圍";
        if(BSRS_TotalScore > 5 & BSRS_TotalScore <= 9) BSRS_Inter = "輕度情緒困擾，建議找親友談談，抒發情緒";
        if(BSRS_TotalScore > 9 & BSRS_TotalScore <= 14) BSRS_Inter = "中度情緒困擾，建議尋求心理衛生或精神醫療專業諮詢";
        if(BSRS_TotalScore > 14) BSRS_Inter = "重度情緒困擾，建議尋求精神醫療專業諮詢";
        if(BSRS_raw[5] >= 2) BSRS_Inter = "有自殺想法評分為2分以上時，建議尋求精神醫療專業諮詢";

        document.getElementById("BSRS_result").innerHTML = "得分: " + BSRS_TotalScore + "<br>說明: " + BSRS_Inter;
    });
});


