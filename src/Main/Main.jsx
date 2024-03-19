import React from "react";

const cryptoCurrencies = ["BTC", "ETH", "XRP"];

const cryptoIcons = {
  btc: "./img/icons/btc.png",
  eth: "./img/icons/btc.png",
  XRP: "./img/icons/btc.png",
};

const DEFAULT_CRYPTO_ICON = "./default-icon";

const Main = (props) => {
    
  React.useEffect(() => {
    const apiKey =
      "c1c2e11b16a4cbdec962a4b05fb75d990f2e13cf00a6198e23690c769957";
    const apiUrl = `https://api.cryptorank.io/v1/currencies?api_key=${apiKey}`;

    lineCryptoHandle(cryptoCurrencies, apiUrl);
  }, []);

  const lineCryptoHandle = (cryptoCurrencies, apiUrl) => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        cryptoCurrencies.forEach((currencyCode) => {
          const currencyData = data.data.find(
            (currency) => currency.symbol === currencyCode
          );
          if (currencyData) {
            const currencyPrice = currencyData.values.USD.price;
            console.log(
              `${currencyData.name} (${currencyData.symbol}): $${currencyPrice}`
            );
          } else {
            console.log(`Цена для ${currencyCode} не найдена.`);
          }
        });
      });
  };

  return (
    <div className="crypto-block">
      <div className="crypto-block__wrapper">
        <div className="crypto-block__title">
          <p>Name</p>
          <p>Chg(24H)</p>
          <p>Price(USD)</p>
        </div>

        {cryptoCurrencies.length > 0 &&
          cryptoCurrencies.map((el, i) => (
            <div className="crypto-block__item" key={i}>
              <img
                src={
                  Object.keys(cryptoIcons).find((key) =>
                    key.toString().toUpperCase().includes(el.toString().toUpperCase())
                  )
                    ? cryptoIcons[el]
                    : DEFAULT_CRYPTO_ICON
                }
                alt={el + " icon"}
              />
              <p>{el}</p>

              <div className="crypto-block__change"></div>
              <div className="crypto-block__price"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Main;
