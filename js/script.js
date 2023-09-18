const header = document.querySelector("header");

function activeHeader(){
    header.classList.toggle("active-header", scrollY > 0);
}

document.addEventListener('scroll', activeHeader);