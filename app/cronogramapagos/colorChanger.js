export const initiateColorChange = (setColorIndex) => {
    let currentColorIndex = 0;

    const intervalId = setInterval(() => {
        currentColorIndex = (currentColorIndex + 1) % 4; // Suponiendo 4 colores
        setColorIndex(currentColorIndex); // Actualiza el estado en el componente de React
    }, 2000); // Cambia el color cada 2 segundos

    return () => clearInterval(intervalId);
};
