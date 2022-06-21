import React, { useState } from 'react';

const Accordion = ({ items }) => {

	const [activeIndex, setActiveIndex] = useState();

	const onTitleClicked = (index) => {
		setActiveIndex(index);
	}

	const renderedItems = items.map((item, index) => {
		const className = (index === activeIndex) ? " active" : "";
		return (
			<React.Fragment key={item.title}>
				<div
					className={`title ${className}`}
					onClick={() => onTitleClicked(index)}
				>
					<i className='dropdown icon' />
					{item.title}
				</div>
				<div className={`content ${className}`}>
					<p> {item.content} </p>
				</div>
			</React.Fragment>
		)
	});

	return (
		<div className='ui styled accordion'>
			{renderedItems}
			{/* <h1> {activeIndex} </h1> */}
		</div>
	)
}

export default Accordion