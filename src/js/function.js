$(document).ready(function () {
    $("#guardarCpk").click(function () {
        agregarColor();
    });

    $("#guardarHx").click(function () {
        agregarManual();
    });
});

const btn = ['ns', 'ns', 'ns', 'ns'];
const clr = ['ns', 'ns', 'ns', 'ns'];

function agregarColor() {

    var color = document.getElementById('colorpicker').value;

    if (btn[0] == 'ns') {
        probar1.style.backgroundColor = color;
        eliminar1.style.backgroundColor = color;
        btn[0] = 'n';
        clr[0] = color;
    } else if (btn[1] == 'ns') {
        probar2.style.backgroundColor = color;
        eliminar2.style.backgroundColor = color;
        btn[1] = 'n';
        clr[1] = color;
    } else if (btn[2] == 'ns') {
        probar3.style.backgroundColor = color;
        eliminar3.style.backgroundColor = color;
        btn[2] = 'n';
        clr[2] = color;
    } else if (btn[3] == 'ns') {
        probar4.style.backgroundColor = color;
        eliminar4.style.backgroundColor = color;
        btn[3] = 'n';
        clr[3] = color;
    }
}

function agregarManual() {

    var color = document.getElementById('colorHex').value;

    if (btn[0] == 'ns') {
        probar1.style.backgroundColor = color;
        eliminar1.style.backgroundColor = color;
        btn[0] = 'n';
        clr[0] = color;
    } else if (btn[1] == 'ns') {
        probar2.style.backgroundColor = color;
        eliminar2.style.backgroundColor = color;
        btn[1] = 'n';
        clr[1] = color;
    } else if (btn[2] == 'ns') {
        probar3.style.backgroundColor = color;
        eliminar3.style.backgroundColor = color;
        btn[2] = 'n';
        clr[2] = color;
    } else if (btn[3] == 'ns') {
        probar4.style.backgroundColor = color;
        eliminar4.style.backgroundColor = color;
        btn[3] = 'n';
        clr[3] = color;
    }
}

function eliminarEfecto(btnp) {
    var boton = btnp.id;

    var value = btn[3];

    console.log(value);

    if (btn[0] == 'n' && boton == 'eliminar1') {
        probar1.style.backgroundColor = '';
        eliminar1.style.backgroundColor = '';
        btn[0] = 'ns';
    } else if (btn[1] == 'n' && boton == 'eliminar2') {
        probar2.style.backgroundColor = '';
        eliminar2.style.backgroundColor = '';
        btn[1] = 'ns';
    } else if (btn[2] == 'n' && boton == 'eliminar3') {
        probar3.style.backgroundColor = '';
        eliminar3.style.backgroundColor = '';
        btn[2] = 'ns';
    } else if (btn[3] == 'n' && boton == 'eliminar4') {
        probar4.style.backgroundColor = '';
        eliminar4.style.backgroundColor = '';
        btn[3] = 'ns'
    }
}

function agregarEstilo(btn) {

    var boton = btn.id;

    var nc = "";

    if (boton == 'probar1') {
        nc = clr[0];
    } else if (boton == 'probar2') {
        nc = clr[1];
    } else if (boton == 'probar3') {
        nc = clr[2];
    } else if (boton == 'probar4') {
        nc = clr[3];
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
