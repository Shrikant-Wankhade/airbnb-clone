import React from "react"

export default function Card({img,rating,reviewCount, country,title,price}) {
    return (
        <div className="card">
            <img src={`../../images/${img}`} className="card__image" ></img>
            <div className="card--status"></div>
            <div className="card__info">
                <div className="card__info__rating">
                    <img src="../../images/star.png" className="card__info__rating--star"></img>
                    <p className="card__info__rating--rate"> {rating} </p>
                    <p className="card__info__rating--total-ratings">({reviewCount}) .</p>
                    <p className="card__info__rating--country">{country}</p>
                </div>
                <div className="card__info__caption">
                    <p className="card__info__caption--text">{title}</p>
                </div>
                <div className="card__info__price">
                    <p className="card__info__price--starting-price"><span className="price-bold">From ${price}</span> / person</p>

                </div>
            </div>    
        </div>
    )
}