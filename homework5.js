var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  price: function () {
    return Object.values(this)
      .filter(val => typeof val === "string" && val.includes("грн"))
      .reduce((sum, val) => sum + parseInt(val), 0);
  },
  minPrice: function () {
    const prices = Object.values(this)
      .filter(val => typeof val === "string" && val.includes("грн"))
      .map(val => parseInt(val));
    return Math.min(...prices);
  },
  maxPrice: function () {
    const prices = Object.values(this)
      .filter(val => typeof val === "string" && val.includes("грн"))
      .map(val => parseInt(val));
    return Math.max(...prices);
  }
};

services['Розбити скло'] = "200 грн";
console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());
