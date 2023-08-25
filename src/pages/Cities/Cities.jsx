import React, { useEffect, useState, useId } from 'react'
import CardCities from '../../components/CardCities/CardCities'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './cities.css'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cities = () => {
  const params = useParams()
  console.log(params)
  const [cities, setCities] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/api/cities')
      .then(res => setCities(res.data.response))
  }, [])

  return (
    <>
      <section className="fund_main col-sm-12">
        <div className='form-box'>
          <h3 className="textsubtitle">Cities</h3>
          <p className='paragraph_main'>Collection of the most beautiful places and experience</p>
          <div class="d-flex">
            <input type="search" id="input" className="form-control" placeholder="Search..." />
            <span class="input-group-text border-0" id="search-addon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
        </div>
      </section>
      <div className="container-fluid row row-cols-1 row-cols-md-3 g-4">
        {
          cities.map(c => <CardCities key={c._id} data={c} />)
        }
      </div>
    </>
  )
}

export default Cities