
import Compressor from 'compressorjs';

const ImageCompressor = (file, onCompress) => {
    if (!file) {
        return;
    }
    console.log(`Tamaño original: ${(file.size / 1024 / 1024).toFixed(2)} MB`);

    new Compressor(file, {
        quality: 0.6,
        maxWidth: Math.min(1280, file.width),
        maxHeight: Math.min(720, file.height),
        success(result) {
            onCompress(result);
            /* // Crear enlace para descargar la imagen comprimida
            console.log(`Tamaño después de compresión: ${(result.size / 1024 / 1024).toFixed(2)} MB`);
            const downloadLink = document.createElement('a');
            document.body.appendChild(downloadLink);

            // Crear un Blob y setear la URL para la descarga
            const blob = new Blob([result], { type: 'image/jpeg' }); // Asegúrate de ajustar el tipo MIME según el tipo de archivo
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = 'compressed_image.jpeg'; // Puedes cambiar el nombre del archivo según sea necesario
            downloadLink.click();

            // Limpiar la URL para no saturar la memoria
            URL.revokeObjectURL(url);
            document.body.removeChild(downloadLink);*/
        },
        error(err) {
            console.error("Compression error:", err.message);
        },
    });
};

export default ImageCompressor;
