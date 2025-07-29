import {useEffect, useState} from "react";

import TableCoin from "../modules/TableCoin.jsx";
import {getCoinList} from "../../services/CryptoApi.js";

const HomePage = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        fetch(getCoinList())
            .then((response) => response.json())
            .then(json => setCoins(json))
    }, []);
    return (
        <div>
            <TableCoin coins = {coins}/>
        </div>
    )
        ;
};

export default HomePage;
