var backdrop = document.querySelector('.backdrop');
var modal= document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');

// console.dir(selectPlanButtons);
// console.log(backdrop); //to see the element in the browser console
// console.dir(backdrop); // to see in a object


// i = 0 -> the first element/button // i < selectPlanButtons -> the element
// will run while as long i smoller than selectPlanButtons // length -> special proprerty to tell us how many elements we got

// to show the modal window

for(var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    modal.style.display = 'block';
    modal.style.display = 'block';
  });
}

// button NO to modal

backdrop.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}