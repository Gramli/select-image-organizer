import { useState } from 'react';
import {SelectImageOrganizer} from 'select-image-organizer'

const App = ()=> {
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const overlayElement =  document.getElementById("overlays") as HTMLElement;
  return <>
    <button type="button" onClick={()=> setImageModalVisible(true)}>Show Modal</button>
    {imageModalVisible && <SelectImageOrganizer overlayElement={overlayElement} onCancel={()=> setImageModalVisible(false)} onSubmit={()=>{}}/>}
  </>
}

export default App;
