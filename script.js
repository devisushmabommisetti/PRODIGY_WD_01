/* ================================================= */
/* SELECT ELEMENTS */
/* ================================================= */

const navbar =
    document.getElementById("navbar");

const menuButton =
    document.querySelector(".menu-button");

const navLinks =
    document.querySelector(".nav-links");

const navItems =
    document.querySelectorAll(".nav-item");


/* ================================================= */
/* SCROLL EFFECT */
/* ================================================= */

window.addEventListener("scroll", function() {


    /* Check Scroll Position */

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

});



/* ================================================= */
/* MOBILE MENU */
/* ================================================= */

menuButton.addEventListener(
    "click",
    function() {

        navLinks.classList.toggle("show");

    }
);



/* ================================================= */
/* ACTIVE NAVIGATION LINK */
/* ================================================= */

navItems.forEach(function(item) {


    item.addEventListener(
        "click",
        function() {


            /* Remove Active Class */

            navItems.forEach(
                function(link) {

                    link.classList.remove(
                        "active"
                    );

                }
            );


            /* Add Active Class */

            this.classList.add(
                "active"
            );


            /* Close Mobile Menu */

            navLinks.classList.remove(
                "show"
            );

        }
    );

});



/* ================================================= */
/* CHANGE ACTIVE LINK WHEN SCROLLING */
/* ================================================= */

window.addEventListener(
    "scroll",
    function() {


        /* Get Current Scroll Position */

        let currentSection = "";


        /* Select All Sections */

        const sections =
            document.querySelectorAll(
                "section"
            );


        sections.forEach(
            function(section) {


                const sectionTop =
                    section.offsetTop;


                const sectionHeight =
                    section.clientHeight;


                if (
                    window.scrollY >=
                    sectionTop -
                    sectionHeight / 3
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        /* Update Navigation */

        navItems.forEach(
            function(item) {


                item.classList.remove(
                    "active"
                );


                if (
                    item.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);