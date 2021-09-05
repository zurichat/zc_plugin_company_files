import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEye,
	faArrowsAlt,
	faLink,
	faDownload,
	faShare,
	faCopy,
	faCut,
	faFolder,
	faStar,
	faEdit,
	faInfoCircle,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";

function FileOptionsModal(props) {
	// const [showFileOptions, setshowFileOptions] = useState(false);

	if (!props.status) {
		return null;
	} else {
		return (
			<div className=" absolute w-60 left-1/2 top-20 bg-white shadow-lg font-semibold opacity-1 z-10">
				<ul className="list-none">
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faEye} className=" mr-2" />
						<span>Open</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faArrowsAlt} className=" mr-2" />
						<span>Open with...</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faLink} className=" mr-2" />
						<span>Get Link</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faDownload} className=" mr-2" />
						<span>Download</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faShare} className=" mr-2" />
						<span>Share</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faCopy} className=" mr-2" />
						<span>Copy</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faCut} className=" mr-2" />
						<span>Cut</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faFolder} className=" mr-2" />
						<span>Move to...</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faStar} className=" mr-2" />
						<span>Add to Starred</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faEdit} className=" mr-2" />
						<span>Edit</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faCopy} className=" mr-2" />
						<span>Rename</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faInfoCircle} className=" mr-2" />
						<span>Properties</span>
					</li>
					<li className="w-full block px-5 my-2 hover:bg-green-100">
						<FontAwesomeIcon icon={faTrash} className=" mr-2" />
						<span>Delete</span>
					</li>
				</ul>
			</div>
		);
	}
}

export default FileOptionsModal;
