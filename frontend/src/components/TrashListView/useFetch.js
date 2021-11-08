import { useState, useEffect } from "react";

const isEmpty = (obj) => Object.keys(obj).length === 0;

function useFetch(url, del, res, empty) {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Unable to fetch trash files");
        }
        return response.json();
      })
      .then((file) => {
        if (isEmpty(file.data)) {
          setData([]);
          setisLoading(false);
        } else {
          setData(file.data);
          setError(null);
          setisLoading(false);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          setError("error");
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
