document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar funcion para reproducir video')
    } else {
        console.log('Pausar video')
    }
})