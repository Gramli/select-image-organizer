import { useEffect, useState } from "react";
import { FileContent } from "../../models/FileContent";
import { openFileDialog } from "../extensions/OpenFileDialog";
import { readFile } from "../extensions/FileReader";
import ImageCard from "../image-card/ImageCard";
import Container from "../ui/Container";
import FileUploadButtonStyle from "../ui/FileUploadButtonStyle";

interface FileInputFormProps {
    onSubmit: (selectedFiles: FileContent[]) => void;
}

const FileInputForm: React.FC<FileInputFormProps> = (props) => {

    const [selectedImageFiles, setSelectedImageFiles] = useState<File[]>([]);
    const [loadedFiles, setLoadedFiles] = useState<FileContent[]>([]);

    const openFileDialogtHandler = () => {
        openFileDialog((ev: Event) => {
            const inputElement = ev.currentTarget as HTMLInputElement;
            const files = inputElement.files as FileList;
            setSelectedImageFiles(Array.from(files));
        });
    }

    useEffect(() => {
        selectedImageFiles?.map(async (item) => {
            const cont = await readFile(item);
            return {
                name: item.name,
                lastModified: item.lastModified,
                content: cont,
            };
        }).forEach((item) => item.then((resultItem) => {
            setLoadedFiles((prev) => [...prev, resultItem]);
        }));
    }, [selectedImageFiles]);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSubmit(loadedFiles);
    }

    const onRemoveHandler = (fileName: string) => {
        setLoadedFiles((prev) => prev.filter((file) => file.name !== fileName)
        )
    };

    let content: JSX.Element[] = [];

    content = loadedFiles.map((file, index) => {
        return (<ImageCard index={index} file={file} onRemove={onRemoveHandler} />);
    });

    return (<form>
        <FileUploadButtonStyle onClick={openFileDialogtHandler} type="button" width="50%">Select Images</FileUploadButtonStyle>
        <FileUploadButtonStyle type="submit" onClick={onSubmitHandler} width="50%">OK</FileUploadButtonStyle>
        <Container>{content}</Container>
    </form>);
}

export default FileInputForm;