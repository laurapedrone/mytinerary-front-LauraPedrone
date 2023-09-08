import './cityDetail.css'
import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button } from "react-bootstrap"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import CardItineraries from '../../components/CardsItineraries/CardItineraries'


const CityDetail = () => {
    const [city, setCities] = useState({})
    const [itinerary, setItinerary] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios('http://localhost:3000/api/cities/' + id)
            .then(res => {
                setCities(res.data.response)
                setItinerary(res.data.response.itinerary)
            })
            .catch(error => console.error(error))
    }, [])
    console.log(itinerary)
    console.log(city)
    return (
        <>
            <section className="fundmain2 col-sm-12" style={{ backgroundImage: `url("${city.imageCover || city.image}")` }} >
                <div className='formbox2'>
                    <h3 className="textsubtitle2">{city.name}</h3>
                    <p className='paragraphmain2'>{city.description}</p>
                    <Form className="d-flex">
                        <LinkContainer to="/">
                            <Button variant="outline-info">View Itiniraries!</Button>
                        </LinkContainer>
                    </Form>
                </div>
            </section>
            <Container fixed>
                <h1 style={{ textAlign: 'center' }}>Excursions and Activities in {city.name}</h1>
                <div className="row g-4">
                    {
                       itinerary.map(c => <CardItineraries key={c._id} data={c} />)
                    }
                </div>
            </Container>
        </>
    )
}

export default CityDetail
