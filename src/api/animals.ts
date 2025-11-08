import axiosWithAuth from "../security/axios";
import type { Animal } from "../types/types";
import { API_URL } from "../settings";

const API_URL_ANIMALS = `${API_URL}/animals`;

export const AnimalService = {
  getAnimals: async (): Promise<Animal[]> => {
    const response = await axiosWithAuth.get(API_URL_ANIMALS);
    return response.data;
  },

  getAnimalById: async (id: number): Promise<Animal> => {
    const response = await axiosWithAuth.get(`${API_URL_ANIMALS}/${id}`);
    return response.data;
  },
};
