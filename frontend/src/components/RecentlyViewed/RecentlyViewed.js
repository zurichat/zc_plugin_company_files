import "./RecentlyViewed.css"
import image from "./images/image.svg"
import video from "./images/video.svg";
import document from "./images/document.svg";
import compressed from "./images/compressed.svg";




function RecentlyViewed() {
    return (
        <div className="mainContainer"> 
            <h3 id="headerText">Recently Viewed</h3>
            <div class="container" >
                <div className="con">
                    <img className="icon" src={image} alt="image" />
                    <p className="name">Images </p>
                    <p className="date">Viewed 20 Jul 2020</p>
                </div>
                <div class="con" >
                    <img className="icon" src={video} alt="video" />
                    <p className="name">Videos</p>
                    <p className="date">Viewed 20 Jul 2020</p>
                </div>
                <div class="con">
                    <img className="icon" src={document} alt="document" />
                    <p className="name">Documents</p>
                    <p className="date">Viewed 20 Jul 2020</p>
                </div>
                <div class="con">
                    <img className="icon" src={compressed} alt="compressed" />
                    <p className="name">Compressed</p>
                    <p className="date">Viewed 20 Jul 2020</p>
                </div>
            </div>

        </div>
    )
}

export default RecentlyViewed
