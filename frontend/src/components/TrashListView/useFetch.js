import { useState, useEffect } from "react";

const isEmpty = (obj) => Object.keys(obj).length === 0;

function useFetch(url, del, res, empty) {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch trash files");
        }
        return res.json();
      })
      .then((data) => {
        if (isEmpty(data.data)) {
          setData([]);
          setisLoading(false);
          return;
        } else {
          setData(data.data);
          setError(null);
          setisLoading(false);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setisLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [del, res, empty]);

  return { data, error, isLoading, setData, setError };
}

export default useFetch;
