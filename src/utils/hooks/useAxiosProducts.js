import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useAxiosProducts(categories, pageSize, page) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState({});
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
        ref: "YZaBvBIAACgAvnOP",
        q: `[[at(document.type, "product")][any(my.product.category, ${JSON.stringify(
          categories
        )})]]`,
        lang: "en-us",
        pageSize: pageSize,
        page: page,
      },
      cancelToken: new axios.CancelToken((c) => {
        cancel = c;
      }),
    })
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRef, isApiMetadataLoading, page, pageSize, categories]);

  return { products, loading, error };
}
