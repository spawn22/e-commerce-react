import { useState, useEffect } from "react";

const useFetchFakeStore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products`
        );
        if (!response.ok) {
          throw new Error("Error fetching data API");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message || "Error json data API");
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      setData(null);
      setError(null);
      setLoading(false);
    };
  }, []);

  return { data, loading, error };
};

export default useFetchFakeStore;
