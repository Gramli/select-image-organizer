export const readFile = async (file: File) => {
    const buffer = await file.arrayBuffer();
    return URL.createObjectURL(new Blob([buffer]));
}