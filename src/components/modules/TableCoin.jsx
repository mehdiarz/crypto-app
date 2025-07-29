import TableRow from "./TableRow.jsx";

import { FadeLoader } from "react-spinners";

const TableCoin = ({ coins, isLoading }) => {
  console.log(coins);
  return (
    <div>
      {isLoading ? (
        <FadeLoader color="#3874ff" />
      ) : (
        <table>
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
