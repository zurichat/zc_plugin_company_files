import Files from "../Files/Files";
import Folder from "../Folder/Folder";
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";


function AllFiles() {
    return (
        <div>
            <RecentlyViewed/>
            <Folder/>
            <Files/>
        </div>
    )
}

export default AllFiles;
