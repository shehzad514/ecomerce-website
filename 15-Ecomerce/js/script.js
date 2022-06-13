var nav =document.querySelector(".container");
window.addEventListener("scroll",function()
{
    if(window.scrollY > nav.offsetHeight + 150)
    {
        nav.classList.add("active");
    }
    else
    {
        nav.classList.remove("active")
    }
})


var hamburger=document.querySelector(".hamburger");
var mobileNav=document.querySelector("#nav-ul");
var bars=document.querySelectorAll(".hamburger span");
var Active=false;

hamburger.addEventListener("click",function()
{
    mobileNav.classList.toggle("open");
    if(!Active)
    {
        bars[0].style.transform="rotate(45deg)";
        bars[1].style.opacity="0";
        bars[2].style.transform="rotate(-45deg)";
       Active=true;
    }
    else
    {
        bars[0].style.transform="rotate(0deg)";
        bars[1].style.opacity="1";
        bars[2].style.transform="rotate(0deg)";
       Active=false;
    }
})


// for single product 
var big=document.querySelector("#big-img");
var small=document.querySelectorAll(".small-img");
small[0].addEventListener("click", function(){
    big.src =small[0].src;
})


var big=document.querySelector("#big-img");
var small=document.querySelectorAll(".small-img");
small[1].addEventListener("click", function(){
    big.src =small[1].src;
})

var big=document.querySelector("#big-img");
var small=document.querySelectorAll(".small-img");
small[2].addEventListener("click", function(){
    big.src =small[2].src;
})

var big=document.querySelector("#big-img");
var small=document.querySelectorAll(".small-img");
small[3].addEventListener("click", function(){
    big.src =small[3].src;
})

var big=document.querySelector("#big-img");
var small=document.querySelectorAll(".small-img");
small[4].addEventListener("click", function(){
    big.src =small[4].src;
})

