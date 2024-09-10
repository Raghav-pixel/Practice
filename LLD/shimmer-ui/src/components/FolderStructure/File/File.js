import React from 'react'
import './File.css';

const File = ({ name }) => {
  return (
    <div className='file-ctr'>{'🗄️'} {name}</div>
  )
}

export default File