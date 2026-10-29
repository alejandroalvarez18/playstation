/* 
  ====================================================================
  CONTROL DE ACCESO Y VALIDACIÓN - PORTAL DE CLIENTES
  ==================================================================== 
*/

document.addEventListener('DOMContentLoaded', () => {
    const formularioLogin = document.getElementById('form-login');

    if (formularioLogin) {
        formularioLogin.addEventListener('submit', (e) => {
            // Evita el envío por defecto para procesar la alerta primero
            e.preventDefault();

            const correoUsuario = document.getElementById('email').value;

            // Simulación de respuesta exitosa del servidor
            alert(`¡Bienvenido de nuevo!\nAccediendo al portal con la cuenta: ${correoUsuario}`);
            
            // Limpia el formulario
            formularioLogin.reset();

            // 👇 Esta línea te redirige a la carpeta htmlsemantico al dar clic en Aceptar
            window.location.href = "../incrustado/index.html";
        });
    }
});
