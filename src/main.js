

var acc = document.querySelectorAll('.accordion');

acc.forEach(function(el) {
    el.addEventListener('click', function() {
        this.classList.toggle('active');

        var panel = this.nextElementSibling;
        if( panel.style.display === 'block') {
            panel.classList.remove('fade-in-top');
            panel.classList.add('fade-out-top');

            panel.addEventListener('animationend', function handler() {
                panel.style.display = 'none';
                panel.classList.remove('fade-out-top');
                panel.removeEventListener('animationend', handler);
            });
        }
        else{
            panel.style.display = 'block';
            panel.classList.remove('fade-out-top');
            panel.classList.add('fade-in-top');

        }
    })
})



