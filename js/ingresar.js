document.addEventListener("DOMContentLoaded", iniciarPrograma);

function iniciarPrograma() {
    const formularioLogin = document.getElementById("form_login");
    const formularioRegistro = document.getElementById("form_registro");

    if (formularioLogin) {
        formularioLogin.addEventListener("submit", ejecutarLogin);
    }

    if (formularioRegistro) {
        formularioRegistro.addEventListener("submit",ejecutarRegistro);
    }


    function ejecutarLogin(evento) {
        evento.preventDefault();

        const usuario_login = document.getElementById("usuario").value;
        const contraseña_login = document.getElementById("contraseña_login").value;
        const alerta_exito_log = document.getElementById("mensaje_exito_login");

        const registroUsuario = localStorage.getItem("usuario_guardado");
        const registroContraseña= localStorage.getItem("contraseña_guardada");

        const esUsuarioRegistrado=(usuario_login===registroUsuario && contraseña_login===registroContraseña);
        const esAdmin=(usuario_login==="admin" && contraseña_login==="1234");

        if(esUsuarioRegistrado || esAdmin){
            localStorage.setItem("usuario_ingresado","si");

            if(esAdmin){
                localStorage.setItem("rol_usuario","admin");

            }else{
                localStorage.removeItem("rol_usuario");
            }

            alerta_exito_log.style.display = "block";

            setTimeout(function () {
                window.location.href = "/index.html";
            }, 2000);

        } else {
            alerta_exito_log.style.display = "none";
            alert("Usuario y/o contraseña incorrectos");
        }}

    function ejecutarRegistro(event) {
        event.preventDefault();

        const nombre_reg = document.getElementById("nombre_registro").value.trim();
        const usuario_reg = document.getElementById("usuario_registro").value.trim();
        const correo_reg = document.getElementById("correo_registro").value.trim();
        const contraseña_reg = document.getElementById("contraseña_registro").value;
        const rep_contraseña = document.getElementById("confirmar_contraseña_registro").value;
        const alerta_exito_reg = document.getElementById("mensaje_exito_registro");

        if (contraseña_reg !== rep_contraseña) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (contraseña_reg.length < 6) {
            alert("La contraseña debe tener mas de 6 caracteres.");
            return;
        }

        localStorage.setItem("usuario_guardado",usuario_reg);
        localStorage.setItem("contraseña_guardada",contraseña_reg);
        
        alerta_exito_reg.style.display = "block";
        setTimeout(function () {
            window.location.href="/ingresar.html";
        }, 2000);




    }
}
