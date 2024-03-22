import React from 'react'
import Wrapper from './wrapper'

const Ticker = props => {
	const [dataUrl, setDataUrl] = React.useState('')
	const [currenciesLine, setCurrenciesLine] = React.useState({})

	const currencyArray = [
		'USD',
		'EUR',
		'AUD',
		'CAD',
		'NZD',
		'SGD',
		'UAH',
		'GBP',
		'HUF',
		'CHF',
		'JPY',
		'RON',
		'CZK',
		'BGN',
		'TRY',
		'ILS',
		'BRL',
		'MYR',
		'XDR',
		'INR',
		'CNY',
	]
	React.useEffect(() => {
		if (currencyArray && currencyArray.length > 0) {
			setDataUrl('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')
		}
	}, [currencyArray])

	React.useEffect(() => {
		if (dataUrl === '') return

		fetch(dataUrl)
			.then(response => response.json())
			.then(data => {
				const updatedCurrencies = {}
				data[0].rates.forEach(rate => {
					if (currencyArray.includes(rate.code)) {
						updatedCurrencies[rate.code] = rate.mid
					}
				})
				setCurrenciesLine(updatedCurrencies)
			})
	}, [dataUrl])

	return (
		<div className='ticker__box'>
			<Wrapper currencies={currenciesLine} />
			<Wrapper currencies={currenciesLine} />
		</div>
	)
}

export default Ticker
