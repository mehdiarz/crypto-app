import chartup from "../../assests/chart-up.svg";
import chartdown from "../../assests/chart-down.svg";

import styles from "./TableRow.module.css";
import { marketChart } from "../../services/CryptoApi.js";

const TableRow = ({
  coin,
  currency,
  setChart,
}) => {
  const {
    id,
    image,
    name,
    price_change_percentage_24h: price_change,
    total_volume,
    current_price,
    symbol,
  } = coin;
  const showHandler = () => {
    const fetchData = async () => {
      try {
        const response = await marketChart(id);

        const data = await response.json();
        setChart({ ...data, coin});
      } catch (err) {
        setChart(null);
          console.error("Error fetching coin data:", err);
      }
    };
    fetchData();
  }

  const getCurrencySymbol = () => {
    if (currency === "usd") {
      return "$";
    } else if (currency === "eur") {
      return "€";
    } else {
      return "¥"; // Yen symbol
    }
  };

  return (
    <>
      <tr>
        <td>
          <div className={styles.symbol} onClick={showHandler}>
            <img src={image} alt={name} />
            <span>{symbol.toUpperCase()}</span>
          </div>
        </td>
        <td>{name}</td>
        <td>
          {getCurrencySymbol()}
          {current_price.toLocaleString()}
        </td>
        <td className={price_change > 0 ? styles.success : styles.error}>
          {price_change.toFixed(2)}%
        </td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
          <img src={price_change > 0 ? chartup : chartdown} alt={name} />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
