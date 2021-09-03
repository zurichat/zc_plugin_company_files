import FolderCard from "./FolderCard/FolderCard";
import classes from './Folder.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFile, faFolder } from '@fortawesome/free-solid-svg-icons'



const  Folder = ()=> {
    return (
        <div className={classes.folder__wrapper}>
            <FolderCard/>
            <FolderCard/>
            <FolderCard/>
            <FolderCard/>
        </div>
    )
}

export default Folder
