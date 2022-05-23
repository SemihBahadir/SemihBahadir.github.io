
function fonksiyon1()
{
var k1=Number(document.getElementById("txtKenar1").value);
var k2=Number(document.getElementById("txtKenar2").value);
var hipotenus=math.sqrt((k1*k1)+(k2*k2));
document.getElementById("sonucf1").innerHTML="Hipotenüs: "+hipotenus;
}
var Hesapbtn=document.getElementById("btn");
Hesapbtn.onclick=fonksiyon1;
function fonksiyon2(){
    KayanYazi=function(nesne,zaman){
    let yaziNesne=nesne;
    setInterval(function(){
        let yazi =yaziNesne.innerHTML;
        let harf=yazi.substring(0,1);
        let kalan = yazi.substring(1,yazi.length);
        kalan=kalan+harf
        yaziNesne.innerHTML=kalan;
    },zaman);
    }
    var nesne=document.getElementById("yazi");
    KayanYazi(nesne,750);
}

    function fonksiyon3(sayi){
        var sonucf3=1;
        for(var i=1;i<=sayi;i++)
        {
            sonucf3*=i;
        }
        return sonucf3;
    }
var btn1=document.getElementById("f4hesapla");
btn1.onclick=function(){
    var n=Number(document.getElementById("elemansayi").value);
    var r=number(document.getElementById("secimsayi").value);
    var sonucf4=faktor(n)/(faktor(r)*faktor(n-r));
    document.getElementById("kutu").innerHTML=sonucf4;
}
function fonksiyon4(){
    var sayi1=document.getElementById("kenar1").value;
    var sayi2=document.getElementById("kenar2").value;
    sayi1=Number(sayi1);
    sayi2=Number(sayi2);
    var alan=sayi1*sayi2/2;
    alert("Üçgenin Alanı="+alan);
    var Hesapbtn=document.getElementById("f4hesapla");
    Hesapbtn.onclick=f4hesapla;
}
function fonksiyon5(sayi3){
    if(sayi3.value%2==0)
    {
alert(sayi3.value+"Sayısı Çifttir");
    }
    else if(sayi3.value%2==1)
    {
alert(sayi3.value+"Sayısı Tektir");
    }
}
function fonksiyon6()
{
    alert("MERHABA");
}
function fonksiyon7()
{
    var f7sonuc=1;
    var f7sayi1=document.getElementById("f7sayi1").value;
    var f7sayi2=document.getElementById("f7sayi2").value;
    var taban=number(f7sayi1);
    var us=number(f7sayi2);
    for(var i=0; i<us;i++)
    {
        f7sonuc=f7sonuc*taban;
    }
    document.getElementById("f7sonuc").innerHTML="Sonuç"+f7sonuc;
}
var hesaplabtnf7=document.getElementById("f7button")
hesaplabtnf7.onclick=fonksiyon7;
function fonksiyon8()
{
    document.getElementById("f8sonuc").innerHTML=Math.random();
}
var d=new Date();
var gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi",]
document.getElementById("test").innerHTML=gunler[d.getDay()];
function fonksiyon10()
{
    var f10sayi=document.getElementById("uzunluk").value;
    f10sayi=number(f10sayi);
    var mil=0.621*f10sayi;
    alert(Sayi+"km="+mil.toFixed(2)+"mildir");
    var f10hspbuttn=document.getElementById("f10hesapla");
    f10hspbuttn.onclick=f10hesapla;
}

