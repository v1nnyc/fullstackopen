import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/name";

const get = (countryName) => {
  const request = axios.get(`${baseUrl}/${countryName}`);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const noteService = {
  get,
};

export default noteService;
