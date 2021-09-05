import FolderCard from './FolderCard/FolderCard'
import "./folder.css"
function Folder() {
  return (
    <div className="folder flex space-x-14">
      <FolderCard />
      <FolderCard /> <FolderCard />
    </div>
  )
}

export default Folder
