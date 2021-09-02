import Collaborators from "./Collaborators";

function Activities() {
    return (
        <div className="bg-bg-white ml-5 flex-auto px-7 py-5">
            <div className="flex ">
                <div className=" w-2/3">
                    activities
                </div>
                <div className="w-1/3 h-full">
                    <div className="h-2/5">
                        usage meter
                    </div>
                    <hr className='text-border' />
                    <Collaborators />
                </div>
            </div>

        </div>
    )
}

export default Activities
