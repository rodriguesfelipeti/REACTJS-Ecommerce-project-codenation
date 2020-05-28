import React from 'react'


const Figure = (props) => {
    return(
        <figure className="product__image">
            {props.badge ? <span className="badge badge--discount">{props.badge}</span> : false}
            <img src={props.image} alt={props.alt} title="" />
            {props.children}
        </figure>
    )
}

export default Figure