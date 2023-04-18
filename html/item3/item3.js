document.getElementById('header').innerHTML = `
<!-- Nhat - header -->
<div id="header-wrapper">
  <div id="header" class="grid">
    <div class="header-nav">

      <!-- Logo -->
      <h1 class="header-nav__logo">
        <a href="/SPCK/index.html" class="header-nav__logo-link">
          <div style="background-image: url(https://logos-world.net/wp-content/uploads/2021/02/Crunchyroll-Emblem.png);"
            class="header-nav__logo-img"></div>
        </a>
      </h1>

      <!-- PC nav bar -->
      <div class="nav__pc">
        <ul class="header-nav__list">
          <li class="header-nav__item">
            <a href="/SPCK/index.html" class="header-nav__item-link">HOME</a>
          </li>
          <li class="header-nav__item">
            <button type="button" id="nav-truyen-moi" class="header-nav__item-link"
              onclick="smoothScroll(document.getElementById('truyen-moi'))">TRUYỆN MỚI</button>
          </li>
          <li class="header-nav__item">
            <button type="button" id="nav-tieu-thuyet" class="header-nav__item-link"
              onclick="smoothScroll(document.getElementById('tieu-thuyet-moi'))">TIỂU THUYẾT</button>
          </li>
          <li class="header-nav__item">
            <button type="button" id="nav-truyen-18" class="header-nav__item-link"
              onclick="smoothScroll(document.getElementById('truyen-18-moi'))">18+</button>
          </li>
          <li class="header-nav__item">
            <button type="button" id="nav-ngon-tinh" class="header-nav__item-link"
              onclick="smoothScroll(document.getElementById('ngon-tinh-moi'))">NGÔN TÌNH</button>
          </li>
          <li class="header-nav__item">
            <!-- <a href="./html/danhsach-truyen.html" class="header-nav__item-link">NEWS</a> -->
          </li>
        </ul>
      </div>
    </div>

    <!-- Search input -->
    <div class="header-search">
      <div class="header-search__input-container">
        <input type="text" name="text_add" id="txtKeywords" placeholder="Tìm kiếm truyện theo tên."
          class="header-search__input">
      </div>
      <button type="submit" id="searchPcTablet" class="btn-pc-tablet">
        <i class="btn-pc-tablet-icon fa-solid fa-magnifying-glass"></i>
      </button>
      <button type="submit" class="header-search-btn btn-mobile">
        <i class="header-search-btn-icon fa-solid fa-magnifying-glass"></i>
        <i class="header-search-btn-icon header-search-btn-icon-xmark fa-solid fa-xmark"></i>
      </button>

      <!-- Mobile nav bar -->
      <label for="nav-mobile-input" id="js-bars-btn" class="nav__bars-btn">
        <i class="nav__bars-btn-icon fa-solid fa-bars"></i>
      </label>
    </div>

    <!-- Side buttons -->
    <div class="header-btns">
      <button type="button" id="js-bell-alert" class="header-btns__item header-btns__item--bell">
        <i class="header-btns__item-icon fa-regular fa-bell"></i>
      </button>
      <button type="button" id="js-user-modal" class="header-btns__item header-btns__item--user">
        <i class="header-btns__item-icon fa-solid fa-user"></i>
      </button>
      <img src="https://truyengihotne.com/uploads/avatars/avatar.png" id="js-user-ava"
        class="modal__item-img--login d-none" alt="">
    </div>

  </div>
</div>

<!-- Nhat - Mobile nav bar -->
<input type="checkbox" hidden name="" id="nav-mobile-input" class="nav__input">

<label for="nav-mobile-input" id="js-nav-overlay" class="nav__overlay"></label>

<div id="js-nav-mobile" class="nav__mobile">
  <label for="nav-mobile-input" id="js-nav-close" class="nav__mobile-close">
    <i class="nav__mobile-close-icon fa-solid fa-xmark"></i>
  </label>

  <!-- Mobile nav list -->
  <ul class="nav__mobile-list">
    <li class="nav__mobile-item">
      <a href="/SPCK/index.html" class="nav__mobile-link">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
      </a>
    </li>
    <li class="nav__mobile-item">
      <a href="../danhsach-truyen.html" class="nav__mobile-link">
        <i class="fa-solid fa-heart"></i>
        <span>Danh sách truyện</span></a>
    </li>
    <li class="nav__mobile-item">
      <!-- <a href="./html/danhsach-truyen.html" class="nav__mobile-link">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>18+</span></a> -->
    </li>
    <li class="nav__mobile-item">
      <!-- <a href="./html/danhsach-truyen.html" class="nav__mobile-link">
            <i class="fa-solid fa-book-open"></i>
            <span>Novel</span></a> -->
    </li>
    <li class="nav__mobile-item">
      <!-- <a href="./html/danhsach-truyen.html" class="nav__mobile-link">
            <i class="fa-solid fa-video"></i>
            <span>Anime</span></a> -->
    </li>
    <li class="nav__mobile-item">
      <!-- <a href="./html/danhsach-truyen.html" class="nav__mobile-link">
            <i class="fa-solid fa-circle-info"></i>
            <span>News</span></a> -->
    </li>
  </ul>
</div>


<!-- Nhat - Mobile search -->
<div class="mobile-search">
  <div class="mobile-search__overlay"></div>
  <div class="mobile-search__inner">
    <div>
      <div class="mobile-search__input-container">
        <input type="text" placeholder="Tìm kiếm truyện theo tên." name="" id="txtKeywordsMobile"
          class="mobile-search__input">
        <button class="mobile-search__btn" id="searchMobile">
          <i class="mobile-search__btn-icon fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
</div>
`;

document.getElementById('modal-item').innerHTML = `
<!-- Nhat - Modal before login -->
<div id="modal" class="">

  <div class="modal-overlay grid">
    <div class="modal-container">
      <div class="modal-container__item d-flex">
        <div class="modal__item-btn modal__item-btn--size-s">
          <a href="../login.html" class="modal__item-link">ĐĂNG NHẬP</a>
        </div>
        <div class="modal__item-btn modal__item-btn--size-s">
          <a href="../signup.html" class="modal__item-link">ĐĂNG KÝ</a>
        </div>
      </div>
      <div class="modal-container__item d-flex">
        <div class="modal__item-btn f-1">
          <a href="../danhsach-truyen.html" class="modal__item-link js-login-alert">DANH SÁCH TRUYỆN</a>
        </div>
      </div>
      <!-- <div class="modal-container__item d-flex">
          <div class="modal__item-btn">
            <a href="" class="modal__item-link modal__item-btn--size-s js-login-alert">ĐANG ĐỌC</a>
          </div>
          <div class="modal__item-btn">
            <a href="" class="modal__item-link modal__item-btn--size-s js-login-alert">THEO DÕI</a>
          </div>
        </div> -->
      <div class="modal-container__item d-flex">
        <div class="modal__item-btn f-1">
          <a href="../huongdan.html" class="modal__item-link js-login-alert">FAQ/HƯỚNG DẪN</a>
        </div>
      </div>
      <div class="modal-container__item d-flex">
        <div class="modal__item-btn modal__item-btn--social">
          <a href="https://www.facebook.com/truyengidotnet/" class="modal__item-link">
            <i class="modal__item-icon fa-brands fa-facebook-f"></i>
          </a>
        </div>
        <div class="modal__item-btn">
          <span class="modal__item-link modal__item-link--email">LIÊN HỆ NẠP VIP: NHOM1-C4E137@GMAIL.COM</span>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- Nhat - Modal after login -->
<div id="modal-login" class="d-none">

  <div class="modal-overlay grid">
    <div id="modal-login__container" class="modal-container">
      <div class="modal-container__item modal-container__item--user d-flex">
        <img src="https://truyengihotne.com/uploads/avatars/avatar.png" class="modal__item-img" alt="">
        <div class="modal__item-btn modal__item-btn--size-m">
          <span>LV.0/</span> USER
        </div>
      </div>
      <div class="modal-container__item d-flex">
        <div class="modal__item-btn modal__item-btn--profile f-1">
          <!-- <a href="#" class="modal__item-link">TRANG CÁ NHÂN</a> -->
        </div>
      </div>
      <div class="modal-container__item d-flex">
        <div class="modal__item-btn f-1">
          <a href="../danhsach-truyen.html" class="modal__item-link">DANH SÁCH TRUYỆN</a>
        </div>
      </div>
      <!-- <div class="modal-container__item d-flex">
          <div class="modal__item-btn">
            <a href="#" class="modal__item-link modal__item-btn--size-s">ĐANG ĐỌC</a>
          </div>
          <div class="modal__item-btn">
            <a href="#" class="modal__item-link modal__item-btn--size-s">THEO DÕI</a>
          </div>
        </div> -->
      <div class="modal-container__item d-flex">
        <div class="modal__item-btn f-1">
          <a href="../huongdan.html" class="modal__item-link">FAQ/HƯỚNG DẪN</a>
        </div>
      </div>
      <div id="js-logout" class="modal-container__item d-flex">
        <div class="modal__item-btn f-1">
          <a href="" class="modal__item-link">ĐĂNG XUẤT</a>
        </div>
      </div>
      <div class="modal-container__item d-flex">
        <div class="modal__item-btn modal__item-btn--social">
          <a href="https://www.facebook.com/truyengidotnet/" class="modal__item-link">
            <i class="modal__item-icon fa-brands fa-facebook-f"></i>
          </a>
        </div>
        <div class="modal__item-btn">
          <span class="modal__item-link modal__item-link--email">LIÊN HỆ NẠP VIP: NHOM1-C4E137@GMAIL.COM</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;

document.getElementById('footer').innerHTML = `
<!-- Nhat - Footer -->
<footer id="footer-wrapper">
  <div id="footer" class="grid">
    <!-- Logo -->
    <h2 class="footer__logo">
      <div class="footer__logo-link">
        <div style="background-image: url(https://logos-world.net/wp-content/uploads/2021/02/Crunchyroll-Emblem.png);"
          class="footer__logo-img"></div>
      </div>
    </h2>

    <!-- Description -->
    <ul class="footer__menu-list">
      <li class="footer__menu-item">
        <a href="../danhsach-truyen.html" class="footer__menu-link">Danh sách truyện</a>
      </li>
      <li class="footer__menu-item">
        <!-- <a href="" class="footer__menu-link">Đang đọc</a> -->
      </li>
      <li class="footer__menu-item">
        <!-- <a href="" class="footer__menu-link">Theo dõi</a> -->
      </li>
      <li class="footer__menu-item">
        <a href="../huongdan.html" class="footer__menu-link">FAQ/Hướng dẫn</a>
      </li>
    </ul>

    <p class="footer__policy">Thế giới truyện tranh - NHÓM 1 - C4E137 - Thoả mãn đam mê truyện tranh của bạn</p>

    <div class="footer__email">
      <div class="footer__email-link">Liên hệ đăng truyện: nhom1-c4e137@GMAIL.COM</div>
      <div class="footer__email-link">Liên hệ nạp VIP: nhom1-c4e137@GMAIL.COM</div>
    </div>

    <p class="footer__copyright">COPYRIGHT (C) NHOM1-C4E137. ALL RIGHTS RESERVED.</p>

  </div>
</footer>
`;


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

let userStatus = localStorage.getItem('status');
if (userStatus == 'true') {
// change user ava
    document.getElementById('js-user-ava').classList.remove('d-none');
    document.getElementById('js-user-modal').classList.add('d-none');

    // login modal
    document.getElementById('js-user-ava').addEventListener('click', function() {
    $modal.classList.add('d-none');
    document.getElementById('modal-login').classList.remove('d-none');
    document.getElementById('modal-login').classList.add('d-block');
    })

    document.getElementById('modal-login').addEventListener('click', function() {
    document.getElementById('modal-login').classList.remove('d-block');
    })

    document.getElementById('modal-login__container').addEventListener('click', function(event) {
    event.stopPropagation();
    })

    // bell alert
    $bellAlert.removeEventListener('click', bellAlert);

    // Log out
    document.getElementById('js-logout').addEventListener('click', function() {
        localStorage.removeItem('status');
    })


    let listTruyenMoi = [
    {
        src: "https://blog.hamtruyentranh.com/wp-content/uploads/2020/02/Ore-no-Yubi-de-Midarero-768x989.jpg",
        description: "[18+] Ore no Yubi de Midarero",
        chapter: 1.1,
        link: "/SPCK/html/item1/item1.html"
    },
    {
        src: "https://toplist.vn/images/800px/thuan-tinh-nha-dau-hoa-lat-lat-595101.jpg",
        description: "Thuần tình nha đầu Hoả Lạt Lạt",
        chapter: 1.1,
        link: "/SPCK/html/item2/item2.html"
    },
    {
        src: "https://toplist.vn/images/800px/xin-hay-lam-em-tro-nen-xinh-dep-595128.jpg",
        description: "Chàng trai người máy êm ấm 741 của tôi",
        chapter: 1.1,
        link: "/SPCK/html/item3/item3.html"
    }, 
    {
        src: "https://i.pinimg.com/736x/81/bb/18/81bb1845abcf81188d158a80f01ad4e1.jpg",
        description: "Chàng trai người máy êm ấm 741 của tôi",
        chapter: 1.1,
        link: "/SPCK/html/item4/item4.html"
    },
    {
        src: "http://static1.dienanh.net/upload/2015/06/17/Hoa-Ra-Anh-Van-O-Day-v.jpg",
        description: "Hoá ra anh vẫn ở đây",
        chapter: 1.1,
        link: "/SPCK/html/item5/item5.html"
    },
    {
        src: "https://images8.intercomics.club/vnstory/ff/4c/ff4c43d3540945b071a38fea5425f6d7.jpeg",
        description: "Anh không thích toàn cầu này, anh chỉ thích em",
        chapter: 1.1,
        link: "/SPCK/html/item6/item6.html"
    },
    {
        src: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/01/28/e9m5bw2h_660x946-dieutuyetvoinhatcuachungta.jpg",
        description: "Điều tuyệt vời nhất của chúng ta",
        chapter: 1.1,
        link: "/SPCK/html/item7/item7.html"
    },
    {
        src: "https://toplist.vn/images/800px/hotboy-quoc-dan-la-nu-595124.jpg",
        description: "Hotboy Quốc Dân Là Nữ",
        chapter: 1.1,
        link: "/SPCK/html/item8/item8.html"
    },
];


    // Search PC Tablet
let searchPcTablet = document.getElementById('searchPcTablet');
let txtKeywords = document.getElementById('txtKeywords');

searchPcTablet.addEventListener('click', function() {
 let inputPcTablet = txtKeywords.value;
 let newListTruyenMoi = listTruyenMoi.filter(function(element) {
    return element.description.toLowerCase().includes(inputPcTablet);
});
    if (newListTruyenMoi[0] == undefined || inputPcTablet == '') {
        window.location.href = `../danhsach-truyen.html`;
    }
    else {
        window.location.href = `${newListTruyenMoi[0].link}`;
    }
})


// Search Mobile
let searchMobile = document.getElementById('searchMobile');
let txtKeywordsMobile = document.getElementById('txtKeywordsMobile');

searchMobile.addEventListener('click', function() {
 let inputMobile = txtKeywordsMobile.value;
 let mobileListTruyenMoi = listTruyenMoi.filter(function(element) {
    return element.description.toLowerCase().includes(inputMobile);
});
    if (mobileListTruyenMoi[0] == undefined || inputMobile == '') {
        window.location.href = `../danhsach-truyen.html`;
    }
    else {
        window.location.href = `${mobileListTruyenMoi[0].link}`;
    }
})
}
else {
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
}
