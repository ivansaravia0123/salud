<script>
    const btnEmergencia = document.getElementById('btn-emergencia');
    const modalEmergencia = document.getElementById('modal-emergencia');
    const cerrarEmergencia = document.getElementById('cerrar-emergencia');

    btnEmergencia.addEventListener('click', () => {
        modalEmergencia.style.display = 'flex';
    });

    cerrarEmergencia.addEventListener('click', () => {
        modalEmergencia.style.display = 'none';
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener('click', (e) => {
        if(e.target === modalEmergencia){
            modalEmergencia.style.display = 'none';
        }
    });
</script>
