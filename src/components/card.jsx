import React from "react"

export default function Card(props) {

    let badgeText ;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.location === "online"){
        badgeText = "ONLINE";
    }else {
        badgeText = props.location;
    }


    return (
        <div className="card">
            <div className="card--status">{badgeText}</div>
            <img src={`../../images/${props.coverImg}`} className="card__image" ></img>
            
            <div className="card__info">
                <div className="card__info__rating">
                    <img src="../../images/star.png" className="card__info__rating--star"></img>
                    <p className="card__info__rating--rate"> {props.stats.rating} </p>
                    <p className="card__info__rating--total-ratings">({props.stats.reviewCount}) .</p>
                    <p className="card__info__rating--country">{props.location}</p>
                </div>
                <div className="card__info__caption">
                    <p className="card__info__caption--text">{props.title}</p>
                </div>
                <div className="card__info__price">
                    <p className="card__info__price--starting-price"><span className="price-bold">From ${props.price}</span> / person</p>

                </div>
            </div>    
        </div>
    )
}