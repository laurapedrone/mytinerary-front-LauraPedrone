import React, { useEffect, useState, useRef } from 'react'
import CardCities from '../../components/CardCities/CardCities'
import './cities.css'
import Container from '@mui/material/Container';
import { FcSearch } from "react-icons/fc"
import { useSelector, useDispatch } from "react-redux"
import actions from "../../redux/actions/citiesAction.js"

const { city_render, city_input } = actions

const Cities = () => {

  const citiesStore = useSelector((store) => store.cities)
  console.log(citiesStore)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(city_render())   
  }, [dispatch])


  const handleSearch = (e) => {
    dispatch(city_input(citiesStore.selectedValue, e.target.value))
  }

  const filteredCities =  citiesStore.allCities.filter((dato) => {
    const city = dato.name || "";
    return city
      .toLowerCase()
      .startsWith((citiesStore.name || "").toLowerCase().trim());
  });

  console.log(filteredCities)

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
            <input onChange={handleSearch} value={citiesStore.name} type="text" id="input" className="form-control" placeholder="Where are you travelling to?..." />
          </div>
        </div>
      </section>
      <section>
        <Container fixed>
          <h1 style={{ textAlign: 'center' }}>Main destinations</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              filteredCities.length > 0 ? (
                filteredCities.map(c => <CardCities key={c._id} data={c} />)
              ) : (
                <p>No found</p>
              )
            }
          </div>
        </Container>
      </section>
    </>
  )
}

export default Cities