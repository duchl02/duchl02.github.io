import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loadedData, setLoadedData] = useState(true);
  const [isloadData, setIsLoadedData] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    try {
      async function fetchData() {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token, // <-- 2nd step
        });
        let data = res && res.data ? res.data : [];

        if (data && data.length > 0 && isloadData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data.reverse();
        }
        setLoadedData(false);
        setData(data);
        // console.log(data);
      }
      fetchData();
    } catch (e) {
      console.log(e.name, e.message);
    }
    return () => {
      ourRequest.cancel(); // <-- 3rd step
    };
  }, [url]);
  return {
    data,
    loadedData,
  };
};
export default useFetch;
