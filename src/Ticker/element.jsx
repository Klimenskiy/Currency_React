import React from 'react'

const Element = props => {
	return (
		<div className='ticker__item'>
			PLN/{props.symbol} - ${parseFloat(props.value).toFixed(2)}
		</div>
	)
}

export default Element
