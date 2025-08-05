export const fetchProducts = async () => {
  try {
    const resoponse = await fetch(`https://fakestoreapi.com/products`);

    if (!resoponse.ok) {
      throw new Error(`Ошибка при загрузки продуктов: ${resoponse.status}`);
    }

    const data = await resoponse.json();

    return [...data];
  } catch (error) {
    console.error("Ошибка загрузки продуктов:", error);
    throw error;
  }
};
