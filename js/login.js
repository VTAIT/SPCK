const baseUrl = 'https://6421ab3d34d6cd4ebd79207a.mockapi.io/api/';
const userApi = 'user/';

async function filterUser(filter) {
    let urlFilter = new URL(baseUrl + userApi);
    for (const key in filter) {
        const element = filter[key];
        urlFilter.searchParams.append(key, element);
    }

    try {
        const res = await fetch(urlFilter, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log('Fetch Error:', error);
    }
}

let storedEmail = localStorage.getItem('email');
let storedPw = localStorage.getItem('password');
let emailLoginInput = document.getElementById('emailLoginInput');
let passwordLoginInput = document.getElementById('passwordLoginInput');
let loginBtn = document.getElementById('loginBtn');

function checkLogin(e) {
  e.preventDefault();
// if (storedEmail == emailLoginInput.value && storedPw == passwordLoginInput.value) {
  let filter = {
    name: emailLoginInput.value
  };

  filterUser(filter)
  .then(function(response) {
    console.log(response)
    if (response == []) {
      console.log('response null');
      return;
    }
    console.log(passwordLoginInput.value)
    console.log(response[0].password)
    if (passwordLoginInput.value != response[0].password) {
      console.log('sai password');
      return;
    }
    
    localStorage.setItem('status', true);
    location.href = '../index.html';
  })
  
// }
// else {
//   alert('Đăng nhập thất bại, hãy thử lại!');
// }
}

loginBtn.addEventListener('click', checkLogin);


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