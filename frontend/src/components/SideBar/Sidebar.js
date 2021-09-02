import {useState} from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronRight, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import ChannelList from './ChannelList';
import LoungeList from './LoungeList';
import DmessageList from './DmessageList';
function Sidebar() {
    const [showFiles, setshowFiles] = useState(false);
    const [showChannels, setshowChannels] = useState(false);
    const [showDMs, setshowDMs] = useState(false);
    const [lounge, setlounge] = useState(false)
    const handleShowFiles = () => {
        setshowFiles(!showFiles);
    }

    const handleShowChannels = () => {
        setshowChannels(!showChannels);
    }

    const handleShowDMs = () => {
        setshowDMs(!showDMs);
    }

    const handleLounge =() => {
        setlounge(!lounge);
    }

    return (
        <div className="bg-white w-72 p-5 main">
            <div className= "flex items-center flex-wrap">
                <img className="h-6 w-6 object-cover" src="/zurichat-logo.svg"/>
                <h1 className="m-1 text-lg uppercase tracking-wider font-semibold lato">Zuri</h1>
            </div>
            <div>
                <ul>
                    <li className="text-base font-normal flex items-center"> <img src="/Icons/Insight.png" alt="icon" /> Insight</li>
                    <li className="text-base font-normal flex items-center"><img src="/Icons/Group1.png" alt="icon" />Threads</li>
                    <li className="text-base font-normal flex items-center"><img src="/Icons/message.png" alt="icon" /> All DMs</li>
                    <li className="text-base font-normal flex items-center"><img src="/Icons/Group.png" alt="icon" />Draft</li>
                    <li className="text-base font-normal flex items-center justify-between" onClick={handleShowFiles}> <div className="flex"><img src="/Icons/Insight.png" alt="icon" /> Files</div> <FontAwesomeIcon className= "icon" icon={showFiles ? faChevronDown : faChevronRight} /></li>
                    {
                        showFiles &&
                        <ul>
                            <li className="text-base mx-5 font-normal flex items-center"><img src="/Icons/Vector.png" alt="icon" />All Files</li>
                            <li className="text-base mx-5 font-normal flex items-center"><img src="/Icons/default.png" alt="icon" />Shared</li>
                            <li className="text-base mx-5 font-normal flex items-center"><img src="/Icons/Star.png" alt="icon" />Favourites</li>
                            <li className="text-base mx-5 font-normal flex items-center"><img src="/Icons/Bin.png" alt="icon" />Trash</li>
                            <li className="text-base mx-5 font-normal flex items-center"><img src="/Icons/Question.png" alt="icon" />Help</li>
                        </ul>
                    }
                    <li className="text-base font-normal flex items-center"> <img src="/Icons/Integrate.png" alt="icon" />Integrate</li>
                    <li className="text-base font-normal" onClick={handleLounge}><FontAwesomeIcon className= "icon" icon={lounge ? faChevronDown : faChevronRight} /> Lounge</li>
                    {
                        lounge &&
                        <ul>
                            <LoungeList />
                          
                        </ul>
                    }
                    <li className="text-base flex justify-between" onClick ={handleShowChannels}> <div className="flex"><FontAwesomeIcon className= "icon" icon={showChannels ? faChevronDown : faChevronRight} />  <p className="mx-1">Channels</p></div> <button><FontAwesomeIcon className="icon" icon={faPlusCircle} /></button></li>
                    {
                        showChannels &&
                        <ul>
                            <ChannelList />
                      
                        </ul>
                    }

                    <li className="text-base flex justify-between items-center" onClick ={handleShowDMs}> <div className="flex"><FontAwesomeIcon className="icon" icon={showDMs ? faChevronDown : faChevronRight} /> <p className="mx-1">Direct Messages</p></div> <button><FontAwesomeIcon className="icon" icon={faPlusCircle} /></button></li>
                    {
                        showDMs &&
                        <ul>
                           <DmessageList />
                            
                        </ul>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
