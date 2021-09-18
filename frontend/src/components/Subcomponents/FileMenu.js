import React from 'react'
import FileMenuButton from './FileMenuButton'

function FileMenu() {
    return (
        <div className="bg-white py-3 w-60 hidden">
            <FileMenuButton name="preview" imgLink="/Icons/eye/active.svg" altText="preview" />
            <FileMenuButton name="open with" imgLink="/Icons/move/active.svg" altText="open with" />
        </div>
    )
}

export default FileMenu
