import React from 'react'


document.addEventListener('DOMContentLoaded', function () {
	const apiKey = 'c1c2e11b16a4cbdec962a4b05fb75d990f2e13cf00a6198e23690c769957'
	const apiUrl = `https://api.cryptorank.io/v1/currencies?api_key=${apiKey}`

	const cryptoCurrencies = ['BTC', 'ETH', 'XRP']
	lineCryptoHandle(cryptoCurrencies, apiUrl)
})

function lineCryptoHandle(cryptoCurrencies, apiUrl) {
	fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
			cryptoCurrencies.forEach(currencyCode => {
					const currencyData = data.data.find(currency => currency.symbol === currencyCode);
					if (currencyData) {
							const currencyPrice = currencyData.values.USD.price;
							console.log(`${currencyData.name} (${currencyData.symbol}): $${currencyPrice}`);
					} else {
							console.log(`Цена для ${currencyCode} не найдена.`);
					}
			});
	})
	
}







const Main = props => {
	return (
		<div className='crypto-block'>
			<div className='crypto-block__wrapper'>
				<div className='crypto-block__title'>
					<p>Name</p>
					<p>Chg(24H)</p>
					<p>Price(USD)</p>
				</div>
				<div className='crypto-block__item' id='BTC'>
					<img src='./img/icons/btc.png' alt='btc' />
					<p>Bitcoin</p>

					<div className='crypto-block__change'></div>
					<div className='crypto-block__price'></div>
				</div>
				<div className='crypto-block__item'></div>
				<div className='crypto-block__item'></div>
				<div className='crypto-block__item'></div>
				<div className='crypto-block__item'></div>
				<div className='crypto-block__item'></div>
				<div className='crypto-block__item'></div>
				<div className='crypto-block__item'></div>
				<div className='crypto-block__item'></div>
				<div className='crypto-block__item'></div>
			</div>
		</div>
	)
}
export default Main
