import { useState } from 'react';
import SelectImageOrganizer from './components/select-image-organizer/SelectImageOrganizer';
import FileUploadButtonStyle from './components/ui/FileUploadButtonStyle';

function App() {
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const overlayElement =  document.getElementById("overlays") as HTMLElement;
  return <>
    <FileUploadButtonStyle type="button" onClick={()=> setImageModalVisible(true)}>Show Modal</FileUploadButtonStyle>
    {imageModalVisible && <SelectImageOrganizer overlayElement={overlayElement} onCancel={()=> setImageModalVisible(false)} onSubmit={()=>{}}/>}
  </>
}

export default App;
