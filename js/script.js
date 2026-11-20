
/* =================================
   MITHU.DEV - MAIN JAVASCRIPT
   Phase 02 | Step 05.3
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

        // Open / Close Menu
        menuToggle.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("show");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        // Close Menu After Link Click
        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("show");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

        // Close Menu On Outside Click
        document.addEventListener("click", (event) => {

            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove("show");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

        // Close Menu With Escape Key
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navMenu.classList.remove("show");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }

});
