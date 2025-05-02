
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

    document.getElementById('AboutShin').addEventListener('click', function(){
        alert("心理小秘書誕生的初衷是\n協助心理師處理繁瑣又沒有成長性的查表工作\n解放心理師的時間\n讓心理師能有更多的時間獨自升級\n\n雖然心理小秘書剛出生\n但他會慢慢成長茁壯\n還望各位夥伴接納與關懷\n\n如果有發現哪家醫院誤會了心理小秘書的初衷\n把小秘書拿來斂財\n逼迫心理師執行更多的心理衡鑑\n請務必聯繫小秘書（寄信給我們）\n我們將盡力封鎖該院IP，並說服您離職");
    });
});


