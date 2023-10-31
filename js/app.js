const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const botones2 = document.querySelectorAll(".btn2");
const selectorButton = document.getElementById('selectorButton')

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (pantalla.textContent === "0" ||pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
})

botones2.forEach(boton2 => {
    boton2.addEventListener("click", () => {
        if (boton2.id === "reset") {
            pantalla.textContent = "0";
            return;
        }

        if (boton2.id === "del") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton2.id === "igual") {
            try {
                pantalla.textContent = evaluarExpresion(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "Error!";
            }
        }
    });
})

function evaluarExpresion(expresion) {
    if (/\/\/|[^0-9+\-*/().]/.test(expresion)) {
        throw new Error("Expresión no válida");
    }
    return eval(expresion);
}


let justifyContentValue = 0;

// Agrega un evento click al botón
selectorButton.addEventListener('click', () => {
    console.log("1");
    switch (justifyContentValue) {
        case 0:
            selectorButton.style.justifyContent = 'left';
        justifyContentValue = 1;
        document.body.classList.remove('purple');
        document.body.classList.toggle('blue');
        break;
        case 1:
            selectorButton.style.justifyContent = 'center';
        justifyContentValue = 2;
        document.body.classList.toggle('blue');
        document.body.classList.toggle('white');
        break;
        case 2:
            selectorButton.style.justifyContent = 'right';
        justifyContentValue = 0;
        document.body.classList.remove('blue', 'white'); 
        document.body.classList.toggle('purple');
        break;
    }
});