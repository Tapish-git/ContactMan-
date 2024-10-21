import React from 'react'

const FileInput = ({ onFileChange }) => {
  return (
    <div>
        <input type='file' accept='.csv' onChange={onFileChange} />
    </div>
  );
};

export default FileInput