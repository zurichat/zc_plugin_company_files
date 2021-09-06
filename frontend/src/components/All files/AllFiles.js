import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	faTh,
	faArrowLeft,
	faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileOptionsModal from "../Files/FileOptionsModal";

function AllFiles() {
	const [grid, setGrid] = useState(false);
	const [fileOptions, setFileOptions] = useState(false);

	const showFileOptionsModal = (e) => {
		setFileOptions(!fileOptions);
		e.stopPropagation();
		document.addEventListener("click", hideFileOptionsModal);
	};
	const hideFileOptionsModal = () => {
		setFileOptions(false);
		document.removeEventListener("click", hideFileOptionsModal);
	};

	const toggleView = () => {
		setGrid(!grid);
	};

	return (
		<div className="w-full px-8 my-10">
			<div className="pageOptions w-full flex justify-between items-center">
				<div className="flex">
					<Link to="/" className="navArrowIcon hover:">
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="hover:text-green-300"
						/>
					</Link>
					<h2 className="ml-4 text-xl">All Files</h2>
				</div>
				<div className="fileView flex">
					<div
						onClick={toggleView}
						className={
							" mx-3 cursor-pointer hover:text-blue-300 " +
							(grid ? "text-blue-700" : "text-gray-500")
						}
					>
						<FontAwesomeIcon icon={faTh} className="text-3xl" />
					</div>
					<button className="bg-blue-700 py-2 px-4 text-white">
						See activities
					</button>
				</div>
			</div>
			<div
				className={
					"fileListHeader " +
					(!grid ? "mt-12 flex justify-between" : "invisible")
				}
			>
				<span className="w-1/4">Name</span>
				<span className="w-1/4 text-right">Owner</span>
				<span className="w-1/4 text-right">Date Modified</span>
				<span className="w-1/4 text-right">File Size</span>
			</div>
			<div
				className={
					"filesContainer mt-12 flex flex-wrap relative " +
					(grid ? "flex-row justify-between" : "flex-col")
				}
			>
				<FileOptionsModal status={fileOptions} />
				<div
					className={
						"fileListWrapper " + (!grid ? "w-full flex justify-between" : "")
					}
				>
					<div className="file flex items-center mr-3 my-5">
						<div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
							<img src="/Icons/docfile.svg" alt="" className="" />
						</div>
						<div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
							<span className="w-full truncate">Document.doc</span>
							<span className="text-gray-400">5 days ago</span>
						</div>
						<div
							className="options self-start mx-3"
							onClick={showFileOptionsModal}
						>
							<FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
						</div>
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Owner
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Date
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Size
					</div>
				</div>
				<div
					className={
						"fileListWrapper " + (!grid ? "w-full flex justify-between" : "")
					}
				>
					<div className="file flex items-center mr-3 my-5">
						<div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
							<img src="/Icons/xlsfile.svg" alt="" className="" />
						</div>
						<div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
							<span className="w-full truncate">Excl.xls</span>
							<span className="text-gray-400">5 days ago</span>
						</div>
						<div
							className="options self-start mx-3"
							onClick={showFileOptionsModal}
						>
							<FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
						</div>
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Owner
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Date
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Size
					</div>
				</div>
				<div
					className={
						"fileListWrapper " + (!grid ? "w-full flex justify-between" : "")
					}
				>
					<div className="file flex items-center mr-3 my-5">
						<div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
							<img src="/Icons/pdffile.svg" alt="" className="" />
						</div>
						<div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
							<span className="w-full truncate">Attachment.pdf</span>
							<span className="text-gray-400">5 days ago</span>
						</div>
						<div
							className="options self-start mx-3"
							onClick={showFileOptionsModal}
						>
							<FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
						</div>
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Owner
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Date
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Size
					</div>
				</div>
				<div
					className={
						"fileListWrapper " + (!grid ? "w-full flex justify-between" : "")
					}
				>
					<div className="file flex items-center mr-3 my-5">
						<div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
							<img src="/Icons/docfile.svg" alt="" className="" />
						</div>
						<div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
							<span className="w-full truncate">Excl.xls</span>
							<span className="text-gray-400">5 days ago</span>
						</div>
						<div
							className="options self-start mx-3"
							onClick={showFileOptionsModal}
						>
							<FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
						</div>
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Owner
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Date
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Size
					</div>
				</div>
				<div
					className={
						"fileListWrapper " + (!grid ? "w-full flex justify-between" : "")
					}
				>
					<div className="file flex items-center mr-3 my-5">
						<div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
							<img src="/Icons/xlsfile.svg" alt="" className="" />
						</div>
						<div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
							<span className="w-full truncate">Excl.xls</span>
							<span className="text-gray-400">5 days ago</span>
						</div>
						<div
							className="options self-start mx-3"
							onClick={showFileOptionsModal}
						>
							<FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
						</div>
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Owner
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Date
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Size
					</div>
				</div>
				<div
					className={
						"fileListWrapper " + (!grid ? "w-full flex justify-between" : "")
					}
				>
					<div className="file flex items-center mr-3 my-5">
						<div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
							<img src="/Icons/docfile.svg" alt="" className="" />
						</div>
						<div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
							<span className="w-full truncate">Excl.xls</span>
							<span className="text-gray-400">5 days ago</span>
						</div>
						<div
							className="options self-start mx-3"
							onClick={showFileOptionsModal}
						>
							<FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
						</div>
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Owner
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Date
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Size
					</div>
				</div>
				<div
					className={
						"fileListWrapper " + (!grid ? "w-full flex justify-between" : "")
					}
				>
					<div className="file flex items-center mr-3 my-5">
						<div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
							<img src="/Icons/pdffile.svg" alt="" className="" />
						</div>
						<div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
							<span className="w-full truncate">Attachment.pdf</span>
							<span className="text-gray-400">5 days ago</span>
						</div>
						<div
							className="options self-start mx-3"
							onClick={showFileOptionsModal}
						>
							<FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
						</div>
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Owner
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Date
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Size
					</div>
				</div>
				<div
					className={
						"fileListWrapper " + (!grid ? "w-full flex justify-between" : "")
					}
				>
					<div className="file flex items-center mr-3 my-5">
						<div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
							<img src="/Icons/pdffile.svg" alt="" className="" />
						</div>
						<div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
							<span className="w-full truncate">Attachment.pdf</span>
							<span className="text-gray-400">5 days ago</span>
						</div>
						<div
							className="options self-start mx-3"
							onClick={showFileOptionsModal}
						>
							<FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
						</div>
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Owner
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Date
					</div>
					<div
						className={
							"details text-right flex-grow " + (grid ? "hidden" : "block")
						}
					>
						Size
					</div>
				</div>
			</div>
		</div>
	);
}

export default AllFiles;
