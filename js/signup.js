const baseUrl = 'https://6421ab3d34d6cd4ebd79207a.mockapi.io/api/';
const userApi = 'user/';

async function createUser(user) {
    try {
        const res = await fetch(baseUrl + userApi, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

// Captcha
let $captchaImg = document.getElementById('captchaImg');
let $signupBtn = document.getElementById('signupBtn');
let $captchaSync = document.querySelector('.captcha-sync__icon');
let $captchaInput = document.getElementById('captchaInput');
// Email validation
let $emailInput = document.getElementById('emailInput');
// Input validation
let $passwordInput = document.getElementById('passwordInput');
let $confirmPasswordInput = document.getElementById('confirmPasswordInput');


// Email validation
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


// Captcha
function captchaGenerate() {
  // clear old input
  $signupBtn.value = '';

  // generate captcha
  let uniqueChar = '';
  const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 1; i < 6; i++) {
    uniqueChar += randomChar.charAt(Math.random() * randomChar.length);
  }

  // store captcha into the image
  $captchaImg.innerHTML = uniqueChar;
}


// function checkCaptcha() {
//   if (userCaptchaInput != $captchaImg.innerHTML) {
//     alert('Bạn đã nhập sai Captcha!');
//   }
// }


// Email validation
$emailInput.addEventListener('change', function() {
  if (!validateEmail($emailInput.value)) {
    alert('Vui lòng nhập đúng email!');
  }
})


// Captcha
window.addEventListener('load', captchaGenerate);
$captchaSync.addEventListener('click', captchaGenerate);
// $signupBtn.addEventListener('click', checkCaptcha);


// Input validation
function userStore(event) {
  event.preventDefault();
  let upperCaseLetters = /[A-Z]/g;
  let lowerCaseLetters = /[a-z]/g;
  let requiredNumbers = /[0-9]/g;
  let userCaptchaInput = $captchaInput.value;

  if (
    $passwordInput.value.length < 8
    || $passwordInput.value.length != $confirmPasswordInput.value.length
    || !$passwordInput.value.match(upperCaseLetters)
    || !$passwordInput.value.match(lowerCaseLetters)
    || !$passwordInput.value.match(requiredNumbers)
    ) {
      alert('Mật khẩu chưa hợp lệ!');
  }
  else if (userCaptchaInput != $captchaImg.innerHTML) {
      alert('Bạn đã nhập sai Captcha!');
  }
  else {
      localStorage.setItem('email', $emailInput.value);
      localStorage.setItem('password', $passwordInput.value);

      let user = {
          name: $emailInput.value,
          avata: 'test',
          createDate: new Date().toLocaleDateString(),
          rank: 1,
          follow_story: [],
          follow_author: [],
          isDelete: false,
          password: $passwordInput.value,
          watched: [],
      }

      createUser(user)
        .then(function(response) {
          console.log(response.name);
          alert('Đăng ký thành công!');
          location.href = './login.html';
        });

  }
}

$signupBtn.addEventListener('click', userStore);


// Reset font family
document.querySelector('body').style.fontFamily = "'Nunito', sans-serif";


// Nhat - header
const $modal = document.getElementById('modal');
const $modalContainer = document.querySelector('.modal-container');
let $userModal = document.getElementById('js-user-modal');
let $bellAlert = document.getElementById('js-bell-alert');
let $loginAlert = document.getElementsByClassName('js-login-alert');
// let $highlightRed = document.getElementsByClassName('header-nav__item-link');
// let $mobileHighlightRed = document.getElementsByClassName('nav__mobile-link');
let $barsBtn = document.getElementById('js-bars-btn');
let $navMobile = document.getElementById('js-nav-mobile');
let $navOverlay = document.getElementById('js-nav-overlay');
let $navClose = document.getElementById('js-nav-close');
let $mobileSearchBtn = document.getElementsByClassName('header-search-btn-icon');
let $mobileSearchBox = document.querySelector('.mobile-search');
let $mobileSearchOverlay = document.querySelector('.mobile-search__overlay');


// popup modal
$userModal.addEventListener('click', function () {
    $modal.classList.add('d-block');
    let filter = {
        name: "Nhat"
    };
    server.filterUser(filter).then(user => console.log(user))
})

$modal.addEventListener('click', function () {
    $modal.classList.remove('d-block');
})

$modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})


// popup mobile nav bar
$barsBtn.addEventListener('click', function() {
 $navMobile.classList.add('d-block');
})

$navOverlay.addEventListener('click', function() {
 $navMobile.classList.remove('d-block');
})

$navClose.addEventListener('click', function() {
 $navMobile.classList.remove('d-block');
})


// popup mobile search
$mobileSearchBtn[0].addEventListener('click', function() {
 $mobileSearchBtn[0].style.display = 'none';
 $mobileSearchBtn[1].style.display = 'block';
 $mobileSearchBox.style.display = 'block';
})

$mobileSearchBtn[1].addEventListener('click', function() {
 $mobileSearchBtn[1].style.display = 'none';
 $mobileSearchBtn[0].style.display = 'block';
 $mobileSearchBox.style.display = 'none';
})

$mobileSearchOverlay.addEventListener('click', function() {
 $mobileSearchBtn[1].style.display = 'none';
 $mobileSearchBtn[0].style.display = 'block';
 $mobileSearchBox.style.display = 'none';
})


// bell alert
function bellAlert(e) {
    e.preventDefault();
    alert('Đăng nhập để sử dụng chức năng này!');
}

$bellAlert.addEventListener('click', bellAlert);


// login alert
for (let i = 0; i < $loginAlert.length; i++) {
$loginAlert[i].addEventListener('click', function(e) {
    e.preventDefault();
    alert('Đăng nhập để sử dụng chức năng này!');
})
}


// Search PC Tablet
let searchPcTablet = document.getElementById('searchPcTablet');

searchPcTablet.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Đăng nhập để sử dụng chức năng này!');
})


// Search Mobile
let searchMobile = document.getElementById('searchMobile');

searchMobile.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Đăng nhập để sử dụng chức năng này!');
})