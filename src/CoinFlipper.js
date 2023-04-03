import React from 'react';
import Coin from './Coin';
import { choice } from './helpers'

const CoinFlipper = (props) => {
    const [coin, setCoin] = setCoin(null)
    const [heads, setHeads] = setHeads(0);
    const [tails, setTails] = setTails(0);

    const currentCoin = coin ? (
        <Coin side={coin.side} image={coin.image} />
    ) : null;

    const handleClick = () => {
        const newCoin = choice(props.coins)
        setCoin(newCoin)
        if (newCoin.side === "heads") {
            setHeads(heads => heads + 1);
        } else {
            setTails(tails => tails + 1);
        }
    }

    return (
        <div className="CoinFlipper">
            <h2>Flip a coin</h2>
            {currentCoin}
            <button onClick={handleClick}>Flip</button>
            <p>Heads Count: {heads}</p>
            <p>Tails Count: {tails}</p>
        </div>
    )
}


CoinFlipper.defaultProps = {
    coins: [
        {
            side: "heads",
            image: "https://tinyurl.com/react-coin-heads-jpg"
        },
        {
            side: "tails",
            image: "https://tinyurl.com/react-coing-tails-jpg"
        }
    ]
};

export default CoinFlipper;