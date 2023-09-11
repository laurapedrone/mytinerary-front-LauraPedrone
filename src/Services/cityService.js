import axios from "axios";

const citiesQueries = axios.create({
  baseURL: "http://localhost:3000/api/cities",
});

export const getAllCities = async (queryParams = "") => {
  try {
    const response = await citiesQueries(queryParams);
    return response.data.response;
  } catch (error) {
    console.log(error);
  }
};

export const getOneCity = async (id) => {
  try {
    const response = await citiesQueries("/" + id);
    return response.data.response;
  } catch (error) {
    console.log(error);
  }
};

export const getItineries = async (id) => {
    try {
      const response = await citiesQueries("/" + id);
      return response.data.response.itinerary;
    } catch (error) {
      console.log(error);
    }
  };
