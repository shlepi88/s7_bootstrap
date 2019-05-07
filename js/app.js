$(document).ready( () => {
    // Validate Form
    $.validate({
        modules : 'html5'
    });

    $('.nav-item').on('click', () => {
        $('i.arrow').removeClass('active-arrow');
        $('i.arrow').addClass('active-arrow');
    })

        /*
    * Replace all SVG images with inline SVG
    */
    jQuery('img.svg').each(function(){
      let $img = jQuery(this);
      let imgID = $img.attr('id');
      let imgClass = $img.attr('class');
      let imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          let $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }

          // Replace image with new SVG
          $img.replaceWith($svg);

      }, 'xml');

    });
});

// Get the container element
let btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active-blue");
    current[0].className = current[0].className.replace(" active-blue", "");
    this.className += " active-blue";
  });
}

// Clear Textarea On Click
let message = document.querySelector('#message');
let clearMsg = document.querySelector('#clear-msg');

clearMsg.addEventListener('click', (e) => {
    e.preventDefault();
    message.value = '';
});