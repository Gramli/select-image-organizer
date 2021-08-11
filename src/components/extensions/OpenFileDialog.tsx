export const openFileDialog = (onOpen:(event: Event) => void) =>{
    var inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.accept = ".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*";
    inputEl.multiple = true;
    inputEl.addEventListener('change', onOpen);
    inputEl.dispatchEvent(new MouseEvent('click'));
};