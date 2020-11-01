const counters = document.querySelector('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');

        const count = +counter.innerText;

        const inc = target / speed;
        
        if (count < target) {
            count.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    updateCount();
});
