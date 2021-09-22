// const useContextMenu = () => {
//   const [xPosition, setXPosition] = useState("0px");
//   const [yPosition, setYPosition] = useState("0px");
//   const [showMenu, setShowMenu] = useState(false);

//   const handleContextMenu = useCallback(
//     (event) => {
//       event.preventDefault();

//       setXPosition(`${event.pageX}px`);
//       setYPosition(`${event.pageY}px`);
//       setShowMenu(true);
//     },
//     [setXPosition, setYPosition]
//   );

//   const handleClick = useCallback(() => {
//     showMenu && setShowMenu(false);
//   }, [showMenu]);

//   useEffect(() => {
//     document.addEventListener("click", handleClick);
//     document.addEventListener("contextmenu", handleContextMenu);
//     return () => {
//       document.addEventListener("click", handleClick);
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   });

//   return { xPosition, yPosition, showMenu };
// };

// const CustomMenu = () => (
//     <ul className="menu">
//       <li>Login</li>
//       <li>Register</li>
//       <li>Open Profile</li>
//     </ul>
//   );

//   const App = () => (
//     <div className="App">
//       {/* ... */}
//       <ContextMenu menu={() => <CustomMenu>}>
//     </div>
//   )

import { useEffect, useCallback, useState } from "react";

const useContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setShow, setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  return { anchorPoint, show, setShow };
};

export default useContextMenu;
