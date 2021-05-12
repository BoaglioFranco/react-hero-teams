import axios from "axios";
import { HeroListResponse } from "./models";

export const fetchHero = async (name: string) => {
  const response = axios.get<HeroListResponse>(
    `${process.env.REACT_APP_API_URL}/search/${name}`
  );
  return response;
};
