
export type TBookCategory =
  | "Fiction"
  | "Non-Fiction"
  | "Fantasy"
  | "History"
  | "Science"
  | "Biography";

export type TBook = {
  _id: string;
  title: string;
  availability: boolean;
  author: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  publishedDate: string; 
  createdAt: string;
  updatedAt: string;
  __v: number;
};  
  
