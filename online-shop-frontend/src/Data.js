let sampleProducts = []

/* Available categories */
const categories = ['Всі категорії', 'Спортивний одяг та взуття', 'Харчування', 'Вітаміни та добавки']

/* 
 * This function generates menu items.
 * Some are hardcoded, some based on categories.
 */
const generateMenuItems = () => {
  let menuItems = [
    { type: "title", name: "Категорії", id: 3 },
  ];

  menuItems = menuItems.concat(categories.map((x, i) => {
    return {
      name: x, url: "/search/?directCategory=true&category=" + x, id: 4 + i, type: "item", parent: "Категорії"
    }
  }))

  return menuItems;
}

async function getProducts() {
  let response = await fetch(`http://localhost:3000/products`);
  sampleProducts = [];
  let json = await response.json();
  console.log(json);

  for (let index = 0; index < json.length; index++) {
    const element = json[index];
    console.log(element);
    sampleProducts.push({
      id: element.id,
      name: element.name,
      category: categories[element.categoryid],
      price: element.cost,
      description: element.description,
      inStock: true,
      popular: true,
      imageURL: element.imageurl
    });
  }
}
let menuItems = generateMenuItems();

export { sampleProducts, menuItems, categories, getProducts }