import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useCartProducts(products = []) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [cartProducts, setCartProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getCartProducts() {
      try {
        setCartProducts({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bany(document.id%2C%20${encodeURIComponent(
            JSON.stringify(products)
          )})%5D%5D&pageSize=120`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setCartProducts({ data, isLoading: false });
      } catch (err) {
        setCartProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getCartProducts();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRef, isApiMetadataLoading]);

  return cartProducts;
}
