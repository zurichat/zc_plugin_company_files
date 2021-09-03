import React, { useEffect, useState } from 'react';
import './filesListView.css';
import docsFileIcon from './assets/img/docsFile.svg'

const FilesListView = () => {
	/*
		* These are the logics, depending on the type of file, we would render the
		* fileIcon
		* altText
		* fileType
	*/
		let defaultFileIcon = "docs",
				defaultAltText = "Unknown file icon",
				defaultFileType = "docs";
		const [fileIcon, setFileIcon] = useState(`${defaultFileIcon}`),
					[altText, setAltText] = useState(`${defaultAltText}`),
					[fileType, setFileType] = useState(`${defaultFileType}`);

	/*
	*
	* Files Logics Starts
	*
	*/

	useEffect(() => {
		switch(fileType) {
			case "docs":
				setFileIcon(docsFileIcon);
				break;
			case "pdf":
				// setFileIcon(pdfFileIcon);
				break;
			default:
				setFileIcon(docsFileIcon);
		}
	}, []) // call this once


		return (
			<div className="files-container--file bg-white px-5 py-0 my-0">
				<div className="files-container--file-name">
					<img className="icon-type" src={fileIcon} alt={altText} />
					<span className="file-name">Design Files</span>
				</div>

				<div className="files-container--file-owner">
					<span className="file-name">Me</span>
				</div>

				<div className="files-container--file-date">
					<span className="file-name">29 Jun 2019</span>
				</div>
			</div>
		);
}

export default FilesListView;