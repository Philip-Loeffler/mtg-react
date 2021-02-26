import { cards } from "../Models/cards";
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../Helpers/fetch";

let baseUrl = "http://localhost:5000/";
const getAllCards = () => {
  return getRequest<cards>(`${baseUrl}/card`);
};

export const cardApi = {
  getAllCards,
};
