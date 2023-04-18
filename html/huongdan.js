
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
        window.location.href = `/SPCK/html/danhsach-truyen.html`;
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
        window.location.href = `/SPCK/html/danhsach-truyen.html`;
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