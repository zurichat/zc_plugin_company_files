import React, {useState} from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import "./AddNewTextDoc.css"


function AddNewTextDoc() {

    const [data, setData] = useState ('');
    const handleChange = (e, editor) => {
        setData(editor.getData());
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
        return (
            <div className="page flex w-screen px-2 py-1">
       
        <div className="addNewPage">
            <nav>
                <div>
                    <h1 className="-mt-4">New Text Document</h1>
                </div> 
                <div className="actions">
                    <button type="submit" className="cta">Discard</button>
                    <button type="submit" className="cta">Save</button>
                </div>
            </nav>
            
                
            <div className="editItems flex"> 
                <Menu as="div" className="relative inline-blocktext-left">
                    <div>
                        <Menu.Button className="inline-flex w-13 rounded-md ml-5 px-5 py-1 tracking-widest  hover:bg-green-100">
                            File
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                     >
                        <Menu.Items className="origin-top-right absolute left-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'no-underline bg-gray-100 text-gray-900 hover: bg-green-100' : 'no-underline text-gray-700 ',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            New
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'no-underline bg-gray-100 text-gray-900 hover: bg-green-100' : 'no-underline text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Open
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'no-underline bg-gray-100 text-gray-900 hover: bg-green-100' : 'no-underline text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Save
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'no-underline bg-gray-100 text-gray-900 hover: bg-green-100' : 'no-underline text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Save as
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            <button className="cta  hover:bg-green-100" >Edit</button>
            <button className="cta  hover:bg-green-100" >Format</button> 
            </div>
                
                
        </div>
        <div className='text'><textarea> {/*<CKEditor editor={ClassicEditor}
        onChange={(e,editor)=>{handleChange(e,editor)}}/>*/}</textarea></div>
        <div className="flex justify-between px-3">
            <p className="px-4">Page 1 of 1 &nbsp; &nbsp; &nbsp; &nbsp; 0 words</p>
            <p>+ -----|----- - 100%</p>
        </div>
        
         </div>   
    );
}

export default AddNewTextDoc;