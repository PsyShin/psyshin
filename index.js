
document.addEventListener('DOMContentLoaded', function () {
	var hamburgers = document.querySelectorAll('.hamburger');
    var DSMopens = document.querySelectorAll('.DSMopen');

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

    DSMopens.forEach(function (DSMopen){
        DSMopen.addEventListener('click', function(){
            var password = ''
            password=prompt('這裡是管制區，要跟管理員索取密碼才能放行哦！\n輸入密碼:','');
            if (password != null) {
                location.href= password + '/' + password + ".html";
            }
        })
    });
});


