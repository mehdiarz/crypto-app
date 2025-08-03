import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin.jsx";
import { getCoinList } from "../../services/CryptoApi.js";
import Pagination from "../modules/Pagination.jsx";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getCoinList(page);

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching coin data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>

      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <TableCoin coins={coins} isLoading={loading} />
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;