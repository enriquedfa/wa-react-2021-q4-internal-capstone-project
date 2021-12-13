import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useAxiosCategories(query = "", page = 1) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      url: `${API_BASE_URL}/documents/search`,
      params: {
        ref: "YZaBvBIAACgAvnOP",
        q: '[[at(document.type,"category")]]',
        lang: "en-us",
        pageSize: 10,
      },
      cancelToken: new axios.CancelToken((c) => {
        // eslint-disable-next-line no-unused-vars
        cancel = c;
      }),
    })
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
  }, [query, page, apiRef, isApiMetadataLoading]);

  return { categories, loading, error };
}
