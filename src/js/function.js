$(document).ready(function () {
    $("#guardarCpk").click(function () {
        agregarColor();
    });

    $("#guardarHx").click(function () {
        agregarManual();
    });
});

var btn1 = "ng", btn2 = "ng", btn3 = "ng", btn4 = "ng";
var clr1 = "ng", clr2 = "ng", clr3 = "ng", clr = "ng";

function agregarColor() {

    var color = document.getElementById('colorpicker').value;

    if (btn1 == "ng") {
        probar1.style.backgroundColor = color;
        eliminar1.style.backgroundColor = color;
        btn1 = 'n';
        clr1 = color;
    } else if (btn2 == 'ng') {
        probar2.style.backgroundColor = color;
        eliminar2.style.backgroundColor = color;
        btn2 = 'n';
        clr2 = color;
    } else if (btn3 == 'ng') {
        probar3.style.backgroundColor = color;
        eliminar3.style.backgroundColor = color;
        btn3 = 'n';
        clr3 = color;
    } else if (btn4 == 'ng') {
        probar4.style.backgroundColor = color;
        eliminar4.style.backgroundColor = color;
        btn4 = 'n';
        clr4 = color;
    }
}

function agregarManual() {

    var color = document.getElementById('colorHex').value;

    if (btn1 == "ng") {
        probar1.style.backgroundColor = color;
        eliminar1.style.backgroundColor = color;
        btn1 = 'n';
        clr1 = color;
    } else if (btn2 == 'ng') {
        probar2.style.backgroundColor = color;
        eliminar2.style.backgroundColor = color;
        btn2 = 'n';
        clr2 = color;
    } else if (btn3 == 'ng') {
        probar3.style.backgroundColor = color;
        eliminar3.style.backgroundColor = color;
        btn3 = 'n';
        clr3 = color;
    } else if (btn4 == 'ng') {
        probar4.style.backgroundColor = color;
        eliminar4.style.backgroundColor = color;
        btn4 = 'n';
        clr4 = color;
    }
}

function eliminarEfecto(btn) {
    var boton = btn.id;

    if (btn1 == 'n' && boton == 'eliminar1') {
        probar1.style.backgroundColor = '';
        eliminar1.style.backgroundColor = '';
        btn1 = 'ng';
    } else if (btn2 == 'n' && boton == 'eliminar2') {
        probar2.style.backgroundColor = '';
        eliminar2.style.backgroundColor = '';
        btn2 = 'ng';
    } else if (btn3 == 'n' && boton == 'eliminar3') {
        probar3.style.backgroundColor = '';
        eliminar3.style.backgroundColor = '';
        btn3 = 'ng';
    } else if (btn4 == 'n' && boton == 'eliminar4') {
        probar4.style.backgroundColor = '';
        eliminar4.style.backgroundColor = '';
        btn4 = 'ng'
    }
}

function agregarEstilo(btn) {

    var boton = btn.id;

    var nc = "";

    if (boton == 'probar1') {
        nc = clr1;
    } else if (boton == 'probar2') {
        nc = clr2;
    } else if (boton == 'probar3') {
        nc = clr3;
    } else if (boton == 'probar4') {
        nc = clr4;
    }

    if (document.getElementById('fondoMenu').checked) {

        document.getElementById('fondo_menu').style.backgroundColor = nc;

    }
    else if (document.getElementById('opcionMenu').checked) {

        const inputs = document.getElementsByTagName('a');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.color = nc;
        }
    }
    else if (document.getElementById('MenuHover').checked) {



        const inputs = document.getElementsByTagName('a');

        const antColor = inputs[0].style.color;

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('mouseover', function () {
                inputs[i].style.color = nc;
            })
            inputs[i].addEventListener('mouseleave', function () {
                inputs[i].style.color = antColor;
            })
        }

    }
    else if (document.getElementById('FondoOpcMenu').checked) {

        const inputs = document.getElementsByTagName('a');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = nc;
        }
    }
    else if (document.getElementById('FondoOpcMH').checked) {

        const inputs = document.getElementsByTagName('a');

        const antColor = inputs[0].style.backgroundColor;

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('mouseover', function () {
                inputs[i].style.backgroundColor = nc;
            })
            inputs[i].addEventListener('mouseleave', function () {
                inputs[i].style.backgroundColor = antColor;
            })
        }
    }
    else if (document.getElementById('FondoGP').checked) {
        document.getElementById('fgp').style.backgroundColor = nc;
    }
    else if (document.getElementById('PiePagina').checked) {
        document.getElementById('footer_pg').style.backgroundColor = nc;
    }
    else if (document.getElementById('TextoPP').checked) {
        document.getElementById('txt_final').style.color = nc;
    }

}
