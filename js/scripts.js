var burgerBtn = document.querySelector("#burger-btn")
var mainNav = document.querySelector("#main-nav")

var isNavVisible = false;

burgerBtn.addEventListener("click", () => {
        console.log(isNavVisible);
        if (isNavVisible === false){
                mainNav.classList.remove("hide-menu");
                isNavVisible = true;
        }else{
                mainNav.classList.add("hide-menu");
                isNavVisible = false;
        }
})

mainNav.addEventListener("click", () => {
        mainNav.classList.add("hide-menu");
        isNavVisible = false;
})