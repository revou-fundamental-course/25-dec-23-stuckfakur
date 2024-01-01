const sa = document.getElementById('a');
const st = document.getElementById('t');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');

function lForm(){
    document.getElementById('lForm').style.display = "block";
    document.getElementById('kForm').style.display = "none";
    document.getElementById('choose').innerHTML = "Calculating Luas";
    document.getElementById('choose').style.display = "block";
    document.getElementById('lformula').innerHTML = "L = 1/2 x a x t";

}
function kForm(){
    document.getElementById('lForm').style.display = "none";
    document.getElementById('kForm').style.display = "block";
    document.getElementById('choose').innerHTML = "Calculating Keliling";
    document.getElementById('choose').style.display = "block";
    document.getElementById('kformula').innerHTML = "K = a + b + c";

}

function lView(){
    document.getElementById('lSummary').style.display = "block";
    event.preventDefault();
    const v1 = parseFloat(sa.value) || 0;
    const v2 = parseFloat(st.value) || 0;
    const calc = 1 / 2 * v1 * v2 ;
    console.log(calc);
    document.getElementById('lformulas').innerHTML = "L = 1/2 x a x t";
    document.getElementById('lvaluesub').innerHTML = "L = 1/2 x " + v1 + " x " + v2;
    document.getElementById('lvalue').innerHTML = "L = " + calc;
}
function kView(){
    document.getElementById('kSummary').style.display = "block";
    event.preventDefault();
    const kel1 = parseFloat(s1.value) || 0;
    const kel2 = parseFloat(s2.value) || 0;
    const kel3 = parseFloat(s3.value) || 0;
    const kelvalue = kel1 + kel2 + kel3;
    console.log(kelvalue);
    document.getElementById('kformulas').innerHTML = "K = a + b + c";
    document.getElementById('kvaluesub').innerHTML = "K = " + kel1 + " + " + kel2 + " + " + kel3;
    document.getElementById('kvalue').innerHTML = "K = " + kelvalue;
}
function lReset(){
    document.getElementById('lSummary').style.display = "none";
}
function kReset(){
    document.getElementById('kSummary').style.display = "none";
}

