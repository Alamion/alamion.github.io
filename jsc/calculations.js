function calculate() {
  document.getElementById("x2").value = roughScale(document.getElementById("x2").value).toString();
  document.getElementById("xy").value = roughScale(document.getElementById("xy").value).toString();
  document.getElementById("y2").value = roughScale(document.getElementById("y2").value).toString();
  document.getElementById("x").value = roughScale(document.getElementById("x").value).toString();
  document.getElementById("y").value = roughScale(document.getElementById("y").value).toString();
  document.getElementById("f").value = roughScale(document.getElementById("f").value).toString();
  A = document.getElementById("x2").value;
  B = document.getElementById("xy").value;
  C = document.getElementById("y2").value;
  D = document.getElementById("x").value;
  E = document.getElementById("y").value;
  F = document.getElementById("f").value;
if (A==C){
Fi = Math.PI/4;
}else{
Fi = Math.atan(B/(A-C))/2;}
A1=A*Math.cos(Fi)**2 + B*Math.cos(Fi)*Math.sin(Fi) + C*Math.sin(Fi)**2;
C1=A*Math.sin(Fi)**2 - B*Math.cos(Fi)*Math.sin(Fi) + C*Math.cos(Fi)**2;
D1=D*Math.cos(Fi) + E*Math.sin(Fi);
E1=D*Math.sin(Fi) - E*Math.cos(Fi);
A2=(A1*(D1/(2*A1))**2 + C1*(E1/(2*C1))**2-F)/A1;
B2=(A1*(D1/(2*A1))**2 + C1*(E1/(2*C1))**2-F)/C1;
if (A1**2+C1**2!=0){
if (A1*C1>0){
  if (A2*A1>0){
    if (A2>B2){
      document.getElementById("output").innerHTML = `𝜀 = ${Math.round(Math.sqrt(1-Math.abs(B2/A2))*1000)/1000}, это действительный эллипс.`;
    }else if (A2<B2){
      document.getElementById("output").innerHTML = `𝜀 = ${Math.round(Math.sqrt(1-Math.abs(A2/B2))*1000)/1000}, это действительный эллипс.`;
    }else{
      document.getElementById("output").innerHTML = "𝜀 = 0, это окружность";
    }
  }else if (A2*A1<0){
  document.getElementById("output").innerHTML = "Это мнимый эллипс или в 𝑅2 это пустое множество «∅»";
  }else{
    document.getElementById("output").innerHTML = "Это точка (0;0)";
  }
}else if (A1*C1<0){
  if (A2*A1==0){
    document.getElementById("output").innerHTML = "Это пара пересекающихся прямых";
  }else{
    document.getElementById("output").innerHTML = `𝜀 = ${Math.round(Math.sqrt(1+Math.abs(B2/A2))*1000)/1000}, это действительная гипербола` ;
  }
}else{
  if ((A1==0 && D1!=0) || (C1==0 && E1!=0)){
    document.getElementById("output").innerHTML = "𝜀 = 1, это парабола";
  }else if (A1==0 && D1==0){
    if (E1**2-4*C1*F<0){
      document.getElementById("output").innerHTML = "Это мнимые прямые или в 𝑅2 это пустое множество «∅»";
    }else if ((E1**2-4*C1*F)==0){
      document.getElementById("output").innerHTML = "Это прямая";
    }else{
      document.getElementById("output").innerHTML = "Это пара параллельных прямых";
    }
  }else{
    if ((D1**2-4*A1*F)<0){
      document.getElementById("output").innerHTML = "Это мнимые прямые или в 𝑅2 это пустое множество «∅»";
    }else if ((D1**2-4*A1*F)==0){
      document.getElementById("output").innerHTML = "Это прямая";
    }else{
      document.getElementById("output").innerHTML = "Это пара параллельных прямых";
    }
  }
}
}else{
if (D1**2+E1**2!=0){
  if ((D1!=0 && E1!=0) || (D1==0) || (E1==0)){
    document.getElementById("output").innerHTML = "Это прямая";
  }
}else if (F!=0){
  document.getElementById("output").innerHTML = "Это пустое множество «∅»";
}else{
  document.getElementById("output").innerHTML = "Вы ничего не ввели.";
}
}
}
function roughScale(x) {
const parsed = parseFloat(x, 10);
if (isNaN(parsed)) { return 0; }
return parsed;
}
function autoresize() {
let size = input.scrollWidth
input.style.width = size + 'px';
input.style.transition = "none";
}


let input1 = document.getElementById('x2');
input1.addEventListener('input', autoresize);
let input2 = document.getElementById('xy');
input2.addEventListener('input', autoresize);
let input3 = document.getElementById('y2');
input3.addEventListener('input', autoresize);
let input4 = document.getElementById('x');
input4.addEventListener('input', autoresize);
let input5 = document.getElementById('y');
input5.addEventListener('input', autoresize);
let input6 = document.getElementById('f');
input6.addEventListener('input', autoresize);
