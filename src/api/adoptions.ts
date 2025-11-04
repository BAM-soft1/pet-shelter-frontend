import axios from "axios";
import type { Adoption } from "../types/types";
import { API_URL } from "../settings";

const API_URL_ADOPTIONS = `${API_URL}/adoptions`;

export const AdoptionService = {
  getAdoptions: async (): Promise<Adoption[]> => {
    const response = await axios.get(API_URL_ADOPTIONS);
    return response.data;
  },
};
