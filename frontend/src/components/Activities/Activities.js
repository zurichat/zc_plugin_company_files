import React from "react";
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'

import read from './Images/read-mark.png'
import Pin from './Images/icons8-pin-24.png';
import pic1 from './Images/Rectangle 8(1).png'
import pic2 from './Images/Rectangle 8.png'
import memory from './Images/Group11712.png'
import collabNum from './Images/icons8-circled-5-50.png'
// import navPic from './Images/Ellipse133.png'


const Activities = () => {

   function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
   return (
      <div className="mt-12 xl:px-2 w-full h-full">
         {/*<div className="flex relative w-128 p-12 m-6 items-center">
            <div className="flex items-center absolute top-0 right-0">
               <div className="br-white flex items-center  h-12 w-96 border-2 shadow-xl">
                  <div>
                     <button className="bg-transparent hover:bg-green-200 py-2 px-4 border-0 rounded">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                     </svg>
                     </button>
                  </div>
                  <input className="rounded-1-full w-full py-4 px-6 h-10 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search for your files"/>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 p-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               <img src= {navPic} alt="user picture" />
            </div>
            
         </div>*/}
      <div className=" md:flex">
         
         <div className="border-r-2 xl:ml-16">
            <div className="flex justify-between pl-3 pr-6 mb-8 xl:-ml-8">
               <div className="flex">
                  <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></Link>
                  <h1>All Activities</h1>
               </div>
               <div className="flex">
                  <img src= {Pin} alt="pin" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
               </div>
            </div>
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div>  
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6 text-opacity-0">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32 text-opacity-0"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6text-opacity-0">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32 text-opacity-0"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6 text-opacity-0">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32 text-opacity-0"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6 text-opacity-0">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32 text-opacity-0"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            <div className="mr-12 mb-2">
               <div className="flex justify-between">
                  <div className="flex items-center">
                     <img src= {pic1} alt="user picture" />
                     <p className="ml-4 mr-28 pr-6 text-opacity-0">Damilola Emmanuel deleted <strong>design file.png</strong> from <strong>Company files</strong></p>
                  </div>
                  <div className="flex items-center xl:w-96 justify-end">
                  <p className="w-32 text-opacity-0"><i>10 hours ago</i></p>
                     <Menu as="div" className="relative inline-block">
                     <div>
                        <Menu.Button className=" justify-center px-4 py-2 bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                     <Menu.Items className="origin-top-right absolute right-8 top-8 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                           <Menu.Item>        
                           {({ active }) => ( 
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'items-center flex text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                 <img src= {Pin} alt="pin" />
                              <a                        
                                 href="#"
                                 >
                                 <span className="ml-2">Pin</span>
                              </a>
                              </div>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <img src= {read} alt="mark" />
                                    <a
                                 href="#"                           
                              >                           
                                 <span className="ml-4">Mark as read</span>
                              </a>
                              </div>                        
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                              <div  className={classNames(
                                 active ? 'flex items-center bg-green-200 text-gray-900' : 'flex items-center text-gray-700',
                                 'block px-5 py-2 text-sm'
                                 )}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                 <a
                                 href="#"                          
                              >                           
                                 <span className="ml-4">Delete</span>
                              </a>
                              </div>                       
                           )}
                           </Menu.Item>
                        </div>
                     </Menu.Items>
                     </Transition>
                  </Menu>

                  </div>  
               </div>
            </div> 
            
         </div>
         <vr/>
         
         <div className="p-8 xl:-mt-8 ">
            <img src= {memory} alt="memory" />
            <hr className="-mt-10"/>
            <div>
               <div className="flex justify-between mb-6 mt-6 items-center">
                  <h1 className="text-2xl"><strong>Collaborators</strong></h1>
                  <img src= {collabNum}  alt="number of collaborators" width={30} height={30}  />
               </div>
            </div>
            <div className="flex mb-4">
               <img src= {pic2} alt="collaborator picture" width={60} height={4} />
               <div className="ml-4">
                  <p className="text-sm "><strong>Damilola Emmanuel</strong></p>
                  <p>damilolaemma02@hotmail.com</p>
               </div>
            </div>
            <div className="flex mb-4">
               <img src= {pic2} alt="collaborator picture" width={50} height={5} />
               <div className="ml-4">
                  <p className="text-sm "><strong>Damilola Emmanuel</strong></p>
                  <p>damilolaemma02@hotmail.com</p>
               </div>
            </div>
            <div className="flex mb-4">
               <img src= {pic2} alt="collaborator picture" width={50} height={0} />
               <div className="ml-4">
                  <p className="text-sm "><strong>Damilola Emmanuel</strong></p>
                  <p>damilolaemma02@hotmail.com</p>
               </div>
            </div>
            <div className="flex mb-4">
               <img src= {pic2} alt="collaborator picture" width={50} height={0} />
               <div className="ml-4">
                  <p className="text-sm "><strong>Damilola Emmanuel</strong></p>
                  <p>damilolaemma02@hotmail.com</p>
               </div>
            </div>
            <div className="flex mb-4">
               <img src= {pic2} alt="collaborator picture" width={50} height={0} />
               <div className="ml-4">
                  <p className="text-sm "><strong>Damilola Emmanuel</strong></p>
                  <p>damilolaemma02@hotmail.com</p>
               </div>
            </div>
           
         </div>
        
      </div>
      </div>
   );
};

export default Activities;
