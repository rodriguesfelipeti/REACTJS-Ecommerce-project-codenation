import React from 'react'

class Figure extends React.Component {
    constructor(props) {
        super(props)

        this.image = props.image
        this.alt = props.alt
        this.badge = props.badge
    }
    
    renderBadge(discount) {
        return (discount) ? <span className="badge badge--discount">{this.badge}</span> : false
    }
    
    render() {
        this.image = this.props.image
        return(
            <figure className="product__image">
                {this.renderBadge(this.badge)}
                <img src={this.image} alt={this.alt} title="" />
                {this.props.children}
            </figure>
        )
    }
}

export default Figure