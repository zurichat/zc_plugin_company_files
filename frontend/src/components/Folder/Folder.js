import FolderCard from './FolderCard/FolderCard';
import classes from './Folder.module.css';

const Folder = () => {
  return (
    <div className={classes.folder__wrapper}>
      <FolderCard />
      <FolderCard />
      <FolderCard />
      <FolderCard />
    </div>
  );
};

export default Folder;
