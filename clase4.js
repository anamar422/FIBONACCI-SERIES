let a = 1;
let b = 1;
console.log(a+b+8);
console.log(b);
b=0;
let suma= a+b;
let resta= a-b;
let multiplicacion = a*b;
let division = a/b;

a=1;
b=8;
 console.log(suma);
 console.log (resta);
 console.log(multiplicacion);
 console.log(division);
if(b==0){console.log("la operacion no esta permitida");
}else {
    console.log(a/b);
}


// aqui comienza serie fibonacci//
let n1=0;
let n2 =1;
let nexterm = n1+n2;
console.log(nexterm);

for(let i =1;i <= 10;i++) {
    console.log(n1);
    nexterm= n1+n2;
    n1=n2;
    n2=nexterm;
}





