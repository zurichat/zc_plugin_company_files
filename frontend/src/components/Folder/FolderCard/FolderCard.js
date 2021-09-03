
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEllipsisV, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons';
import profile from './images/profile-pic.jpg';
import classes from './FolderCard.module.css';

const fileIcon = <FontAwesomeIcon icon={faFolder} size="3x" color='#F6BE00' />
const menu = <FontAwesomeIcon icon={faEllipsisV} size='1x' color='#B4B4B4' />
const plusIcon = <FontAwesomeIcon icon={faPlus} size='sm' color='#B4B4B4' />


const FolderCard = () =>{
    return (
        <div className={classes.folderCard__wrapper}>
            <div className={classes.top}>
                <div className='cursor-pointer'>{fileIcon}</div>
                <div className={classes.menu}>{menu}</div>     
            </div>
            <div className={classes.bottom}>
                <div className={classes.fileType}>
                    <h5>Design Files</h5>
                    <h6>140 files</h6>
                </div>
                <div className={classes.fileAccess}>
                    <img src={profile} alt="Profile" />
                    <img src={profile} alt="Profile" />
                    <div className={classes.add}>{plusIcon}</div>
                </div>
            </div>
        </div>
    )
}

export default FolderCard;
