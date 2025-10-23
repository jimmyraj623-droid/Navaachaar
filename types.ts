
export interface Review {
  reviewer: string;
  comment: string;
}

export interface ServiceProvider {
  id: number;
  name: string;
  occupation: string;
  phone: string;
  area: string;
  imageUrl: string;
  experience: string;
  reviews: Review[];
}