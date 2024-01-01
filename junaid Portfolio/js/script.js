const themebtn = document.querySelector(".themebtn");


window.addEventListener("load", ()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // page loader 
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".page-loader").style.display = "none";   
    },600);
});
// toggle navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// active section 
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // active the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        themebtn.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");

        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            themebtn.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});


// about tab 
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});


// portfolio item details popup

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it 
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;

}


// for theme toggle 

let themeToggle = document.querySelector('#theme-toggler');

themeToggle.onclick = () => {
    
let palette = document.querySelector('#palette');
palette.classList.toggle('fa-magic');

if(palette.classList.contains('fa-magic')){

    document.querySelector('body').classList.add('active');
    document.querySelector('.circle-1').classList.add('theme2');
    document.querySelector('.circle-2').classList.add('theme2');
    document.querySelector('.circle-3').classList.add('theme2');
    document.querySelector('.circle-4').classList.add('theme2');
    document.querySelector('.circle-5').classList.add('theme2');
    document.querySelector('.circle-6').classList.add('theme2');
    document.querySelector('.circle-7').classList.add('theme2');
    document.querySelector(':root').classList.add('theme2');
    palette.classList.remove('fa-palette');

}else{

    document.querySelector('body').classList.remove('active');
    document.querySelector('.circle-1').classList.remove('theme2');
    document.querySelector('.circle-2').classList.remove('theme2');
    document.querySelector('.circle-3').classList.remove('theme2');
    document.querySelector('.circle-4').classList.remove('theme2');
    document.querySelector('.circle-5').classList.remove('theme2');
    document.querySelector('.circle-6').classList.remove('theme2');
    document.querySelector('.circle-7').classList.remove('theme2');
    document.querySelector(':root').classList.remove('theme2');
    palette.classList.add('fa-palette');

}

}