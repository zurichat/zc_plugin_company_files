import React, {useState,} from 'react';
//import { stat } from 'react-native-fetch-blob'
import { Document, Packer, Paragraph, TextRun } from "docx"
//import { saveAs } from "file-saver";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Slider from '@material-ui/core/Slider';
import axios from 'axios'

const AddNewTextDoc = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState ('');
    const handleChange = e => {
        setContent(e.target.value)
    };
 
    const createDocument = () => {
        if (!title || /^\s*$/.test(title)) return;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDoc = new Document({
        sections: [{
            children: [
                new Paragraph({
                    children: [new TextRun(`${content}`)],
                }),
            ],
        }]
    });
    Packer.toBlob(newDoc).then(blob => {
        console.log(blob);
        //saveAs(blob, `${title}.docx`);
        console.log("Document created successfully");
      });

    const resp = await axios.post("http://localhost:5500/api/v1/files/uploadRequest", { fileName: `${title}.docx`, file:{Blob} })
        .then(res => res.json())
        .then(data => this.setState({fileId: data.id}));
 

        
        
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #ACFFE6',
        boxShadow: 24,
        p: 4,
    };

    const modal = (
        <Modal
            open={open}
        
            >
            <Box sx={style}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="outline-none w-full"
                placeholder="Enter Document title..."
                onKeyDown={(e) => e.key === "Enter" && createDocument()}
            />
            <Button
                /*onClick={(e) => setOpen(false)}*/
                ripple="dark"
                >
                    Cancel
                </Button>
                <Button
                onClick={() => setOpen(false)}
                ripple="light"
                >
                    Create
                </Button>
            
            </Box>
        </Modal>        
    );
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    };
    
    return (
        <div className="flex-col w-full px-2">
        
            <div className="absolute top-20 bg-white w-full h-auto">
                <nav className="flex mb-3 w-screen sm:w-11/12 items-center px-4 sm:px-16 justify-between">
                    <div>
                        <h1 className="text-2xl md:text-4xl"><strong>New Text Document</strong></h1>
                    </div> 
                </nav>
            
                
                <div className="flex -ml-3 sm:ml-2 w-3/12 no-underline rounded-md text-base tracking-widest"> 
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
                            <div   className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            onClick={handleOpen}
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
                <button className="inline-flex w-15 rounded-md ml-5 px-3 py-1 tracking-widest  hover:bg-green-100" >Edit</button>
                <button className="inline-flex w-15 rounded-md ml-5 px-3 py-1 tracking-widest  hover:bg-green-100" >Format</button> 
            </div>
        
            {modal}
        </div>
        {/*<textarea className='w-full mt-10 sm:mt-0 h-96 md:h-96 md:box-content lg:box-border box-border p-2'> </textarea>*/}
        <div className=" w-full mt-24">
            <form onSubmit={handleSubmit}>
                <textarea
                    className='w-full h-96 sm:h-96 md:box-content lg:box-border box-border p-2'
                    type='text'
                    value={content}
                    name='text'
                    onChange={handleChange}
                />
                <div className="absolute top-20 right-0 mt-4 sm:mr-5">
                    <button type="cancel" className="text-green-200 bg-white border-2 border-green-200 rounded mr-3 no-underline px-3 py-3 rounded-md text-base tracking-widest ">Discard</button>
                    <button type="submit" value="Submit" className="text-white bg-green-500 border-2 border-green-200 rounded mr-3 no-underline px-7 py-3 rounded-md text-base tracking-widest hover:bg-green-700">Save</button>
                </div>
            </form>
        </div>
        <div className="flex w-full justify-between py-1 pr-10">
            <div><p className="sm:px-16">Page 1 of 1 &nbsp; &nbsp; &nbsp; &nbsp; 0 words</p></div>
            <div className="w-20">
                <Slider
                defaultValue={100}
                sx={{
                    width: 5,
                    height: 0,
                    color: 'black',
                    '& .MuiSlider-thumb': {
                    borderRadius: '1px',
                    },
                }}
                /> 
            </div>
        </div>
        
    </div>
    );
  };
  
  export default AddNewTextDoc;