import FolderCard from './FolderCard/FolderCard'

function Folder() {
  return (
    <div className="flex space-x-14">
      <FolderCard />
      <FolderCard /> <FolderCard />
    </div>
  )
}

export default Folder
