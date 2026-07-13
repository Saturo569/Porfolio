// profile card ito
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('close');

function openModal(){
    modal.style.display = "flex";
}

function closeModal(){
    modal.style.display = "none";
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (event){
    if (event.target === modal){
        closeModal();
    }
});

// hamburger

const menu = document.getElementById("menu-bar");
const nav = document.getElementById("nav-links");
menu.onclick = () => nav.classList.toggle("active");