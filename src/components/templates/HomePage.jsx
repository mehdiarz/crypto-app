import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin.jsx";
import { getCoinList } from "../../services/CryptoApi.js";
import Pagination from "../modules/Pagination.jsx";
import Search from "../modules/Search.jsx";
import Chart from "../modules/Chart.jsx";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getCoinList(page, currency);

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
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <TableCoin coins={coins} isLoading={loading} currency={currency} setChart={setChart} />
      )}
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
};

export default HomePage;
