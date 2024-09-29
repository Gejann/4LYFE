document.addEventListener('DOMContentLoaded', function() {
    var mainHeading = document.querySelector('#mainHeading');
    var getStartedBtn = document.querySelector('.cta-button'); // "Get Started" button
    var productsBtn = document.querySelector('#productsBtn'); 
    var solutionsSection = document.querySelector('#solution'); 
    var aboutUsSection = document.querySelector('#about-us'); 
    var developmentSection = document.querySelector('#development'); 
    var portfolioSection = document.querySelector('#portfolio'); 
    var teamSection = document.querySelector('#developers'); 
    var contactSection = document.querySelector('#contact'); 

    var aboutUsNav = document.querySelector('nav a:nth-child(1)'); 
    var developmentNav = document.querySelector('nav a:nth-child(2)'); 
    var solutionsNav = document.querySelector('nav a:nth-child(3)'); 
    var portfolioNav = document.querySelector('nav a:nth-child(4)'); 
    var teamNav = document.querySelector('nav a:nth-child(5)'); 
    var contactNav = document.querySelector('nav a:nth-child(6)');

    getStartedBtn.addEventListener('click', function() {
        solutionsSection.scrollIntoView({ behavior: 'smooth' });
    });

    productsBtn.addEventListener('click', function() {
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    });

    aboutUsNav.addEventListener('click', function() {
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    });

    developmentNav.addEventListener('click', function() {
        developmentSection.scrollIntoView({ behavior: 'smooth' });
    });

    solutionsNav.addEventListener('click', function() {
        solutionsSection.scrollIntoView({ behavior: 'smooth' });
    });

    portfolioNav.addEventListener('click', function() {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });

    teamNav.addEventListener('click', function() {
        teamSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactNav.addEventListener('click', function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    function setupHoverEffect(button, newText, originalText, direction) {
        button.addEventListener('mouseover', function() {
            if (direction === 'left') {
                mainHeading.style.transform = 'translateX(-5%)'; 
            } else if (direction === 'right') {
                mainHeading.style.transform = 'translateX(5%)'; 
            }
            mainHeading.style.opacity = '0'; 
            mainHeading.style.textShadow = '0 0 10px rgba(106, 13, 173, 0), 0 0 20px rgba(106, 13, 173, 0)'; 

            setTimeout(function() {
                mainHeading.innerHTML = newText;
                mainHeading.style.transform = direction === 'left' ? 'translateX(5%)' : 'translateX(-5%)'; 
                mainHeading.style.opacity = '0'; 
            }, 150);

            setTimeout(function() {
                mainHeading.style.transform = 'translateX(0)';
                mainHeading.style.opacity = '1'; 
                mainHeading.style.textShadow = '0 0 10px rgba(106, 13, 173, 0.5), 0 0 20px rgba(106, 13, 173, 0.3)'; 
            }, 150); 
        });

        button.addEventListener('mouseout', function() {     
            mainHeading.style.transform = direction === 'left' ? 'translateX(5%)' : 'translateX(-5%)';
            mainHeading.style.opacity = '0';
            mainHeading.style.textShadow = '0 0 10px rgba(106, 13, 173, 0), 0 0 20px rgba(106, 13, 173, 0)'; 

            setTimeout(function() {
                mainHeading.innerHTML = originalText;
                mainHeading.style.transform = direction === 'left' ? 'translateX(5%)' : 'translateX(-5%)';
                mainHeading.style.opacity = '0';
            }, 150);

            setTimeout(function() {
                mainHeading.style.transform = 'translateX(0)';
                mainHeading.style.opacity = '1';
                mainHeading.style.textShadow = '0 0 10px rgba(106, 13, 173, 0.5), 0 0 20px rgba(106, 13, 173, 0.3)'; 
            }, 150);
        });
    }

    setupHoverEffect(getStartedBtn, 'Explore Our Latest Solutions!', 'Welcome to 4LYFE Capital', 'left');
    setupHoverEffect(productsBtn, 'Get To Know Us More!', 'Welcome to 4LYFE Capital', 'right');
});



        function animateOnScroll() {
            const elements = document.querySelectorAll('.section h2, .section p, .portfolio-item, .developer-card');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.style.opacity = 1;
                    el.style.transform = 'translateY(0)';
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        document.getElementById('texthead').addEventListener('click', function() {
            location.reload();
        });



  

