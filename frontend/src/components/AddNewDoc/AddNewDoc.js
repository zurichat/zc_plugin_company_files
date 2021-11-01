import React, { useState, Fragment, useRef } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { Range, getTrackBackground } from "react-range";
import axios from "axios";

function AddNewTextDoc() {
  const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef(null);
  const handleOpen = () => setOpen(true);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState ("");
	const handleChange = e => {
		setContent(e.target.value);
  };

  const STEP = 0.1;
  const MIN = 0;
	const MAX = 100;
  const [values, setValues] = React.useState([50]);

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
			}
      ]
		});
		Packer.toBlob(newDoc).then((blob) => {
      console.log(blob);
			// saveAs(blob, `${title}.docx`);
      console.log("Document created successfully");
    });

		const resp = await axios
      .post("https://companyfiles.zuri.chat/api/v1/files/uploadRequest", {
        fileName: `${title}.docx`,
        file: { Blob }
			.then(res => res.json())
			.then(data => this.setState({fileId: data.id}));        
  };

  function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
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
													active ? "no-underline bg-gray-100 text-gray-900 hover: bg-green-100" : "no-underline text-gray-700 ",
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
													active ? "no-underline bg-gray-100 text-gray-900 hover: bg-green-100" : "no-underline text-gray-700",
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
													active ? "no-underline bg-gray-100 text-gray-900 hover: bg-green-100" : "no-underline text-gray-700",
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
													active ? "no-underline bg-gray-100 text-gray-900 hover: bg-green-100" : "no-underline text-gray-700",
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
					<Transition.Root show={open} as={Fragment}>
						<Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
								<Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
									leaveFrom="opacity-100"
                  leaveTo="opacity-0"
								>
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
								</Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
								<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
									enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
										<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="mt-2">
                            <input
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
															type="text"
                              className="outline-none w-full"
                              placeholder="Enter Document title..."
															onKeyDown={(e) => e.key === "Enter" && createDocument()}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
											<button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
												onClick={() => setOpen(false)}
											>
                        Save
                      </button>
											<button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
												onClick={() => setOpen(false)}
												ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
										</div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

					<button className="inline-flex w-15 rounded-md ml-5 px-3 py-1 tracking-widest  hover:bg-green-100" >Edit</button>
					<button className="inline-flex w-15 rounded-md ml-5 px-3 py-1 tracking-widest  hover:bg-green-100" >Format</button> 
				</div>


			</div>
      {/* <textarea className='w-full mt-10 sm:mt-0 h-96 md:h-96 md:box-content lg:box-border box-border p-2'> </textarea> */}
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
        <div
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap"
          }}
        >
          <Range
            values={values}
            step={STEP}
						min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
							<div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
								style={{
                  ...props.style,
									height: "36px",
									display: "flex",
									width: "100%"
                }}
							>
                <div
                  ref={props.ref}
									style={{
										height: "5px",
										width: "10em",
										borderRadius: "4px",
                    background: getTrackBackground({
											values,
											colors: ["black", "#ccc"],
                      min: MIN,
											max: MAX,
                    }),
										alignSelf: "center"
                  }}
								>
                  {children}
								</div>
                <output className="mt-1 ml-2" id="output">
                  {values[0]}%
                </output>
							</div>
            )}
            renderThumb={({ props, isDragged }) => (
							<div
                {...props}
								style={{
                  ...props.style,
									height: "4px",
									width: "4px",
									backgroundColor: "#FFF",
									colors: ["black", "#ccc"],
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									boxShadow: "0px 2px 6px #AAA"
								}}
              >
                <div
									style={{
										height: "16px",
										width: "5px",
										backgroundColor: isDragged ? "#548BF4" : "#CCC"
                  }}
								/>
              </div>
            )}
					/>
        </div>
			</div>

		</div>
	);
};

export default AddNewTextDoc;