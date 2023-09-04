import './cityDetail.css'
import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button} from "react-bootstrap"
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CityDetail = () => {
    const [data, setCities] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        axios('http://localhost:3000/api/cities/' + id)
          .then(res => setCities(res.data.response))
          .catch(error => console.error(error))
      }, [])    

    return (
        <>
            <section className="fundmain2 col-sm-12" style={{ backgroundImage: `url("${data.imageCover || data.image}")` }} >
                <div className='formbox2'>
                    <h3 className="textsubtitle2">{data.name}</h3>
                    <p className='paragraphmain2'>{data.description}</p>
                    <Form className="d-flex">
                        <LinkContainer to="/">
                            <Button variant="outline-info">View Itiniraries!</Button>
                        </LinkContainer>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default CityDetail
