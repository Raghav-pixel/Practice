import React from 'react'
import './Folder.css'

const Folder = ({ name, children, path, isOpen, folderToggle }) => {
  return (
    <div className='folder-ctr'>
        <div 
          style={{ cursor: 'pointer', paddingLeft: '10px' }}
          onClick={() => folderToggle(path)}
        >
          {isOpen ? '📂' : '📁'} {name}
        </div>
        {isOpen && (
        <div style={{ paddingLeft: "20px" }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Folder