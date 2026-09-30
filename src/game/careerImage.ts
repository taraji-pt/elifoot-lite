const MAX_BYTES = 350 * 1024;
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1000;

function canvasToDataUrl(canvas: HTMLCanvasElement, quality: number): string {
  return canvas.toDataURL("image/jpeg", quality);
}

/** Redimensiona e comprime a imagem para um fundo de carreira leve. */
export async function compressCareerImage(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) throw new Error("Formato inválido");
  if (typeof window === "undefined" || typeof document === "undefined") {
    throw new Error("Processamento de imagem indisponível");
  }

  const url = URL.createObjectURL(file);
  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Imagem inválida"));
      img.src = url;
    });

    const scale = Math.min(1, MAX_WIDTH / image.naturalWidth, MAX_HEIGHT / image.naturalHeight);
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas indisponível");
    ctx.drawImage(image, 0, 0, width, height);

    let quality = 0.78;
    let result = canvasToDataUrl(canvas, quality);
    while (result.length * 0.75 > MAX_BYTES && quality > 0.42) {
      quality -= 0.06;
      result = canvasToDataUrl(canvas, quality);
    }

    if (result.length * 0.75 > MAX_BYTES) {
      const smaller = document.createElement("canvas");
      smaller.width = Math.max(1, Math.round(width * 0.75));
      smaller.height = Math.max(1, Math.round(height * 0.75));
      const smallCtx = smaller.getContext("2d");
      if (!smallCtx) throw new Error("Canvas indisponível");
      smallCtx.drawImage(canvas, 0, 0, smaller.width, smaller.height);
      result = canvasToDataUrl(smaller, 0.58);
    }

    return result;
  } finally {
    URL.revokeObjectURL(url);
  }
}
