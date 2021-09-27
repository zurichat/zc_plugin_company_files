import { useEffect, useRef } from "react";

export function InfoBox(props) {
  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      props.onClickOutside && props.onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  if (!props.show) return null;

  return (
    <div ref={ref} className="info-box">
      {props.message}
    </div>
  );
}
