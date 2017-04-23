import React, {Component} from 'react';


export default class DisplayInfo extends Component {
	render() {
    console.log(this.props, 'props here')
    return (
  		<div id={"option" + this.props.i}>
        name: {this.props.name}
        url: {this.props.website}
        phone: {this.props.phone}
        address: {this.props.address + this.props.city + this.props.stateLocation + this.props.zip_code}
        is_closed: {this.props.is_closed}
        categories: {this.props.categories[0].title}
        reviews: {this.props.reviews}
        ratings: {this.props.ratings}
  		</div>
    )
	}
}