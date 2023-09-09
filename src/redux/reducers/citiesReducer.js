import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/citiesAction.js";

const initialState = {
  allCities: [],
  filterCity: [],
  selectedValue: "",
  name: "",
  itineraries: [],
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.save_cities, (store, action) => {
    return {
      ...store,
      // cities: [...store.cities, action.payload]
      allCities: action.payload.cities,
      filterCity: action.payload.cities,
    };
  }),
    builder.addCase(actions.city_input, (store, action) => {
      return {
        ...store,
        selectedValue: action.payload.selectedValue,
        name: action.payload.name,
      };
    }),
    builder.addCase(actions.save_itineraries, (store, action) => {
      return {
        ...store,
        itineraries: action.payload.itineraries,
      };
    });
});

export default citiesReducer;
