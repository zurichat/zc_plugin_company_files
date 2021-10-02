import React from 'react'
import { useHistory } from "react-router";

function AddToStarred({id}) {

    const [isModal, setIsModal] = useState(false);

    const backHistory = useHistory();
  const handleStarred = () => {
    fetch("https://companyfiles.zuri.chat/api/v1/files/starFile/" + id, {
      method: "PUT",
    }).then((res) => (res.status === 200 ? backHistory.push("/starred") : null));
    };
    
    return isModal ? (
        //    Inside Modal

        <>
            <div className="justify-center items-center flex fixed left-50 top-50 inset-0 z-50 outline-none focus:outline-none text-center">
                <div className="w-3/4 md:w-2/4 xl:w-3/6 lg:1/6 ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start p-5">
                            <h5 className="text-3xl text-black">
                                Starred File
                            </h5>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-2 text-blueGray-500 text-lg leading-relaxed text-[14px]">
                                Are you sure you want to Star the File?
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row md:px-6 items-center justify-end p-6 gap-4 ">
                            <button
                                className="text-green-500 background-transparent px-6 py-3 text-sm rounded-md border-2 border-green-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setIsModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 text-white rounded-md border-2 border-green-500 text-sm px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleStarred()}
                            >
                                Starred
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null;
    
};

export default AddToStarred
