import React, { useEffect, useState, useRef } from 'react'
import CardCities from '../../components/CardCities/CardCities'
import axios from 'axios'
import './cities.css'
import Container from '@mui/material/Container';
import { FcSearch } from "react-icons/fc"


const Cities = () => {
  // const params = useParams()
  // console.log(params)

  const [cities, setCities] = useState([])
  const [citiesAux, setCitiesAux] = useState([])
  const inputRef = useRef()

  useEffect(() => {
    axios('http://localhost:3000/api/cities')
      .then(res => {
        setCities(res.data.response)
        setCitiesAux(res.data.response)
      })
      .catch(error => console.error(error))
  }, [])

  console.log(cities)
  function handleSearch(city) {
    const cityValue = inputRef.current.value.toLowerCase().trim()

    if (city?.key === "Enter" || city.type === 'click') {
      const cityfilter = (cities) => cities.name.toLowerCase().trim().startsWith(cityValue)
      const allCityFiter = citiesAux.filter(cityfilter)
      setCities(allCityFiter)
    } else if (cityValue === '') {
      setCities(citiesAux)
    }
  }

  return (
    <>
      <section className="fund_main col-sm-12" style={{ backgroundImage: `url("./public/Assets/images/Cities.jpg")` }}>
        <div className='form-box'>
          <h3 className="textsubtitle">Cities</h3>
          <p className='paragraph_main'>Collection of the most beautiful places and experience</p>
          <div className="d-flex w-100">
            <span className="input-group-text border-0" id="search-addon">
              <FcSearch color='blue' size={30} style={{ cursor: 'pointer' }} onClick={handleSearch} />
            </span>
            <input onKeyUp={handleSearch} ref={inputRef} type="text" id="input" className="form-control" placeholder="Where are you travelling to?..." />
          </div>
        </div>
      </section>
      <section>
        <Container fixed>
          <h1 style={{ textAlign: 'center' }}>Main destinations</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              cities.map(c => <CardCities key={c._id} data={c} />)
            }
          </div>
        </Container>
      </section>
    </>
  )
}

export default Cities