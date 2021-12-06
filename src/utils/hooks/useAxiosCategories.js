import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";

export function useAxiosCategories(query = "", page = 1) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "get",
      url: `${API_BASE_URL}/documents/search`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      params: {
        ref: "YZaBvBIAACgAvnOP",
      },
      cancelToken: new axios.CancelToken((c) => {
        // eslint-disable-next-line no-unused-vars
        cancel = c;
      }),
    })
      .then((response) => {
        setCategories(response.results);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
  }, [query, page]);

  return { categories, loading, error };
}
