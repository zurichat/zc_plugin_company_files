import React from 'react'
import doc from './doc-icon.png'
import fuser from './fuser.png'

function SharedFiles() {
    const details = [
        { id: 1, design: "Design 101",  fname: "BJTone",   fdate: "12/04/20",  fsize: "180kb" },
        { id: 2, design: "Design 102",  fname: "John Doe", fdate: "12/04/20",  fsize: "26mb"  },
        { id: 3, design: "Design 103",  fname: "Nifemi Tade", fdate: "12/04/20",  fsize: "15mb" },
        { id: 4, design: "Design 104",  fname: "Ada Kayode",  fdate: "12/04/20", fsize: "10mb"  },
        { id: 5, design: "Design 105",  fname: "Shade Charles",  fdate: "12/04/20",fsize: "32mb"},
        { id: 6, design: "Design 106",  fname: "james Blunt",  fdate: "12/04/20",  fsize: "20mb" },
    ];

     return (
        <div>

                     
            {/* Table start */}

            <div Classname="font-lato">
          

          <div className=" mx-auto px-4 sm:px-8 w-screen bg-white ">
              <div className="py-8">
                          
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                      <div className="inline-block min-w-full overflow-hidden">
                          <table className="min-w-full leading-normal">
                              <thead className="bg-white">
                                  <tr>
                                      <th
                                          className="px-5 py-3 text-left text[15px] font-semibold text-black tracking-wider">
                                          Name
                                      </th>
                                      <th
                                          className="px-5 py-3  text-left text[15px] font-semibold text-black tracking-wider">
                                          Shared by
                                      </th>
                                      <th
                                          className="px-5 py-3  text-left text[15px] font-semibold text-black tracking-wider">
                                          Share Date
                                      </th>
                                      <th
                                          className="px-5 py-3  text-left text[15px] font-semibold text-black tracking-wider">
                                          File size
                                      </th>
                                  </tr>
                                    </thead>
                                    
                          {/* Mapping the Arrays  */}
                                    
                              {details.map(detail => (
                                  <tbody key={detail.id}>
                                      
                     <tr className="bg-gray-800 hover:cursor-pointer" >
                                <td className="px-5 py-5 bg-white text-sm">
                                    <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10 p-2 bg-blue-100 rounded-md">
                                            <img className="w-full h-full rounded-full"
                                                src={doc}
                                                alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap text-sm">
                                                {detail.design}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5  bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-md">
                                            <img className="w-full h-full rounded-full"
                                                src={fuser}
                                                alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-500 whitespace-no-wrap text-xs">
                                            {detail.fname}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5  bg-white text-sm">
                                    <p className="text-gray-500 whitespace-no-wrap text-xs">
                                    {detail.fdate}
                                    </p>
                                </td>
                                <td className="px-5 py-5  bg-white text-sm">
                                <p className="text-gray-500 whitespace-no-wrap text-xs">
                                {detail.fsize}
                                    </p>
                                       
                                </td>
                            </tr>
                           

               </tbody>
           ))}

                          </table>
                       
                      </div>
                  </div>
              </div>
          </div>
      
      
                  </div>

            {/* Table End */}


           
            </div>
    )
}

export default SharedFiles
