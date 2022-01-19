var backdrop = document.querySelector('.backdrop');
var modal= document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');
var ctaButton = document.querySelector('.dark-mde');

// To show the modal window
for(var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    // modal.style.display = 'block';
    // modal.style.display = 'block';
    // modal.className = 'open'; // This will actually overwite the complete class
    modal.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
      backdrop.classList.remove('open');
    }, 10);  });
}

// Button NO to modal
backdrop.addEventListener('click', function() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}


function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(function() {
    backdrop.style.display = 'none';
  }, 200);
}

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(function() {
    backdrop.classList.add('open');
  }, 10);
});

ctaButton.addEventListener('animationsstart', function(event) {
  console.log('Animatio started', event);
})

ctaButton.addEventListener('animationend', function(event) {
  console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function(event) {
  console.log('Animation iteration', event);
});

//Toggle dark mode button
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
};