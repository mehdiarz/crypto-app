import { useEffect, useState } from "react";

import { searchCoin } from "../../services/CryptoApi.js";

import { FadeLoader } from "react-spinners";

import styles from "./Search.module.css";

const Search = ({ currency, setCurrency }) => {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);

    if (!text) {
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const response = await searchCoin(text, controller);

        const data = await response.json();
        if (data.coins) {
          setLoading(false);
          setCoins(data.coins);
        } else {
          alert(data.status.error_message);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching coin data:", err);
        }
      }
    };

    setLoading(true);
    fetchData();

    return () => {
      controller.abort();
    };
  }, [text]);
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!coins.length || loading) && (
        <div className={styles.searchResult}>
          {loading && <FadeLoader color="#3874ff" />}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
