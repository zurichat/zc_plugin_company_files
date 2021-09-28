import React from "react";
import { useState, useEffect } from "react";

// const isEmpty = (obj) => Object.keys(obj).length === 0;

const  useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch Starred files");
        }
        return res.json();
      })
      .then((data) => {
        if (isEmpty(DataView)) {
          setData([]);
          setisLoading(false);
          return;
        } else {
          setData(data);
          setError(null);
          setisLoading(false);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // console.log("Fetch Aborted");
        } else {
          setisLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
//   }, [url, empty]);
  }, [url]);

  return { data, isLoading, error};
}

export default useFetch;
