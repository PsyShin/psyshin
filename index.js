
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
});