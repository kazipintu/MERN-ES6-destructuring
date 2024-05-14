{
  const food = {
    id: 103,
    name: 'rice',
    price: 59,
    shop: 'ration',
    isHealthy: true,
  }

  const nameFood = food.name;
  const priceFood = food.price;
  const shopFood = food.shop
  console.log(nameFood);
  console.log(priceFood);
  console.log(shopFood);

  const { id, name, price, isHealthy, shop } = food;
  console.log(id, price, isHealthy, shop);
}

{
  const company = {
    name: 'DevZone IT',
    CEO: {
      id: 1,
      name: "Ali Shorif",
      favFood: "Smashed potato wih lentil soup"
    },
    web: {
      work: 'website development',
      employees: 5,
      frameworks: 'react',
      tech: {
        first: 'html',
        second: 'css',
        third: 'tailwind',
        fourth: 'javascript'
      }
    }
  }

  const nameCompany = company.name;
  console.log(nameCompany);
  const nameCEO = company.CEO.name;
  console.log(nameCEO);
  const bestTech = company.weeb?.tec?.fourth; // Optional chaining //
  console.log(bestTech);

  //DESTRUCTURING//

  const { name, favFood } = company.CEO;
  console.log(favFood);
  const { third, first } = company.web.tech;
  console.log(third, first);

  const { second, fourth } = company.web?.tech; // Optional chaining //
  console.log(second, fourth);
}