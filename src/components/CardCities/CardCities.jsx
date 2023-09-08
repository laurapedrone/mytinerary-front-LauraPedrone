import React from 'react';
import { Form, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';
import './cardCities.css'
import { FcNext } from "react-icons/fc"

const CardCities = ({ data }) => {
    const {_id, name, country, flag, image } = data

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="cardimgtop" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className='d-flex'>
                        <img
                            alt=""
                            src={flag}
                            width="30"
                            height="20"
                            className="d-inline-block align-top"
                        />
                        <p className="card-text"> {country}</p>
                    </div>
                    <Form className="d-flex justify-content-end">
                        <LinkContainer to={'/citydetail/' + _id}>
                            <Button variant="outline-info">View More <FcNext /></Button>
                        </LinkContainer>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default CardCities


