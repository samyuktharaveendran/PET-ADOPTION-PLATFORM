var wishCountText = document.querySelector('#wish-count');
var signUpForm = document.querySelector('.email-sign-up');
var emailInput = document.querySelector('input');
var signUpBtn = document.querySelector('#sign-up');
var footer = document.querySelector('footer');
var georgeBtn = document.querySelector('#george-btn')
var tankBtn = document.querySelector('#tank-btn')
var buddyBtn = document.querySelector('#buddy-btn')
var chipsBtn = document.querySelector('#chips-btn')

var count = 0;

function addToWishlist() {
  count = count + 1;
  if(count === 1) {
    wishCountText.textContent = '1 pet'
  } else {
    wishCountText.textContent = count + " pets"
  }
}

function emailSubmitHandler() {
  var confirmationMsg = document.createElement('p');
  confirmationMsg.textContent = "Thank you for selling your soul to spam emails, " + emailInput.value;
  signUpForm.remove();
  footer.appendChild(confirmationMsg);
}

signUpBtn.addEventListener('click', emailSubmitHandler)
georgeBtn.addEventListener('click', addToWishlist);
tankBtn.addEventListener('click', addToWishlist)
buddyBtn.addEventListener('click', addToWishlist)
chipsBtn.addEventListener('click', addToWishlist)

function redirectToAdoptionPage(animalName) {
    var adoptionPageURL = 'adoption.html';
    window.location.href = adoptionPageURL;
  }
