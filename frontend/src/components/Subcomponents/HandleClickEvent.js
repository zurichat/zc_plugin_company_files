import { useEffect, useRef } from "react";

export function HandleClickEvent(props) {
  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      props.onClickOutside && props.onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("contextmenu", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);
    document.addEventListener("touchmove", handleClickOutside, true);
    document.addEventListener("touchend", handleClickOutside, true);
    document.addEventListener("touchcancel", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("contextmenu", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
      document.removeEventListener("touchmove", handleClickOutside, true);
      document.removeEventListener("touchend", handleClickOutside, true);
      document.removeEventListener("touchcancel", handleClickOutside, true);
    };
  });

  if (!props.show) return null;

  return <div ref={ref}>{props.children}</div>;
}
