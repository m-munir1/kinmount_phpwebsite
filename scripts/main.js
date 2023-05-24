
addEventListener('scroll', (event) => {
    // console.log('scrolled ', isFixed, window.scrollY );
    var element = document.getElementById('navbar-example2');
    var navUlElement = document.querySelectorAll('.nav-link');
    var navBrand = document.getElementById('navbar-brand');

    if (window.scrollY > 50 ) {

        if (element.className && !element.className.includes("fixed-top")) {
            element.className += " " + "fixed-top navbar-fixed";

            // navUlElement.forEach((node) => {
            //     node.setAttribute('style', 'color: black !important');
            // });

            // navBrand.setAttribute('style', 'color: black !important;');
            
        }
        
    } else {
        element.classList.remove("fixed-top");
        element.classList.remove("navbar-fixed");

        navUlElement.forEach((node) => {
            // node.setAttribute('style', 'color: white !important');
        });

        // navBrand.setAttribute('style', 'color: white !important');
    }

});
