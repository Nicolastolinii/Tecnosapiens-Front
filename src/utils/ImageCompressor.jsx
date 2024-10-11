
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
        },
        error(err) {
            console.error("Compression error:", err.message);
        },
    });
};

export default ImageCompressor;
