const food = require("./food.json");

function list(arr) {
  arr.forEach((items) => {
    console.log(items);
  });
}
list(food);

function veg_category(arr, category) {
  const newArr = arr.filter((items) => {
    return items.category.toLowerCase() === category.toLowerCase();
  });
  return newArr;
}
const vegetable = veg_category(food, "vegetable");
console.log("Vegetable", vegetable);

function fruit_category(arr, category) {
  const newArr = arr.filter((items) => {
    return items.category.toLowerCase() === category.toLowerCase();
  });
  return newArr;
}
const fruit = fruit_category(food, "fruit");
console.log("fruit", fruit);

function Protein_Category(arr, category) {
  const newArr = arr.filter((item) => {
    return item.category.toLowerCase() === category.toLowerCase();
  });
  return newArr;
}
const protein = Protein_Category(food, "protein");
console.log("Protein", protein);

function nuts_category(arr, category) {
  const newArr = arr.filter((items) => {
    return items.category.toLowerCase() === category.toLowerCase();
  });
  return newArr;
}
const nuts = nuts_category(food, "nuts");
console.log("nuts", nuts);

function grain_Category(arr, category) {
  const newArr = arr.filter((item) => {
    return item.category.toLowerCase() === category.toLowerCase();
  });
  return newArr;
}
const grain = grain_Category(food, "grain");
console.log("Grain", grain);

function dairy_category(arr, category) {
  const newArr = arr.filter((items) => {
    return items.category.toLowerCase() === category.toLowerCase();
  });
  return newArr;
}
const dairy = dairy_category(food, "dairy");
console.log("dairy", dairy);

function Food_Calorie(arr, calorie) {
  const newArr = arr.filter((item) => {
    if (calorie === "above") {
      return item.calorie > 100;
    } else if (calorie === "below") {
      return item.calorie < 100;
    }
  });
  return newArr;
}
const calorie_above_100 = Food_Calorie(food, "above");
console.log("Calorie_above_100", calorie_above_100);

function Food_Calorie(arr, calorie) {
  const newArr = arr.filter((item) => {
    if (calorie === "above") {
      return item.calorie > 100;
    } else if (calorie === "below") {
      return item.calorie < 100;
    }
  });
  return newArr;
}
const calorie_below_100 = Food_Calorie(food, "below");
console.log("Calorie_below_100", calorie_below_100);

function sort_content(arr, x, y) {
  if (y == "highest") {
    return arr.sort((a, b) => a[x] - b[x]);
  } else if (y === "lowest") {
    return arr.sort((a, b) => b[x] - a[x]);
  }
}
const sortedProtein = sort_content(food, "protiens", "lowest");
console.log("Sorted Protein", sortedProtein);

function sort_content(arr, x, y) {
  if (y == "highest") {
    return arr.sort((a, b) => a[x] - b[x]);
  } else if (y === "lowest") {
    return arr.sort((a, b) => b[x] - a[x]);
  }
}
const sortedCab = sort_content(food, "cab", "highest");
console.log("Sorted Cab", sortedCab);
