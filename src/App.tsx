import React from 'react';
import SelectImageOrganizer from './components/select-image-organizer/SelectImageOrganizer';

function App() {

  const overlayElement =  document.getElementById("overlays") as HTMLElement;
  return (<SelectImageOrganizer overlayElement={overlayElement} onCancel={()=> {}} onSubmit={()=>{}}/>);
}

export default App;
