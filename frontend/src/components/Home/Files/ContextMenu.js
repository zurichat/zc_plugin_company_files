import useContextMenu from "./useContextMenu";
import { useState } from "react";
import eye from "../../../assets/eye.svg";
import checkSquare from "../../../assets/check-square.svg";
import Download from "../../../assets/Download.svg";
import link from "../../../assets/link.svg";
import properties from "../../../assets/properties.svg";
import scissors from "../../../assets/scissors.svg";
import share from "../../../assets/share.svg";
import Star from "../../../assets/Star.svg";
import trash from "../../../assets/trash.svg";
import RenameModal from "./RenameModal";
// import eye from "../../assets/eye.svg";

const ContextMenu = () => {
  const { anchorPoint, show, setShow } = useContextMenu();
  const [showModal, setShowModal] = useState(false);

  const handleRename = () => {
    console.log("I have been clicked");
    setShowModal(!showModal);
  };

  const cancelModal = () => {
    setShowModal(!showModal);
    setShow(false);
  };

  if (show) {
    return (
      <ul
        className="shadow-lg list-none w-60 bg-white rounded-md py-4 text-xs absolute z-10"
        style={{
          top: anchorPoint.y > 260 ? 260 : anchorPoint.y,
          left: anchorPoint.x > 1080 ? 960 : anchorPoint.x,
        }}
      >
        {console.log("y: ", anchorPoint.y, "x: ", anchorPoint.x)}
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={eye} alt={eye} className="pl-6 text-8 pr-2 text-xs" />
          Open
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={Download} alt={Download} className="pl-6 pr-2 text-xs" />{" "}
          Download
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={link} alt={link} className="pl-6 pr-2" />
          Get link
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={share} alt={share} className="pl-6 pr-2" />
          Share
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={eye} alt={eye} className="pl-6 pr-2" />
          Copy
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={scissors} alt={scissors} className="pl-6 pr-2" />
          Cut
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={checkSquare} alt={checkSquare} className="pl-6 pr-2" />
          Select
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={eye} alt={eye} className="pl-6 pr-2" />
          Move to
        </li>
        <hr />
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={Star} alt={Star} className="pl-6 pr-2" /> Add to starred
        </li>
        <li
          onClick={handleRename}
          className="cursor-pointer hover:bg-green-100 flex py-1"
        >
          <img src={eye} alt={eye} className="pl-6 pr-2" /> Rename
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={properties} alt={properties} className="pl-6 pr-2" />{" "}
          Properties
        </li>
        <li className="cursor-pointer hover:bg-green-100 flex py-1">
          <img src={trash} alt={trash} className="pl-6 pr-2" /> Delete
        </li>
      </ul>
    );
  }
  return <>{showModal && <RenameModal onCancel={cancelModal} />}</>;
};

export default ContextMenu;
