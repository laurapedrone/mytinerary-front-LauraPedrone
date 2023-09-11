import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/citiesAction.js";

const initialState = {
  allCities: [],
  filterCity: [],
  selectedValue: "",
  name: "",
  city: [],
  itineraries: [],
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.city_render.fulfilled, (store, action) => {
    return {
      ...store,
      allCities: action.payload,
      filterCity: action.payload,
    };
  }),
    builder.addCase(actions.city_input, (store, action) => {
      return {
        ...store,
        selectedValue: action.payload.selectedValue,
        name: action.payload.name,
      };
    }),
    builder.addCase(actions.get_city.fulfilled, (store, action) => {
      return {
        ...store,
        city: action.payload,
      };
    }),
    builder.addCase(actions.get_itineraries.fulfilled, (store, action) => {
      return {
        ...store,
        itineraries: action.payload,
      };
    });
});

export default citiesReducer;
