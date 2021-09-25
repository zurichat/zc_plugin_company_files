import React, { useState } from "react";
import { Menu } from "@headlessui/react";

import down from "../../../../public/Icons/chevronDown.svg";

const Dropdown = () => {
  const access_tags = ["Can edit", "Can view"];
  const [value, setValue] = useState(null);

  return (
    <Menu as="div" className="w-full">
      <div>
        <Menu.Button className="w-full py-2 lg:pt-0 inline-flex items-center ">
          <p className="text-gray-700 text-xs mr-1">{value || "Can edit"}</p>
          <img src={down} alt="icon" className="" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Menu.Items className="absolute w-40 mt-2 divide-y rounded-md bg-white ring-1 ring-black ring-opacity-5 inline-flex flex-col">
        {access_tags.map((i, index) => (
          <Menu.Item key={index} onClick={() => setValue(i)}>
            {({ active }) => (
              <div
                className={`${
                  active && "bg-gray-400 bg-opacity-10"
                }  py-2 text-sm text-gray-400 text-center  flex-shrink-0`}
              >
                {i}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
