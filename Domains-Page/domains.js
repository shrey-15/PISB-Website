const d1 = document.querySelectorAll(".domains");
const card1 = document.querySelector("#card1")
const card2 = document.querySelector("#card2")
const card2Content = document.querySelector("#card2-content")
const card2Buttons = document.querySelector("#card2-buttons")
const title = document.getElementById("main-domain-title")
const image = document.getElementById("main-domain-image")
const text = document.getElementById("main-domain-text")

const titles = [
    "WEB DEVELOPMENT",
    "APP DEVELOPMENT",
    "COMEPTITIVE PROGRAMMING",
    "MACHINE LEARNING , ARTIFICIAL INTELLIGENCE",
    "DESIGN",
    "IoT & ROBOTICS",
    "MARKETING & FINANCE"
]

const images = [
    "web-dev.png",
    "app-dev.png",
    "cp.png",
    "ml.png",
    "design.png",
    "iot.png",
    "marketing.png"
]

const texts = [
    "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet(a private network). [1] Web development can range from developing a simple single static page of plain text to complex web - based internet applications(web apps), electronic businesses, and social network services",
    "Mobile app development is the process by which a mobile app is developed for devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These are delivered as web applications using server-side or client-side processing to provide an 'application-like' experience within a Web browser.",
    "Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications.",
    "Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data.",
    "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design.",
    "The Internet of Things is simply 'A network of Internet connected objects able to collect and exchange data.' It is commonly abbreviated as IoT.",
    "Marketing is the study and management of exchange relationships. It is the business process of identifying, anticipating and satisfying customers' needs and wants."
]




d1[0].addEventListener("click", function () {
    foo2(0);
})

d1[1].addEventListener("click", function () {
    foo2(1);
})


d1[2].addEventListener("click", function () {
    foo2(2);
})

d1[3].addEventListener("click", function () {
    foo2(3);
})

d1[4].addEventListener("click", function () {
    foo2(4);
})

d1[5].addEventListener("click", function () {
    foo2(5);
})

d1[6].addEventListener("click", function () {
    foo2(6);
})

function foo2(index) {
    title.textContent = titles[index];
    text.textContent = texts[index];

    image.setAttribute("src", images[index]);
}



function foo() {
    card2Buttons.classList.toggle("add-invisible")
    card2Content.classList.toggle("add-invisible")
    card1.classList.toggle("card1-active")
    card2.classList.toggle("card2-active")

}