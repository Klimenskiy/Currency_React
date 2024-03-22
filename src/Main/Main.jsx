import React, { useState, useEffect } from 'react';

const cryptoCurrencies = [
    'BTC',
    'ETH',
    'USDT',
    'BNB',
    'SOL',
    'XRP',
    'ADA',
    'AVAX',
    'DOGE',
    'LTC',
];

const cryptoIcons = {
    BTC: './img/icons/btc.svg',
    ETH: './img/icons/eth.svg',
    USDT: './img/icons/usdt.svg',
    BNB: './img/icons/bnb.svg',
    SOL: './img/icons/sol.svg',
    XRP: './img/icons/xrp.svg',
    ADA: './img/icons/ada.svg',
    AVAX: './img/icons/avax.svg',
    DOGE: './img/icons/doge.svg',
    LTC: './img/icons/ltc.svg',
};

const DEFAULT_CRYPTO_ICON = './default-icon';

const Main = (props) => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const apiKey = 'c1c2e11b16a4cbdec962a4b05fb75d990f2e13cf00a6198e23690c769957';
        const apiUrl = `https://api.cryptorank.io/v1/currencies?api_key=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setCryptoData(data.data);
            });
    }, []);

    return (
        <div className='crypto-block'>
            <div className='crypto-block__wrapper'>
                <div className='crypto-block__title'>
                    <p>Name</p>
                    <p>Chg(24H)</p>
                    <p>Price(USD)</p>
                </div>

                {cryptoCurrencies.length > 0 &&
                    cryptoCurrencies.map((currencyCode, index) => {
                        const currencyData = cryptoData.find((currency) => currency.symbol === currencyCode);
                        return (
                            <div className='crypto-block__item' key={index}>
                                <img
                                    src={
                                        Object.keys(cryptoIcons).includes(currencyCode)
                                            ? cryptoIcons[currencyCode]
                                            : DEFAULT_CRYPTO_ICON
                                    }
                                    alt={currencyCode + ' icon'}
                                />
                                <p>{currencyData ? currencyData.name : currencyCode}</p>

                                <div className='crypto-block__change'></div>
                                <div className='crypto-block__price'></div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Main;
