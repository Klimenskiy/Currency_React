import React from 'react'
import Element from './element'

const Wrapper = props => {
	const [localData, setLocalData] = React.useState({})

	const runline = React.useRef(null)

	const setNewVariable = () => {
		document.documentElement.style.setProperty(
			'--remainder',
			`${runline.current.offsetWidth}px`
		)
	}

	React.useEffect(() => {
		setNewVariable()
	}, [runline])

	React.useEffect(() => {
		if (props.currencies) setLocalData(props.currencies)
	}, [props.currencies])

	return (
		<div className='ticker__wrapper' ref={runline}>
			{Object.values(localData).length > 0 &&
				Object.entries(localData).map(([symbol, value], i) => (
					<Element key={i} symbol={symbol} value={value} />
				))}
		</div>
	)
}

export default Wrapper
