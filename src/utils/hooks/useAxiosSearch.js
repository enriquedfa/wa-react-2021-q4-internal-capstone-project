import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useAxiosSearch(query = "", page = 1) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchResults, setSearchResults] = useState([]);
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
        q: `[[at(document.type, "product")][fulltext(document, "${query}")]]`,
        lang: "en-us",
        pageSize: 20,
      },
      cancelToken: new axios.CancelToken((c) => {
        // eslint-disable-next-line no-unused-vars
        cancel = c;
      }),
    })
      .then((response) => {
        setSearchResults(response.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
  }, [query, page, apiRef, isApiMetadataLoading]);

  return { searchResults, loading, error };
}
