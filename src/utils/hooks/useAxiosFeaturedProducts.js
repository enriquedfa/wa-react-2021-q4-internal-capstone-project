import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useAxiosFeaturedProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setFeaturedProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    setLoading(true);
    setError(false);
    // eslint-disable-next-line no-unused-vars
    let cancel;

    axios({
      method: "GET",
      url: `${API_BASE_URL}/documents/search`,
      params: {
        ref: apiRef,
        q: `[[at(document.type, "product")][at(document.tags, ["Featured"])]]`,
        lang: "en-us",
        pageSize: 16,
      },
      cancelToken: new axios.CancelToken((c) => {
        cancel = c;
      }),
    })
      .then((response) => {
        setFeaturedProducts(response.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRef, isApiMetadataLoading]);

  return { featuredProducts, loading, error };
}
