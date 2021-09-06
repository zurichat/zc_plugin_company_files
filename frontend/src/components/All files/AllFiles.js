import React, { useState } from "react";
import '../FilesCard/gridListView.css'
import {Link} from "react-router-dom"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AllFiles = () => {
    const [isActive, setIsActive] = useState('jsListView')
    return (
        <div className="w-full px-10 bg-white">
            <div className='top flex justify-between'>
            <h2 className="text-2xl md:text-3xl">All Files</h2>
            <div className="view-actions">
                    <button className={`view-btn list-view ${isActive === 'jsGridView' ? 'active' : ''}`} title="List view" onClick={() => setIsActive('jsGridView')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="feather feather-list">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                    </button>
                    <button className={`view-btn grid-view ${isActive === 'jsListView' ? 'active' : ''}`} title="Grid View" onClick={() => setIsActive('jsListView')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="feather feather-grid">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" /></svg>
                    </button>
                </div>
                <Link to="/" className="text-gray-400 hover:text-green-400">
                    <span>Go Back</span>
                </Link>

            </div>
            <div className={`project-boxes ${isActive}`}>
                    <div className="w-full px-10 bg-white">
                

                    <div className='project-box-wrapper'>
                    <div className='project-box w-full py-5 flex flex-wrap justify-between'>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
                                <img src="/Icons/docfile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span className="w-full truncate">Excl.xls</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
                                <img src="/Icons/xlsfile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span className="w-full truncate">Excl.xls</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
                                <img src="/Icons/pdffile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span className="w-full truncate">Integration.pdf</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
                                <img src="/Icons/xlsfile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span>Text.xls</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
                                <img src="/Icons/pdffile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span>Adobe.pdf</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
                                <img src="/Icons/xlsfile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span>Text.xls</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
                                <img src="/Icons/xlsfile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span>Text.xls</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
                                <img src="/Icons/xlsfile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span>Text.xls</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-blue-100 rounded-md">
                                <img src="/Icons/docfile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span className="w-full truncate">Integration.pdf</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                        <div className="file flex items-center mr-3 my-5">
                            <div className="fileIcon w-14 h-14 flex justify-around  bg-green-100 rounded-md">
                                <img src="/Icons/xlsfile.svg" alt="" className="" />
                            </div>
                            <div className="fileInfo w-40 sm:w-30 md:w-30 lg:w-40  flex flex-col mx-3">
                                <span className="w-full truncate">Excl.xls</span>
                                <span className="text-gray-400">5 days ago</span>
                            </div>
                            <div className="options self-start mx-3">
                                <FontAwesomeIcon icon={faEllipsisV} className=" text-gray-300" />
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}

export default AllFiles;
