type Animal = {
  animal_id: number;
  name: string;
  species: string;
  breed: string | null;
  birth_date: string;
  age_years: number;
  sex: "male" | "female" | "unknown";
  intake_date: string;
  status: "available" | "adopted" | "fostered" | "deceased";
  price: number;
  has_required_vaccines: boolean;
  adoption_status: string;
};

type User = {
  user_id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  role: "admin" | "staff" | "veterinarian" | "adopter" | "foster";
};

type Adoption = {
  adoption_id: number;
  animal_name: string;
  species: string;
  breed: string | null;
  adopter_name: string;
  adopter_email: string;
  adopter_phone: string | null;
  adoption_date: string;
  days_since_adoption: number;
};

export type { Animal, User, Adoption };
