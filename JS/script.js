
window.onload = function () {
    let btn1 = document.querySelector("#A1");
    let btn2 = document.querySelector("#A2");
    let btn3 = document.querySelector("#A3");
    let btn4 = document.querySelector("#A4");
    let btn5 = document.querySelector("#A5");
    let btn6 = document.querySelector("#A6");
    let btn7 = document.querySelector("#A7");
    let btn8 = document.querySelector("#A8");
    let btn9 = document.querySelector("#A9");
    let btn10 = document.querySelector("#A11");
    var letras1 = document.getElementById("letras");
    var numeros1 = document.getElementById("numeros")

    function repetida() {
        alertaRepetida();
    }

    const alertaRepetida = () => {
        alert("Caracter ya ingresado")
     }

    const textLetras1 = () => {
        if (letras1.textContent != "") {
            repetida ()
        } else {
            letras1.innerHTML += "A";
        }
    }

    const alertaNumero1 = () => {
        if (numeros1.textContent != "") {
            repetida ()
        } else {
            numeros1.innerHTML += "1";
        }
    }

    btn1.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero1();
        }else{
        textLetras1();
        }
    }

    const textLetras2 = () => {
        if (letras1.textContent == "A") {
            letras1.innerHTML += "B";
        } else {
            repetida ()
        }
    }

    const textNumeros2 = () => {
        if (numeros1.textContent == "1") {
            numeros1.innerHTML += "2";
        } else {
            repetida ()
        }
    }

    const alertaNumero2 = () => {
        if (numeros1.textContent == "") {
        alert("Faltan Numeros");
     } else {
        textNumeros2();
     }
    }

    btn2.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero2();
        }else{
        alertaFalta2();
        }
    }

    const alertaFalta2 = () => {
        if (letras1.textContent == "") {
        alert("Faltan letras");
     } else {
        textLetras2();
     }
    }



    const textLetras3 = () => {
        if (letras1.textContent == "AB") {
            letras1.innerHTML += "C";
        } else {
            repetida ();
        }
    }

    const textNumeros3 = () => {
        if (numeros1.textContent == "12") {
            numeros1.innerHTML += "3";
        } else {
            repetida ()
        }
    }

    const alertaNumero3 = () => {
        if (numeros1.textContent == "1" || numeros1.textContent == "") {
        alert("Faltan Numeros");
     } else {
        textNumeros3();
     }
    }

    btn3.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero3();
        }else{
        alertaFalta3();
        }
    }
    
     const alertaFalta3 = () => {
        if (letras1.textContent == ("" || "A")) {
        alert("Faltan letras");
     } else {
        textLetras3();
     }
    }

    const textLetras4 = () => {
        if (letras1.textContent == "ABC") {
            letras1.innerHTML += "D";
        } else {
            repetida ();
        }
    }

    const textNumeros4 = () => {
        if (numeros1.textContent == "123") {
            numeros1.innerHTML += "4";
        } else {
            repetida ()
        }
    }

    const alertaNumero4 = () => {
        if (numeros1.textContent == ("","1","12")) {
        alert("Faltan Numeros");
     } else {
        textNumeros4();
     }
    }

    btn4.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero4();
        }else{
        alertaFalta4();
        }
    }
    
     const alertaFalta4 = () => {
        if (letras1.innerHTML == ("","A","AB")) {
        alert("Faltan letras");
     } else {
        textLetras4();
     }
    }

    const textLetras5 = () => {
        if (letras1.textContent == "ABCD") {
            letras1.innerHTML += "E";
        } else {
            repetida ();
        }
    }

    const textNumeros5 = () => {
        if (numeros1.textContent == "1234") {
            numeros1.innerHTML += "5";
        } else {
            repetida ()
        }
    }

    const alertaNumero5 = () => {
        if (numeros1.textContent == ("","1","12","123")) {
        alert("Faltan Numeros");
     } else {
        textNumeros5();
     }
    }

    btn5.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero5();
        }else{
        alertaFalta5();
        }
    }
    
     const alertaFalta5 = () => {
        if (letras1.innerHTML == ("","A","AB","ABC")) {
        alert("Faltan letras");
     } else {
        textLetras5();
     }
    }

    const textLetras6 = () => {
        if (letras1.textContent == "ABCDE") {
            letras1.innerHTML += "F";
        } else {
            repetida ();
        }
    }

    const textNumeros6 = () => {
        if (numeros1.textContent == "12345") {
            numeros1.innerHTML += "6";
        } else {
            repetida ()
        }
    }

    const alertaNumero6 = () => {
        if (numeros1.textContent == ("","1","12","123","1234")) {
        alert("Faltan Numeros");
     } else {
        textNumeros6();
     }
    }

    btn6.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero6();
        }else{
        alertaFalta6();
        }
    }
    
     const alertaFalta6 = () => {
        if (letras1.innerHTML == ("","A","AB","ABC","ABCD")) {
        alert("Faltan letras");
     } else {
        textLetras6();
     }
    }

    const textLetras7 = () => {
        if (letras1.textContent == "ABCDEF") {
            letras1.innerHTML += "G";
        } else {
            repetida ();
        }
    }

    const textNumeros7 = () => {
        if (numeros1.textContent == "123456") {
            numeros1.innerHTML += "7";
        } else {
            repetida ()
        }
    }

    const alertaNumero7 = () => {
        if (numeros1.textContent == ("","1","12","123","1234","12345")) {
        alert("Faltan Numeros");
     } else {
        textNumeros7();
     }
    }

    btn7.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero7();
        }else{
        alertaFalta7();
        }
    }
    
     const alertaFalta7 = () => {
        if (letras1.innerHTML == ("","A","AB","ABC","ABCD","ABCDE")) {
        alert("Faltan letras");
     } else {
        textLetras7();
     }
    }

    const textLetras8 = () => {
        if (letras1.textContent == "ABCDEFG") {
            letras1.innerHTML += "H";
        } else {
            repetida ();
        }
    }

    const textNumeros8 = () => {
        if (numeros1.textContent == "1234567") {
            numeros1.innerHTML += "8";
        } else {
            repetida ()
        }
    }

    const alertaNumero8 = () => {
        if (numeros1.textContent == ("","1","12","123","1234","12345","123456")) {
        alert("Faltan Numeros");
     } else {
        textNumeros8();
     }
    }

    btn8.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero8();
        }else{
        alertaFalta8();
        }
    }
    
     const alertaFalta8 = () => {
        if (letras1.innerHTML == ("","A","AB","ABC","ABCD","ABCDE","ABCDEF")) {
        alert("Faltan letras");
     } else {
        textLetras8();
     }
    }

    const textLetras9 = () => {
        if (letras1.textContent == "ABCDEFGH") {
            letras1.innerHTML += "I";
        } else {
            repetida ();
        }
    }

    const textNumeros9 = () => {
        if (numeros1.textContent == "12345678") {
            numeros1.innerHTML += "9";
        } else {
            repetida ()
        }
    }

    const alertaNumero9 = () => {
        if (numeros1.textContent == ("","1","12","123","1234","12345","123456","1234567")) {
        alert("Faltan Numeros");
     } else {
        textNumeros9();
     }
    }

    btn9.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero9();
        }else{
        alertaFalta9();
        }
    }
    
     const alertaFalta9 = () => {
        if (letras1.innerHTML == ("","A","AB","ABC","ABCD","ABCDE","ABCDEF","ABCDEFG")) {
        alert("Faltan letras");
     } else {
        textLetras9();
     }
    }

    const textLetras10 = () => {
        if (letras1.textContent == "ABCDEFGHI") {
            letras1.innerHTML += "J";
        } else {
            repetida ();
        }
    }

    const textNumeros10 = () => {
        if (numeros1.textContent == "123456789") {
            numeros1.innerHTML += "0";
        } else {
            repetida ()
        }
    }

    const alertaNumero10 = () => {
        if (numeros1.textContent == ("","1","12","123","1234","12345","123456","1234567","12345678")) {
        alert("Faltan Numeros");
     } else {
        textNumeros10();
     }
    }

    btn10.onclick = function () {
        if (letras1.textContent == "ABCDEFGHIJ") {
        alertaNumero10();
        }else{
        alertaFalta10();
        }
    }
    
     const alertaFalta10 = () => {
        if (letras1.innerHTML == ("","A","AB","ABC","ABCD","ABCDE","ABCDEF","ABCDEFG","ABCDEFGH")) {
        alert("Faltan letras");
     } else {
        textLetras10();
     }
    }

}
