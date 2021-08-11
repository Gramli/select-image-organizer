import { FileContent } from "../../models/FileContent"
import FileUploadButtonStyle from "../ui/FileUploadButtonStyle"
import ImageCardStyle from "../ui/ImageCardStyle"

interface ImageCardProps{
    index: number;
    file: FileContent;
    onRemove: (fileName: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = (props)=> {
    return (<ImageCardStyle key={props.index}>
        <img alt={props.file.name} src={props.file.content} width={50} height={50}></img>
        <p>{props.file.name}</p>
        <FileUploadButtonStyle onClick={()=>{props.onRemove(props.file.name)}} type="button" primary={false}>Remove</FileUploadButtonStyle>
    </ImageCardStyle>)
}

export default ImageCard;