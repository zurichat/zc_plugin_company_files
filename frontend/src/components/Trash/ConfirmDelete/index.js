import './css/confirm-delete.css';
const ConfirmDeleteFile = ({ reveal, collapse }) => {
    
    return (
        <div className={ reveal ? "reveal-modal confirm-delete" : "confirm-delete" }>
            <div className="delete-modal">
                <div className="delete-modal-header">Delete File</div>
                <div className="delete-modal-message">Are you sure you want to delete Design Files?</div>
                <div className="delete-modal-action-btns">
                    <button onClick={ () => collapse() } href="#" className="cancel-delete">Cancel</button>
                    <button className="ok-delete">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDeleteFile;