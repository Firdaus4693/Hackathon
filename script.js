$(document).ready(function(){
    $('#menuSlider').carousel({
        interval: 3000, // Change slide every 3 seconds
        pause: "hover"
    });
});

const signupLink = document.querySelector('.signup-link');
signupLink.addEventListener('click', () => {
  const register = new bootstrap.Modal(document.getElementById('registerModalLabel'));
  register.show();
});
