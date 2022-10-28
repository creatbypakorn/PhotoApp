import React from 'react';
import Title from './componet/Title';
import UploadForm from './componet/UploadForm';
import ImageGrid from './componet/ImageGrid';
import Modal from './componet/Modal';
import { useState } from 'react';
// import './App.css';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg = {setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg = {selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default App
