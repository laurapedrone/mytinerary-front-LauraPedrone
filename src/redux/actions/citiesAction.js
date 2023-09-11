import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCities, getOneCity, getItineries } from "../../Services/cityService";

const city_render = createAsyncThunk("cities_render", async () => {
  const cities = getAllCities();
  return cities;
});

const city_input = createAction("city_input", (selectedValue, name) => {
  return {
    payload: {
      selectedValue,
      name,
    },
  };
});

const get_city = createAsyncThunk("get_city", async (id) => {
  const city = getOneCity(id);
  return city;
});

const get_itineraries = createAsyncThunk("get_itineraries", async (id) => {
    const itineraries = getItineries(id);
    return itineraries;
  });


const actions = { city_render, city_input, get_city, get_itineraries };

export default actions;
