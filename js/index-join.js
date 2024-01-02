const sa = document.getElementById('alas');
const st = document.getElementById('tinggi');
const s1 = document.getElementById('sisi1');
const s2 = document.getElementById('sisi2');
const s3 = document.getElementById('sisi3');

function luasForm(){
    document.getElementById('Form').style.display = "block";
    document.getElementById('choose').innerHTML = "Calculating Luas";
    document.getElementById('choose').style.display = "block";
    document.getElementById('judulPerhitungan').innerHTML = "Rumus Luas Segitiga";
    document.getElementById('formula').innerHTML = "L = 1/2 x a x t";
    document.getElementById('keterangan').innerHTML = "L = Luas <br>a = Panjang Alas <br>t = Tinggi";
    document.getElementById('inputLuas').style.display = "block";
    document.getElementById('inputKeliling').style.display = "none";
    document.getElementById('hitungLuas').style.display = "block";
    document.getElementById('hitungKeliling').style.display = "none";
    document.getElementById('lihatPerhitungan').style.display = "none";
    document.getElementById('kondisiKosong').style.display = "none";
    document.getElementById('tutup').style.display = "block";
}
function kelilingForm(){
    document.getElementById('Form').style.display = "block";
    document.getElementById('choose').innerHTML = "Calculating Keliling";
    document.getElementById('choose').style.display = "block";
    document.getElementById('judulPerhitungan').innerHTML = "Rumus Keliling Segitiga";
    document.getElementById('formula').innerHTML = "K = a + b + c";
    document.getElementById('keterangan').innerHTML = "K = Keliling <br>a = Sisi 1 <br>b = Sisi 2<br>c = Sisi 3";
    document.getElementById('inputLuas').style.display = "none";
    document.getElementById('inputKeliling').style.display = "block";
    document.getElementById('hitungLuas').style.display = "none";
    document.getElementById('hitungKeliling').style.display = "block";
    document.getElementById('lihatPerhitungan').style.display = "none";
    document.getElementById('kondisiKosong').style.display = "none";
    document.getElementById('tutup').style.display = "block";
}
function hideForm(){
    document.getElementById('Form').style.display = "none";
    document.getElementById('kondisiKosong').style.display = "block";
    document.getElementById('choose').style.display = "none";
    document.getElementById('tutup').style.display = "none";
}

function hitungLuas(){
    document.getElementById('lihatPerhitungan').style.display = "block";
    // event.preventDefault();
    const v1 = parseFloat(sa.value) || 0;
    const v2 = parseFloat(st.value) || 0;
    const hitungan = 1 / 2 * v1 * v2 ;
    var nilai1 = "L = 1/2 x a x t";
    var nilai2 = "L = 1/2 x " + v1 + " x " + v2;
    var nilai3 = "L = " + hitungan;
    document.getElementById('perhitungan').innerHTML = nilai1 +"<br>"+nilai2 +"<br>"+nilai3;
}
function hitungKeliling(){
    document.getElementById('lihatPerhitungan').style.display = "block";
    // event.preventDefault();
    const kel1 = parseFloat(s1.value) || 0;
    const kel2 = parseFloat(s2.value) || 0;
    const kel3 = parseFloat(s3.value) || 0;
    const hitungan = kel1 + kel2 + kel3;
    var nilai1 = "K = a + b + c";
    var nilai2 = "K = " + kel1 + " + " + kel2 + " + " + kel3;
    var nilai3 = "K = " + hitungan;
    document.getElementById('perhitungan').innerHTML = nilai1 +"<br>"+nilai2 +"<br>"+nilai3;
}
function reset(){
    document.getElementById('lSummary').style.display = "none";
    document.getElementById('kSummary').style.display = "none";
}