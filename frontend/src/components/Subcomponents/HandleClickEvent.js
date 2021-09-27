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
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("contextMenu", handleClickOutside, true);
    }
  });

  if (!props.show) return null;

  return (
    <div ref={ref}>
      {props.children}
    </div>
  );
}
