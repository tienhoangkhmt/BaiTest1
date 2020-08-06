document.addEventListener("DOMContentLoaded",function () {
    var show = document.querySelector('.click-show-menu');
    var show1 = document.querySelector('.icon');
    var div = document.querySelector('.Menu');
    var img = document.querySelector(".ovl-img >img");
    show.addEventListener("click", function () {
        div.classList.add("show");
    })
    show1.addEventListener("click", function () {
        div.classList.remove("show");
    })
    
    
    window.addEventListener("scroll",function () {
        // console.log(img);
        console.log(window.pageYOffset);

        if ((window.pageYOffset > 50) &&(window.pageYOffset < 500)){
            img.classList.add("transform");
        }
    })
})