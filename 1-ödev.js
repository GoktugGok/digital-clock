let isim = prompt("Adınızı giriniz")
let musteri = document.querySelector("#name")

if(isim.length > 0)
{
  let büyükh = `${isim[0].toUpperCase()}${isim.slice(1).toLowerCase()} `
  musteri.innerHTML = büyükh;
}
else
{
   let hepsi = document.querySelector("#greeting")
    hepsi.innerHTML = "Lütfen isminizi giriniz";
}

function showTime() {
    let zaman = document.querySelector("#edc")
    var tarih=new Date();
    var saat =tarih.getHours()
    var dakika =tarih.getMinutes()
    var saniye =tarih.getSeconds()
    let gun = tarih.getDay();

if(gun==0)
    {
        gun = "Pazar";
    }
    else if(gun==1){
        gun = "P.TESİ";
    }else if(gun==2){
        gun = "SALI";
    }else if(gun==3){
        gun = "ÇARŞAMBA";
    }else if(gun==4){
        gun = "PERŞEMBE";
    }else if(gun==5){
        gun = "CUMA";
    }else if(gun==6){
        gun = "C.TESİ";
    }
setTimeout(showTime, 1000);
zaman.innerHTML =  saat + ":" + dakika + ":" + saniye +  "  "+ gun;
}
showTime();