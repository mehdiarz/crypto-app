import chartup from "../../assests/chart-up.svg";
import chartdown from "../../assests/chart-down.svg";


const TableRow = ({
  coin: {
    image,
    name,
    price_change_percentage_24h: price_change,
    total_volume,
    current_price,
    symbol,
  },
}) => {
  return (
    <>
      <tr>
        <td>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </td>
        <td>{name}</td>
        <td>${current_price.toLocaleString()}</td>
        <td>{price_change.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
          <img src={price_change > 0 ? chartup : chartdown} alt={name} />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
