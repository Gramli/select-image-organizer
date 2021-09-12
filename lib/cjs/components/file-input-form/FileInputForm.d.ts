/// <reference types="react" />
import { FileContent } from "../../models/FileContent";
interface FileInputFormProps {
    onSubmit: (selectedFiles: FileContent[]) => void;
}
declare const FileInputForm: React.FC<FileInputFormProps>;
export default FileInputForm;
