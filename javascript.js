// SOCIAL ICON JS TO MAKE OT VISIBLE IF SCROLLED
const social = document.querySelector("#social")
document.addEventListener("scroll",()=>{
    if (window.scrollY >400) {
        social.style.opacity="1";
    } else {
        social.style.opacity="0";
    }
})


// JS CODE TO CHNAGE ICON STATE IN STORE COMPONENT
// Function to toggle icon state
function toggleIconState(icon, baseClass, activeClass, activeColor) {
    icon.classList.toggle(baseClass);
    icon.classList.toggle(activeClass);
    icon.classList.toggle(activeColor);
}
// List of icons with their respective classes
const icons = [
    { selector: '.bi-heart', baseClass: 'bi-heart', activeClass: 'bi-heart-fill', activeColor: 'text-danger' },
    { selector: '.bi-cart-plus', baseClass: 'bi-cart-plus', activeClass: 'bi-cart-plus-fill', activeColor: 'text-primary' },
    { selector: '.bi-bookmark-plus', baseClass: 'bi-bookmark-plus', activeClass: 'bi-bookmark-plus-fill', activeColor: 'text-success' }
];
// Apply event listeners to each icon type
icons.forEach(({ selector, baseClass, activeClass, activeColor }) => {
    document.querySelectorAll(selector).forEach(icon => {
        icon.addEventListener('click', () => toggleIconState(icon, baseClass, activeClass, activeColor));
    });
});
