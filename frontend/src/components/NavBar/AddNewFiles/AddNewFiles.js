import "./addNewFiles.css";
import NewFileModal from '../../Files/NewFileModal'
import { useState } from "react";



function AddNewFiles() {
    const [fileModal, setFileModal] = useState(false)

    const showNewFileModal = (e) => {
		setFileModal(!fileModal);
		e.stopPropagation();
		document.addEventListener("click", hideNewFileModal);
	};
	const hideNewFileModal = () => {
		setFileModal(false);
		document.removeEventListener("click", hideNewFileModal);
	}



    return (
        <section className="nav-bar__files">
            <h1 className="nav__heading">
                Files
            </h1>
            <a href="#" className="nav__button relative" onClick={showNewFileModal}>
                add new 
            </a>
            <NewFileModal status={fileModal} />
        </section>
    )
}

export default AddNewFiles;
