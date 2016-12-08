import React from 'react';
import ReactDOM from 'react-dom';

export default class HouseFrame extends React.Component {
	constructor() {
		super();
		this.renderCards = this.renderCards.bind(this);
	}
	renderCards() {
		const cards = [];
		const availableCards = this.props.houseCards;
		const cardSize = this.props.houseHeight * 0.15;
		Object.keys(availableCards).map((card, ind) => {
			cards.push(
				<div className={`house-colour-${this.props.houseColour}`} key={ind}
				style={{width: cardSize, height: cardSize, margin: `${cardSize*0.5}px` }}></div>
			);
		});
		return cards;
	}
	render() {
		const houseHeight = this.props.houseHeight;
		const className = `house house-${this.props.position}`;
		const colorClass = `house-colour-${this.props.houseColour}-light`;
		return (
			<div className={className}>
				<div className={colorClass} style={{width: houseHeight, height: houseHeight, padding: houseHeight*0.2}}>
					<div style={{width: houseHeight*0.6, height: houseHeight*0.6,
						backgroundColor: 'white', display: 'flex', flexWrap: 'wrap',
						justifyContent: 'center'}}>
						{this.renderCards()}
					</div>
				</div>
			</div>
		);
	}
};
