// import * as path from "../js/src-path-duc";

let listTieuThuyetMoi = [
    {
        src: "https://truyengihotne.com/uploads/covers/0_54678160-a877-457d-bdd2-3f98ead8b823.jpg",
        description: "DU TINH KHA DAI",
        chapter: 1.1,
        link: ""
    },
    {
        src: "https://truyengihotne.com/uploads/covers/0_6d75581f-4baa-48c5-9ba1-79fae05f2ce0.jpg",
        description: "HẮC NGUYỆT QUANG CẦM CHẮC KỊCH BẢN BE",
        chapter: 1.1
    },
    {
        src: "https://truyengihotne.com/uploads/covers/0_379a055d-02d2-40e6-a6fb-15619de1193d.jpg",
        description: "TUYỂN TẬP TRUYỆN NGẮN NGƯỢC TÂM",
        chapter: 1.1
    }, 
    {
        src: "https://truyengihotne.com/uploads/covers/0_48cd94be-5667-4238-ac84-e7279c1ea4b2.jpg",
        description: "[18+] NHẬT KÝ VỢ CHỒNG LÂM GIA!",
        chapter: 1.1
    },
    {
        src: "https://truyengihotne.com/uploads/covers/0_26d9fc33-aa95-4653-bea7-d461f98a9526.jpg",
        description: "[18+] BÁNH QUY NHỎ NHÂN ĐƯỜNG",
        chapter: 1.1
    },
    {
        src: "https://truyengihotne.com/uploads/covers/0_807a4706-dca9-4e3a-8d6f-e22a192123e1.jpg",
        description: "[18+] QUỶ SÚC CA CA, MỀM MANH MUỘI",
        chapter: 1.1
    },
    {
        src: "https://truyengihotne.com/uploads/covers/1647089356.jpg",
        description: "[18+] MAU XUYÊN: NUÔNG CHIỀU NHỤC DỤC",
        chapter: 1.1
    },
    {
        src: "https://truyengihotne.com/uploads/covers/0_0c7df53a-2de3-4e4e-aefe-4f4d227c7e6c.jpg",
        description: "[18+] YÊU EM LẦN NỮA, ĐƯỢC KHÔNG ANH?",
        chapter: 1.1
    },
];


const $trangDeXuat = document.getElementById('trang-de-xuat');

let bodyTrangDeXuat ="";


listTieuThuyetMoi.forEach(element => {
    bodyTrangDeXuat += `
    <div class="item">
       <img class="img-item" src="${element.src}" alt="">
         <p style="color: white;">${element.description}</p>
      </div>
    `;
});

$trangDeXuat.innerHTML = bodyTrangDeXuat;
console.log("sjkdfhsdkjh",listTieuThuyetMoi)
