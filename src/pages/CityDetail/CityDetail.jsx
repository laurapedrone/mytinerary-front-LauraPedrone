import './cityDetail.css'
import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import CardItineraries from '../../components/CardsItineraries/CardItineraries'
import { useSelector, useDispatch } from 'react-redux'
import actions from "../../redux/actions/citiesAction.js"

const { get_city, get_itineraries } = actions

const CityDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const citiesStore = useSelector((store) => store.cities.city)
    console.log(citiesStore)
    const tineraryStore = useSelector((store) => store.cities.itineraries)
    console.log(tineraryStore)

    useEffect(() => {
                dispatch(get_city(id))
                dispatch(get_itineraries(id))
    }, [id,dispatch])

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
