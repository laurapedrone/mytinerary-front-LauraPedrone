import './cityDetail.css'
import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button } from "react-bootstrap"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import CardItineraries from '../../components/CardsItineraries/CardItineraries'
import { useSelector, useDispatch } from 'react-redux'
import cities_actions from "../../redux/actions/citiesAction.js"

const { save_cities, save_itineraries } = cities_actions

const CityDetail = () => {
    // const [city, setCities] = useState({})
    // const [itinerary, setItinerary] = useState([])
    const { id } = useParams()
    const citiesStore = useSelector((store) => store.cities.allCities)
    console.log(citiesStore)
    const tineraryStore = useSelector((store) => store.cities.itineraries)
    console.log(tineraryStore)
    const dispatch = useDispatch()



    useEffect(() => {
        axios('http://localhost:3000/api/cities/' + id)
            .then(res => {
                // setCities(res.data.response)
                // setItinerary(res.data.response.itinerary)
                dispatch(save_cities({ cities: res.data.response }))
                dispatch(save_itineraries({ itineraries: res.data.response.itinerary }))
            })
            .catch(error => console.error(error))
    }, [dispatch])

    return (
        <>
            <section className="fundmain2 col-sm-12" style={{ backgroundImage: `url("${citiesStore.imageCover || citiesStore.image}")` }} >
                <div className='formbox2'>
                    <h3 className="textsubtitle2">{citiesStore.name}</h3>
                    <p className='paragraphmain2'>{citiesStore.description}</p>
                    <Form className="d-flex">
                        <LinkContainer to="/">
                            <Button variant="outline-info">View Itiniraries!</Button>
                        </LinkContainer>
                    </Form>
                </div>
            </section>
            <Container fixed>
                <h1 style={{ textAlign: 'center' }}>Excursions and Activities in {citiesStore.name}</h1>
                <div className="row g-4">
                    {
                        tineraryStore.length > 0 ? (
                            tineraryStore.map(c => <CardItineraries key={c._id} data={c} />)
                        ):(
                            <p>No found</p>
                        )
                    }
                </div>
            </Container>
        </>
    )
}

export default CityDetail
