import React from 'react'
import './FolderStructure.css';
import Folder from './Folder/Folder';
import File from './File/File';

const FolderStructure = ({ folderData, folderState, folderToggle, parentPath }) => {
  return (
    <div className='folder-structure-ctr'>
        {
            folderData.length>0 && folderData?.map((data, idx) => {
                let currentPath = `${parentPath}/${data.name}`;
                console.log(currentPath, "path")
                if(data.type === 'FOLDER') {
                    return (
                        <Folder 
                            key={data.id} 
                            name={data.name}
                            path={currentPath}
                            isOpen={folderState[currentPath] || false}
                            folderToggle={folderToggle}
                        >
                            <FolderStructure 
                                folderData={data.data} 
                                folderState={folderState}
                                folderToggle={folderToggle} 
                            />
                        </Folder>
                    )
                }
                return (
                    <File key={data.id} name={data.name} />
                )
            })
        }
    </div>
  )
}

export default FolderStructure