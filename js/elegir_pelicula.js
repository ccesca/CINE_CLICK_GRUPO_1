document.addEventListener("DOMContentLoaded", comprarEntrada);  

function comprarEntrada(){
    const form_compra=document.getElementById ("form_comprar_entrada");
    if(form_compra){
        form_compra.addEventListener("submit",procesarCompra);
    }
}

function procesarCompra(event){
    const yaIngreso = localStorage.getItem("usuario_ingresado");
    const errorCompra=document.getElementById("mensaje_error_compra");

    
    if(yaIngreso !== "si"){
        event.preventDefault();
        errorCompra.style.display="block";

    }else{

        errorCompra.style.display="none";
        alert("Procesando Compra");
    }

}