
/* =================================
   MITHU.DEV - MAIN JAVASCRIPT
================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("MITHU.DEV Portfolio Initialized 🚀");

    // App Initialization
    const app = document.getElementById("app");

    if (app) {
        app.classList.add("loaded");
    }

    // Mobile Navigation
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("show");

            menuToggle.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", (event) => {
            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                navMenu.classList.remove("show");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                navMenu.classList.remove("show");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Contact Form - Email Integration
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const subject = document.getElementById("contact-subject").value.trim();
            const message = document.getElementById("contact-message").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Please fill in all fields.");
                return;
            }

            const body =
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`;

            const mailto =
                "mailto:mdmobasherhossenmithu@gmail.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

            window.open(mailto, "_self");
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        ".section-heading, .about-content, .about-visual, " +
        ".skill-card, .project-card, .contact-info, " +
        ".contact-form-wrapper, .footer-top, .footer-bottom"
    );

    revealElements.forEach((element, index) => {
        element.classList.add("reveal");

        if (element.classList.contains("skill-card") ||
            element.classList.contains("project-card")) {
            element.classList.add(
                `reveal-delay-${(index % 3) + 1}`
            );
        }
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);

        // Active Navigation On Scroll
        const sections = document.querySelectorAll(
            "section[id]"
        );

        window.addEventListener("scroll", () => {

            let currentSection = "";

            sections.forEach(section => {

                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    currentSection = section.getAttribute("id");
                }

            });

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") === `#${currentSection}`
                ) {
                    link.classList.add("active");
                }

            });

        });


    });

    // Scroll Progress Bar
    const scrollProgress = document.getElementById("scroll-progress");

    window.addEventListener("scroll", () => {

        const scrollableHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const scrollPercentage =
            scrollableHeight > 0
                ? (window.scrollY / scrollableHeight) * 100
                : 0;

        if (scrollProgress) {
            scrollProgress.style.width = `${scrollPercentage}%`;
        }

    });


    // Back To Top Button
    const backToTop = document.getElementById("back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // Custom Cursor Effect
    const customCursor = document.getElementById("custom-cursor");

    if (customCursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

        document.addEventListener("mousemove", (event) => {

            customCursor.style.left = `${event.clientX}px`;
            customCursor.style.top = `${event.clientY}px`;

            customCursor.classList.add("cursor-visible");

        });

        document.addEventListener("mouseout", (event) => {
            if (!event.relatedTarget) {
                customCursor.classList.remove("cursor-visible");
            }
        });

        document.querySelectorAll("a, button, input, textarea").forEach(element => {

            element.addEventListener("mouseenter", () => {
                customCursor.classList.add("cursor-hover");
            });

            element.addEventListener("mouseleave", () => {
                customCursor.classList.remove("cursor-hover");
            });

        });

    }


    // Website Preloader
    const preloader = document.getElementById("preloader");

    if (preloader) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                preloader.classList.add("hide");

                setTimeout(() => {
                    preloader.remove();
                }, 700);

            }, 500);

        });

    }

});
