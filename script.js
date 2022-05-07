var hero = document.querySelector(".hero");
var section2 = document.querySelector(".about");
var section12 = document.querySelector(".about-text");
function bgChanger(){
    if(this.scrollY > hero.clientHeight/2){
        hero.style.background = "white"
    }
    else{
        hero.style.background = "#6f2dbd"
    }
    if(this.scrollY > (hero.clientHeight + section2.clientHeight + section12.clientHeight)){
        console.log("yes");
        document.body.style.background = "#6f2dbd";
    }
    else{
        document.body.style.background = "#fff";
    }
    
}
window.addEventListener("scroll", bgChanger)