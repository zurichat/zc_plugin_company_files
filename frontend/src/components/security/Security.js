import React, { useEffect, useState } from "react";
import axios from "axios";

function Security() {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get("/security");
        // console.log(response.data);
        setResult(response.data);  
        setLoading(false); 
      } catch (err) {
        setLoading(true);
        // console.log(err.response.data);
        setResult(err.response.data);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="tw-w-full tw-px-4 md:tw-px-10">
      <p className="tw-text-xl tw-my-4 tw-text-center">
        Security - Testing of all API endpoints
      </p>
      <table className="tw-table-fixed tw-w-full">
        <thead className="tw-text-xl tw-text-left">
          <tr>
            <th className="tw-capitalize tw-truncate">URL</th>
            <th className="tw-capitalize tw-truncate">Status</th>
            {/* <th className="tw-capitalize tw-truncate">data</th>
            <th className="tw-capitalize tw-truncate">Message</th> */}
          </tr>
        </thead>
        <tbody className="tw-text-xl tw-font-medium tw-center">
          {loading ? (
            <tr>
              <td>Loading...</td>
              <td>Loading...</td>
              {/* <td>Loading...</td>
              <td>Loading...</td> */}
            </tr>
          ) : (
            <tr>
              {result?.allResponse.map(data => (
                <><td>{data.url}</td><td>{data.status}</td></>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Security;
