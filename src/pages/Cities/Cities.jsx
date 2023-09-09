import React, { useEffect, useState, useRef } from 'react'
import CardCities from '../../components/CardCities/CardCities'
import axios from 'axios'
import './cities.css'
import Container from '@mui/material/Container';
import { FcSearch } from "react-icons/fc"
import { useSelector, useDispatch } from "react-redux"
import cities_actions from "../../redux/actions/citiesAction.js"

const { save_cities, city_input } = cities_actions

const Cities = () => {
  // const params = useParams()
  // console.log(params)

  // const aux = useSelector(store => store)
  // console.log(aux)

  const citiesStore = useSelector((store) => store.cities)
  console.log(citiesStore)
  const dispatch = useDispatch()

  // const [cities, setCities] = useState([])
  // const [citiesAux, setCitiesAux] = useState([])
  // const inputRef = useRef()

  useEffect(() => {
    // if(cities.length===0){
    axios('http://localhost:3000/api/cities')
      .then(res => {
        // setCities(res.data.response)
        // setCitiesAux(res.data.response)
        dispatch(save_cities({ cities: res.data.response }))
      })
      .catch(error => console.error(error))
    // }    
  }, [dispatch])

  // function handleSearch(city) {
  //   const cityValue = inputRef.current.value.toLowerCase().trim()

  //   if (city?.key === "Enter" || city.type === 'click') {
  //     const cityfilter = (cities) => cities.name.toLowerCase().trim().startsWith(cityValue)
  //     const allCityFiter = citiesAux.filter(cityfilter)
  //     setCities(allCityFiter)
  //   } else if (cityValue === '') {
  //     setCities(citiesAux)
  //   }
  // }

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