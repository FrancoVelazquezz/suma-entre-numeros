import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;
/*
• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
*/
let numMin: number = Number(prompt("Ingrese el primer numero: "));
let numMax: number = Number(prompt("Ingrese el segundo numero: "));
//let numMin: number = 0
//let numMax: number = 0
if (((numMin) => numMax) && numMax <= numMin) {
  alert("Datos incorrectos");
} else {
  let resultado: number = 0;
  for (let i = numMin; i <= numMax; i++) {
    resultado = resultado + i;
  }
  console.log(resultado);
}
