import React from "react"
import ReactDOM from "react-dom";
import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import { FileContent } from "../../models/FileContent";
import FileInputForm from "../file-input-form/FileInputForm";

interface SelectImageOrganizerProps{
    onCancel: () => void;
    onSubmit: (result: FileContent[]) => void;
    overlayElement: HTMLElement
}

const SelectImageOrganizer: React.FC<SelectImageOrganizerProps> = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onCancel} />, props.overlayElement)}
            {ReactDOM.createPortal(<Modal>
                <FileInputForm onSubmit={props.onSubmit}/>
            </Modal>, props.overlayElement)}
        </>)
}

export default SelectImageOrganizer;