// when someone clicks the hamburger menu
// if the menu is closed, open it
// if the menu is open, close it
const nav = document.querySelector(".navigation");
const navToggle = document.querySelector(".mobile_nav_toggle");
const action_button = document.querySelector(".action_link");

const home_Link = document.querySelector(".home_section_link");
const about_Link = document.querySelector(".about_section_link");
const portfolio_link = document.querySelector(".portfolio_section_link");
const contact_Link = document.querySelector(".contact_section_link");

    
//when someone clicks the hamburger button
navToggle.addEventListener("click", () =>{
//if the nav is open
const visibility = nav.getAttribute("data-visible");

console.log(visibility);
if(visibility == "false" || visibility == null){
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded",true);
}
else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded",false);
}
console.log(navToggle.getAttribute("aria-expanded"));
//if the navis closed
})

action_button.addEventListener("click", () =>{
    ScrollToSection("#contact");
})


home_Link.addEventListener("click", () =>{
    debugger;
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

about_Link.addEventListener("click", () =>{
    ScrollToSection("#about");
})
portfolio_link.addEventListener("click", () =>{
    ScrollToSection("#portfolio");
})

contact_Link.addEventListener("click", () =>{
    ScrollToSection("#contact");
})


function ScrollToSection(sectionName){
    document.querySelector(sectionName).scrollIntoView({
  behavior: 'smooth', // Enables smooth scrolling
  block: 'start'     // Aligns the element to the center of the viewport
});
}

window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        nav.classList.add('active_navigation');
      } else {
        nav.classList.remove('active_navigation');
      }
    });