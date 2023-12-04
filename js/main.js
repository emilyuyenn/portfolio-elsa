/* scroll nav */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav ul li a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};


/* btn new page */
const newpagebtn = document.querySelector(".icon-page");
const newpageIcon = document.querySelector(".icon-page i");
const pagelist = document.querySelector(".new-page");

newpagebtn.onclick = function () {
    pagelist.classList.toggle("open");

    const isOpen = pagelist.classList.contains("open");
    newpageIcon.classList = isOpen ? "fa-solid fa-minus" : "fa-solid fa-plus";
};


/* animation scroll */
function createScrollReveal(target, options) {
    ScrollReveal().reveal(target, options);
}

// Định cấu hình hiệu ứng cho từng phần tử
createScrollReveal("#home", {
    delay: 700,
    distance: "100px",
    origin: "left",
});

createScrollReveal("#work", {
    delay: 500,
    duration: 600,
});

createScrollReveal("#work1", {
    delay: 500,
    duration: 600,
    distance: "100px",
    origin: "left",
});

createScrollReveal("#work2", {
    delay: 600,
    duration: 600,
    distance: "100px",
    origin: "right",
});

createScrollReveal("#work3", {
    delay: 700,
    duration: 600,
    distance: "100px",
    origin: "left",
});

createScrollReveal("#work-end", {
    delay: 800,
    duration: 600,
    distance: "50px",
    origin: "bottom",
});

createScrollReveal("#projects", {
    delay: 300,
    duration: 600,
    distance: "50px",
    origin: "left",
});

createScrollReveal("#research", {
    delay: 300,
    duration: 600,
    distance: "100px",
    origin: "right",
});

createScrollReveal("#archivements", {
    delay: 300,
    duration: 600,
    distance: "100px",
    origin: "left",
});

// Gọi hàm reveal khi trang được cuộn
window.addEventListener("scroll", () => {
    ScrollReveal().reveal(".scrollreveal");
});