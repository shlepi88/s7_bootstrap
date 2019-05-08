$(document).ready( () => {
    // Validate Form
    $.validate({
        modules : 'html5'
    });

    // Rotate Nav Item Arrow
    $('.nav-item').on('click', () => {
        $('i.arrow').removeClass('active-arrow');
        $('i.arrow').addClass('active-arrow');
    });
});

// Add/Remove Class On Nav Items
let navContainer = document.getElementById("navbar");
let nav = navContainer.getElementsByClassName("nav-link");

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active-blue");
    current[0].className = current[0].className.replace(" active-blue", "");
    this.className += " active-blue";
  });
}

// Add/Remove Class On Feature Items
let featureContainer = document.getElementById("feature-list");
let feature = featureContainer.getElementsByClassName("feature-item");

for (let i = 0; i < feature.length; i++) {
    feature[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active-feature");
    current[0].className = current[0].className.replace(" active-feature", "");
    this.className += " active-feature";
  });
}

// Clear Textarea On Click
let message = document.querySelector('#message');
let clearMsg = document.querySelector('#clear-msg');

clearMsg.addEventListener('click', (e) => {
    e.preventDefault();
    message.value = '';
});