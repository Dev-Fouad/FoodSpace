let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let overlay = document.querySelector(".overlay")

menu.addEventListener("click", function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("hidden");
});

window.oncsroll = () => {
    navbar.classList.remove("active");
};

overlay.addEventListener('click', function(){
    overlay.classList.add('hidden');
    navbar.classList.remove("active");
})

