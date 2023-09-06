//!<---------------Book finder app----------------->


let book1 = {
    isim : "Her Şeyi Düşünme",
    yazar : "Anne Bogel",
    fiyat: 25,
    raf: "1:5 RAF"
}

let book2 = {
  isim : "hiçbir Karşılaşma Tesadüf Değildir",
  yazar : "Hakan Mengüç",
  fiyat: 30,
  raf: "4:3 RAF"
}

let book3 = {
  isim : "İnsan Ne ile yaşar",
  yazar : "Tolsoy",
  fiyat: 34,
  raf: "2:5 RAF"
}

let book4 = {
  isim : "Zafer Sızlanarak Kazanılmaz",
  yazar : "Haluk Tatar",
  fiyat: 45,
  raf: "4:5 RAF"
}

let book5 = {
  isim : "Şeker Portakalı",
  yazar : "Jose Maruo",
  fiyat: 30,
  raf: "4:2 RAF"
}

let kitaplar = [book1,book2,book3,book4,book5];

let raf11 = {
  code: "1:1 RAF",
  show : false
}

let raf12 = {
  code: "1:2 RAF",
  show : false
}

let raf13 = {
  code: "1:3 RAF",
  show : false
}

let raf14 = {
  code: "1:4 RAF",
  show : false
}

let raf15 = {
  code: "1:5 RAF",
  show : false
}

let raf21 = {
  code: "2:1 RAF",
  show : false
}

let raf22 = {
  code: "2:2 RAF",
  show : false
}

let raf23 = {
  code: "2:3 RAF",
  show : false
}

let raf24 = {
  code: "2:4 RAF",
  show : false
}

let raf25 = {
  code: "2:5 RAF",
  show : false
}

let raf31 = {
  code: "3:1 RAF",
  show: false
}

let raf32 = {
  code: "3:2 RAF",
  show: false
}

let raf33 = {
  code: "3:3 RAF",
  show: false
}

let raf34 = {
  code: "3:4 RAF",
  show: false
}

let raf35 = {
  code: "3:5 RAF",
  show: false
}

let raf41 = {
  code: "4:1 RAF",
  show: false
}

let raf42 = {
  code: "4:2 RAF",
  show: false
}


let raf43 = {
  code: "4:3 RAF",
  show: false
}

let raf44 = {
  code: "4:4 RAF",
  show: false
}

let raf45 = {
  code: "4:5 RAF",
  show: false
}

let raf51 = {
  code: "5:1 RAF",
  show: false
}

let raf52 = {
  code: "5:2 RAF",
  show: false
}

let raf53 = {
  code: "5:3 RAF",
  show: false
}

let raf54 = {
  code: "5:4 RAF",
  show: false
}

let raf55 = {
  code: "5:5 RAF",
  show: false
}


let raflar = [
  [raf51,raf52,raf53,raf54,raf55],
  [raf41,raf42,raf43,raf44,raf45],
  [raf31,raf32,raf33,raf34,raf35],
  [raf21,raf22,raf23,raf24,raf25],
  [raf11,raf12,raf13,raf14,raf15]
];


function createRaf(){
  console.clear();
  let satir = "";
  for(let i = 0; i < raflar.length; i++){
    for(let j = 0; j < 5; j++){
      satir+="|" + (raflar[i][j].show ? raflar[i][j].code : "---") ;

    }
    console.log(satir);
    console.log('--------------------');
    satir="";
  }
}

 function kodBul(kitapIsmi){
  let rafKod = null;
  kitaplar.forEach(function(kitap){
    if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
      rafKod = kitap.raf;
    }
  });
  return rafKod;

 }  

function raftaGoster(rafKodu){
  for(let i = 0; i < raflar.length; i++){
    for(let j = 0; j < 5; j++){
      if(raflar[i][j].code==rafKodu){
        raflar[i][j].show=true;
        break;
      }
    }
  }
}


createRaf();

let kitapIsmi = prompt("please enter a book name");
let rafKod = kodBul(kitapIsmi);


if(rafKod !=null){
  raftaGoster(rafKod);
  createRaf();
}else{
  alert("Kitapiniz bizim kutuphanede bulunmamaktatir ");
}