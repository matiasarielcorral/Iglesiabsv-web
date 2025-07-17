document.querySelector('.boton-desplegar').addEventListener('click', function() {
    const infoAdicional = document.querySelector('.info-adicional');
    if (infoAdicional.style.display === 'block') {
        infoAdicional.style.display = 'none';
    } else {
        infoAdicional.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const menuDesplegable = document.querySelector('.menu-desplegable');
    
    menuDesplegable.addEventListener('click', function(e) {
        // Evita que el enlace "#ministerios" navegue
        if (e.target.tagName === 'A') {
            e.preventDefault();
        }
        const submenu = this.querySelector('.submenu');
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});