import { useEffect } from "react";
import { useState } from "react";
import { FileContent } from "../../models/FileContent";
import { openFileDialog } from "../extensions/OpenFileDialog";
import Container from "../ui/Container";
import FileUploadButton from "../ui/FileUploadButton";
import ImageCard from "../ui/ImageCard";

interface FileInputFormProps {
    onSubmit: () => void;
}

const FileInputForm: React.FC<FileInputFormProps> = (props) => {

    const [selectedImageFiles, setSelectedImageFiles] = useState<File[]>([]);
    const [loadedFiles, setLoadedFiles] = useState<FileContent[]>([]);

    const readFile = async (file: File) => {
        const buffer = await file.arrayBuffer();
        return URL.createObjectURL(new Blob([buffer]));
    }

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
        props.onSubmit();
    }

    let content: JSX.Element[] = [];

    content = loadedFiles.map((file, index) => {
        return (<ImageCard key={index}>
            <img alt={file.name} src={file.content} width={50} height={50}></img>
            <p>{file.name}</p>
            <FileUploadButton primary={false}>Remove</FileUploadButton>
        </ImageCard>);
    });

    return (<form>
        <FileUploadButton onClick={openFileDialogtHandler} type="button" width="50%">Select Images</FileUploadButton>
        <FileUploadButton type="submit" onClick={onSubmitHandler} width="50%">OK</FileUploadButton>
        <Container>{content}</Container>
    </form>);
}

export default FileInputForm;