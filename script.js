document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll with offset for fixed header
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust for header height
                window.scrollTo({ top: offset, behavior: "smooth" });
            }
        });
    });

    // Hide navigation bar on scroll down
    let lastScrollTop = 0;
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            nav.classList.add("nav-hidden");
        } else {
            // Scroll up
            nav.classList.remove("nav-hidden");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Loading Animation
    window.addEventListener("load", function() {
        document.getElementById("loader").style.display = "none";
    });

    // Blog Navigation
    const blogLinks = document.querySelectorAll("#blogs a");
    const blogDetails = document.getElementById("blog-details");
    const blogSections = document.querySelectorAll(".blog-detail");

    blogLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            blogSections.forEach(section => {
                section.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
            blogDetails.style.display = "block";
            window.scrollTo({ top: blogDetails.offsetTop, behavior: "smooth" });
        });
    });

    const backLinks = document.querySelectorAll(".blog-detail a");
    backLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            blogDetails.style.display = "none";
            window.scrollTo({ top: document.getElementById("blogs").offsetTop, behavior: "smooth" });
        });
    });
});