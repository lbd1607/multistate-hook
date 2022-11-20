const BREADS = [
  { value: "White", label: "White" },
  { value: "Wheat", label: "Wheat" },
  { value: "Gluten-free wrap", label: "Gluten-free wrap" },
];
const MEATS = [
  { value: "Hamburger", label: "Hamburger" },
  { value: "Shredded chicken", label: "Shredded chicken" },
  { value: "BBQ pork", label: "BBQ pork" },
];
const PLANT_BASED_ENTREES = [
  { value: "Black bean burger", label: "Black bean burger" },
  { value: "Shredded portabella", label: "Shredded portabella" },
  { value: "BBQ tempeh", label: "BBQ tempeh" },
];
const CHEESES = [
  { value: "Cheddar", label: "Cheddar" },
  { value: "Swiss", label: "Swiss" },
  { value: "Pepper jack", label: "Pepper jack" },
];
const VEGETABLES = [
  { value: "Lettuce", label: "Lettuce" },
  { value: "Tomato", label: "Tomato" },
  { value: "Onion", label: "Onion" },
];

export const categories = {
  breads: { fieldLabel: "Bread", options: BREADS },
  meats: { fieldLabel: "Meat", options: MEATS },
  plantBasedEntrees: {
    fieldLabel: "Plant Based Entrees",
    options: PLANT_BASED_ENTREES,
  },
  cheeses: { fieldLabel: "Cheese", options: CHEESES },
  vegetables: { fieldLabel: "Vegetables", options: VEGETABLES },
  name: "",
};

export const emptySelection = { value: "", label: "" };
