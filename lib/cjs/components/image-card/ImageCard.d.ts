/// <reference types="react" />
import { FileContent } from "../../models/FileContent";
interface ImageCardProps {
    index: number;
    file: FileContent;
    onRemove: (fileName: string) => void;
}
declare const ImageCard: React.FC<ImageCardProps>;
export default ImageCard;
