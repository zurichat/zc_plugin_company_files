import React, {useState} from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function AddNewTextDoc() {

    const [data, setData] = useState ('');
    const handleChange = (e, editor) => {
        setData(editor.getData());
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
        return (
            <div className="flex flex-col w-screen px-2">
       
        <div className="bg-white h-auto">
            <nav className="flex w-screen px-16 justify-between">
                <div>
                    <h1 className="text-4xl">New Text Document</h1>
                </div> 
                <div>
                    <button type="submit" className="text-blue-500 bg-white border-2 border-blue-500 rounded mr-3 inline-block no-underline px-3 py-3 rounded-md text-base tracking-widest ">Discard</button>
                    <button type="submit" className="text-white bg-blue-500 border-2 border-blue-500 rounded mr-3 inline-block no-underline px-7 py-3 rounded-md text-base tracking-widest">Save</button>
                </div>
            </nav>
            
                
            <div className="flex w-3/12 justify-start inline-block no-underline rounded-md text-base tracking-widest"> 
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex ml-14 w-15 rounded-md ml-5 px-3 py-1 tracking-widest hover:bg-green-100">
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
                                            href="/"
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
                                            href="/"
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
                                            href="/"
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
                                            href="/"
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
            <button className="inline-flex w-15 rounded-md ml-5 px-3 py-1 tracking-widest  hover:bg-green-100" >Edit</button>
            <button className="inline-flex w-15 rounded-md ml-5 px-3 py-1 tracking-widest  hover:bg-green-100" >Format</button> 
            </div>
                
                
        </div>
        <textarea className='mt-4 mr-10 w-11/12 h-96 md:box-content lg:box-border box-border'> {/*<CKEditor editor={ClassicEditor}
        onChange={(e,editor)=>{handleChange(e,editor)}}/>*/}</textarea>
        <div className="flex w-full justify-between px-3">
            <div><p className="px-16">Page 1 of 1 &nbsp; &nbsp; &nbsp; &nbsp; 0 words</p></div>
            <div><p className="mr-20">+ -----|----- - 100%</p></div>
        </div>
        
         </div>   
    );
}

export default AddNewTextDoc;