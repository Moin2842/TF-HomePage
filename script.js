(function () {
    class Flip {
        constructor(el) {
            this.el = $(el);
            this.currentStep = 0;
        }

        next() {
            var currentStepEl = this.el.find(`.step${this.currentStep}`);
            var nextStepNum = this.currentStep + 1;
            var nextStepEl = this.el.find(`.step${nextStepNum}`);

            // If next step exists, flip to it
            if (nextStepEl.length) {
                currentStepEl.removeClass('set').addClass('down');
                nextStepEl.removeClass('down').addClass('set');
                this.currentStep++;
            } else {
                // Reset the steps
                this.el.find(".step").removeClass('set down');
                this.currentStep = 0;
                this.el.find('.step0').addClass('set');
            }
        }
    }

    $(document).ready(function () {
        var f = new Flip(document.getElementById('flipper'));
        setInterval(function () {
            f.next();
        }, 5000);
    });

})();

$(function () {
    $('.scroll').click(function () {
        $('html, body').animate({ scrollTop: $('section.about-area').offset().top }, 'slow');
        return false;
    });
});

//   Award-Logo Slider

$(function () {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
});

// Counter-Section

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 800; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Calculate the increment
            const increment = target / speed;

            // Check if the counter is at the target
            if (count < target) {
                // Add increment to current value
                counter.innerText = Math.ceil(count + increment);
                // Call the function again after some time
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

// Service Card Tilt

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});
