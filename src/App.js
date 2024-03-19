import React from 'react'
import './App.scss'
import Header from './Header/header'
import Main from './Main/Main'
import Ticker from './Ticker/ticker'
const LOGO_TEXT = 'Nikita Klimko'

const HEADER_TEXT = 'Real-time currency <br /> exchange rates.'

const SEARCH_TEXT = 'Search...'

const search = './img/Search.png'

function App() {
	return (
		<div className='wrapper'>
			<Header
				logoText={LOGO_TEXT}
				headerText={HEADER_TEXT}
				searchIcon={search}
				searchText={SEARCH_TEXT}
			/>
			<Ticker/>
			<div className='currency-block'>
				<Main />
			</div>{' '}
		</div>
	)
}

export default App
