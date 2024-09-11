
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
            location.href= password + '/' + password + ".html";
        };
    });

    document.getElementById('AboutShin').addEventListener('click', function(){
        alert("心理小秘書是由Shin心理師於醫院爆肝之際\n又投入更多新鮮的肝孵育而來\n雖然心理小秘書剛出生\n但他會慢慢成長茁壯\n還望各位夥伴接納與關懷\n\n另外Shin心理師熱愛大海\n網頁的所有背景都是Shin親手拍攝\n而水下的照片也是由Shin潛水下去拍攝的\n但是Shin是潛水孤兒\n可以認領我去潛水 世界各地都可以 哭了");
    });
});


