import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewFileModal(props) {
if(!props.status){
    return null;
}
else{
    return (
        <div className="absolute w-60 left-20 top-16 bg-white shadow-lg font-semibold rounded-md">
            <ul className="list-none">
                <li className="w-full block px-5 my-4 hover:bg-green-100">
                    <FontAwesomeIcon icon={faEye} className=" mr-2" />
                    <span>Folder</span>
                </li>
                <li className="w-full block px-5 my-4 hover:bg-green-100">
                    <FontAwesomeIcon icon={faArrowsAlt} className=" mr-2" />
                    <span>Document</span>
                </li>
                <li className="w-full block px-5 my-4 hover:bg-green-100">
                    <FontAwesomeIcon icon={faLink} className=" mr-2" />
                    <span>File Upload</span>
                </li>
                <li className="w-full block px-5 my-4 hover:bg-green-100">
                    <FontAwesomeIcon icon={faDownload} className=" mr-2" />
                    <span>Folder Upload</span>
                </li>
            </ul>
        </div>
        )
    }
}

export default NewFileModal