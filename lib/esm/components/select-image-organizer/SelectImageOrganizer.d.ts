import React from "react";
import { FileContent } from "../../models/FileContent";
export interface SelectImageOrganizerProps {
    onCancel: () => void;
    onSubmit: (result: FileContent[]) => void;
    overlayElement: HTMLElement;
}
declare const SelectImageOrganizer: React.FC<SelectImageOrganizerProps>;
export default SelectImageOrganizer;
