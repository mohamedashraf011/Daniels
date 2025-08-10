const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 700) {
                nav.classList.add('active_nav');
            } else {
                nav.classList.remove('active_nav');
            }
});



function animateCounter(counter) {
    let target = +counter.getAttribute("data-count");
    let count = 0;
    let speed = target / 50;

    function updateCount() {
        count += speed;
        if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.textContent = target;
        }
    }
    updateCount();
}

let counters = document.querySelectorAll(".counter");

let options = {
    threshold: 0.6
};

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.textContent = "0";
            animateCounter(entry.target);
        }
    });
}, options);

counters.forEach(counter => {
    observer.observe(counter);
});

