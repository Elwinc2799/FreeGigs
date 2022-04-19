import axios from "axios";

const BASE_URL = "https://freegigs.herokuapp.com";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
