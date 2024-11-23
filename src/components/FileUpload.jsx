import React from 'react'
import { useState } from 'react'
import { fetchData } from '../reduxstore/slices/dataSlice';
import { useDispatch } from 'react-redux';
import './FileUpload.css';

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch();
  
    const handleFileChange = async(event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedFile(file);
        const formData = new FormData();
        formData.append('file',file);
        const data =  await dispatch(fetchData(formData));
      }
    };
  
    
    
    return (
      <>
          <input
            type="file"
            id="file-upload"
            accept=".jpg,.png,.jpeg,.pdf,.xlsx"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <p>
              <strong>Selected File:</strong> {selectedFile.name}
            </p>
          )}
  
  
      </>
    )
}
