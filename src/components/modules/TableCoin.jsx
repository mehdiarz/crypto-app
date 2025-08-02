import TableRow from "./TableRow.jsx";

import { FadeLoader } from "react-spinners";

import styles from "./TableCoin.module.css";

const TableCoin = ({ coins, isLoading }) => {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <FadeLoader color="#3874ff" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoin;
