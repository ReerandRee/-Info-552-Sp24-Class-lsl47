var burgerBtn = document.querySelector("#burger-container button");
var mainNavContainer = document.querySelector("#main-nav");

var mainNavVisible = false;

burgerBtn.addEventListener("click", () =>{
    console.log("burger clicked");

    // check to see if we can see the main nav
    if(mainNavVisible === false){
        mainNavContainer.classList.remove("hideMainNavAtMobile");
        mainNavVisible = true;

    }else{
        mainNavContainer.classList.add("hideMainNavAtMobile");
        mainNavVisible = false;
    }
})

mainNavContainer.addEventListener("click", function(){
    mainNavContainer.classList.add("hideMainNavAtMobile");
    mainNavVisible = false;
})

