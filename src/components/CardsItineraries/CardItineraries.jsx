import React from 'react';
import { FcClock, FcCurrencyExchange,FcLike } from "react-icons/fc"


const CardItineraries = ({ data }) => {
    const { excursion_price, namePublicity, photoPublicity, duration, likes, hashtags } = data

    return (
        <div className="card text-center">
            <div className="card-header">
                Itinerary Test
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">See More...</a>
            </div>
            <div className="card-footer text-muted d-flex justify-content-center gap-4">
            <p className="card-text"> <FcClock size={30}  /> {duration}</p>
            <p className="card-text"> <FcCurrencyExchange size={30} /> {excursion_price}</p>
            <p className="card-text"><FcLike size={30}/> {likes}</p>
            <p className="card-text">Tags: {hashtags}</p>
   
            </div>
        </div>
    )
}

export default CardItineraries
