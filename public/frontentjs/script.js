var burger = document.getElementsByClassName("burger")[0];
var nav = document.getElementsByClassName("verticalbar")[0];
burger.addEventListener("click", ()=>{
    if (nav.style.display == "none") {
        nav.style.display = "block"
    }else
    nav.style.display = "none"; 
    
});