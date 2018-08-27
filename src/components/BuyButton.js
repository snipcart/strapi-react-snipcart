import React, { Component } from 'react';

class BuyButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.product.id,
			name: props.product.name,
			price: props.product.price,
			weight: props.product.weight,
			description: props.product.description,
			url: "https://snipcart-strapi.herokuapp.com/snipcartParser"
		}
	}

	render() {
		return (
			<button
				className="snipcart-add-item BuyButton"
				data-item-id={this.state.id}
				data-item-name={this.state.name}
				data-item-price={this.state.price}
				data-item-weight={this.state.weight}
				data-item-url={this.state.url}
				data-item-description={this.state.description}>
				ADD TO CART ({this.state.price}$)
			</button>
		);
	}
}

export default BuyButton;