import { useState, useEffect } from "react";

const useFetch = (url) => {
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
          setData(data);
          setisLoading(false);
          setError(null);
       
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted")
        } else {
          setisLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, setData, error };
}

export default useFetch;
