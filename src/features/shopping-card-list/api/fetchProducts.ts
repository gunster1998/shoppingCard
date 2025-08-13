import { Raiting } from "@entities/product/types/productType";

type ApiProductType = {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  rating: Raiting;
};

export const fetchProducts = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка при загрузки продуктов: ${response.status}`);
    }

    let data = await response.json();

    data = data.map((prev: ApiProductType) => {
      return { ...prev, quantity: 1 };
    });

    return [...data];
  } catch (error) {
    console.error("Ошибка загрузки продуктов:", error);
    throw error;
  }
};
