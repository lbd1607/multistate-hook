import React from "react";
import SearchableDropdown from "./SearchableDropdown";

const BREADS = [
  { value: "White", label: "White" },
  { value: "Wheat", label: "Wheat" },
  { value: "Brioche", label: "Brioche" },
];
const MEATS = [
  { value: "Hamburger", label: "Hamburger" },
  { value: "Shredded chicken", label: "Shredded chicken" },
  { value: "BBQ pork", label: "BBQ pork" },
];
const PLANT_BASED_ALTERNATIVES = [
  { value: "Black bean burger", label: "Black bean burger" },
  { value: "Shredded portabella", label: "Shredded portabella" },
  { value: "BBQ tempeh", label: "BBQ tempeh" },
];
const CHEESES = [
  { value: "None", label: "None" },
  { value: "Cheddar", label: "Cheddar" },
  { value: "Swiss", label: "Swiss" },
  { value: "Pepper jack", label: "Pepper jack" },
];
const VEGETABLES = [
  { value: "Lettuce", label: "Lettuce" },
  { value: "Tomato", label: "Tomato" },
  { value: "Onion", label: "Onion" },
];

const Form = () => {
  const handleReset = () => {
    //TBI: Reset all states
  };
  return (
    <div className="form-wrapper">
      <h1>Sandwich order form</h1>
      <SearchableDropdown id="bread" fieldLabel="Bread" options={BREADS} />
      <SearchableDropdown id="meat" fieldLabel="Meat entrees" options={MEATS} />
      <SearchableDropdown
        id="plant-based"
        fieldLabel="Plant-based Entrees"
        options={PLANT_BASED_ALTERNATIVES}
      />
      <SearchableDropdown id="cheese" fieldLabel="Cheese" options={CHEESES} />
      <SearchableDropdown
        id="vegetables"
        fieldLabel="Vegetables"
        options={VEGETABLES}
      />
      <div className="btn-wrapper">
        <button onClick={handleReset} className="btn reset" type="reset">
          Reset
        </button>
        <button className="btn submit" type="submit">
          Submit
        </button>
      </div>{" "}
    </div>
  );
};

export default Form;
