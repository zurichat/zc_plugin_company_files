import GaugeSpeed from "./GaugeSpeed";
import Collaborators from "./Collaborators";
import optionsbox from "./ellipsis";
import ActivitiesComponents from "./ActivitiesComponent";
import React, { useEffect } from "react";

function Activities() {

  useEffect(() => {
    const activity = document.querySelectorAll("#activity");
    activity.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.add("clicked-mode");
      });
      item.lastElementChild.addEventListener("click", () => {
        item.innerHTML += <div dangerouslySetInnerHTML={{__html: optionsbox}} />;
      });
    })
  }, []);

  return (
    <div className="bg-bg-white ml-5 flex-auto">
      <div className="flex divide-x2 divide-gray-50">
        <div className=" w-3/4">
          <ActivitiesComponents />
        </div>
        <div className="w-1/4 h-full">
          <div className="h-2/5">
            <GaugeSpeed />
          </div>
          <hr className='text-border' />
          <Collaborators />
        </div>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </div>
  );
}

export default Activities;
