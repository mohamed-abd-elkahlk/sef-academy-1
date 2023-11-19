import { React, useState, UseRef } from 'react'
import { LiaCloudUploadAltSolid } from "react-icons/lia"
import '../App.css';

const DragDropFiles = () =>
{
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) =>
  {
    event.preventDefault();
  };

  const handleDrop = (event) =>
  {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };

  // send files to the server // learn from my other video
  const handleUpload = () =>
  {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
  }
 if (files) return (
    <div className="uploads">
      <ul>
        {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
      </ul>
      <div className="actions">
        <button onClick={() => setFiles(null)}>Cancel</button>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  )

  return (
    <>
        <div className='uploader'>
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
            <h1 className='upldIcon'> <LiaCloudUploadAltSolid /></h1>
            
          
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
            />
            <p className='drag'> Drag & Drop Files or  
              <a href='#' onClick={() => inputRef.current.click()} className='browse'> Browse</a></p>
              <p className='pUpload'>Suppoerted formmates: JPEG,PNG,GIF,MP4,PDF,PSD,AI,Word,PPT</p>
          </div>
        </div>
      </>
      
  )
}

export default DragDropFiles