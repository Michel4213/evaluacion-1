
window.onload = function () {
    let btn1 = document.querySelector("#A1");
    let btn2 = document.querySelector("#A2");
    let btn3 = document.querySelector("#A3");
    let btn4 = document.querySelector("#A4");
    let btn5 = document.querySelector("#A5");
    let btn6 = document.querySelector("#A6");
    var letras1 = document.getElementById("letras");

    function repetida() {
        alertaRepetida();
    }

    const alertaRepetida = () => {
        alert("Letra ya ingresada")
     }

    const textLetras1 = () => {
        if (letras1.textContent != "") {
            repetida ()
        } else {
            letras1.innerHTML += "A";
        }
    }

    btn1.onclick = function () {
        textLetras1();
    }


    const textLetras2 = () => {
        if (letras1.textContent == "A") {
            letras1.innerHTML += "B";
        } else {
            repetida ()
        }
    }

    btn2.onclick = function () {
        alertaFalta2();
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
            repetida ()
        }
    }

    btn3.onclick = function () {
        alertaFalta3();
    }
    
     const alertaFalta3 = () => {
        if (letras1.innerHTML == "A" || "") {
        alert("Faltan letras");
     } else {
        textLetras3();
     }
    }
}
