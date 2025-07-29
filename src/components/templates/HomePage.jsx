import { useEffect, useState } from "react";

import TableCoin from "../modules/TableCoin.jsx";
import { getCoinList } from "../../services/CryptoApi.js";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(getCoinList())
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  return (
    <div>
      <TableCoin coins={coins} isLoading={loading}/>
    </div>
  );
};

export default HomePage;
