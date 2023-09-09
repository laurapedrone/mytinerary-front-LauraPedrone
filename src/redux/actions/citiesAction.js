import { createAction } from "@reduxjs/toolkit";

const save_cities = createAction(
    'save_cities', ({cities})=>{
        return{
            payload:{
                cities
            }
        }
    }
)

const city_input = createAction(
    "city_input", (selectedValue,name)=>{
        return {
            payload:{
                selectedValue,
                name,
            }
        }
    }
)

const save_itineraries = createAction(
    'save_itineraries', ({itineraries})=>{
        return{
            payload:{
                itineraries
            }
        }
    }
)

const actions = {save_cities, city_input, save_itineraries}
export default actions