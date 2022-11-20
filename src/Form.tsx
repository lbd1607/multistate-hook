import React from "react";
import TextInput from "./Input";
import SearchableDropdown from "./SearchableDropdown";
import useMultistate from "./useMultistate";

export type ValueLabelPair = {
  value: string;
  label: string;
};

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

const Form = () => {
  const [state, dispatch] = useMultistate({
    breads: emptySelection,
    meats: emptySelection,
    plantBasedEntrees: emptySelection,
    cheeses: emptySelection,
    vegetables: emptySelection,
    name: "",
  });

  const handleReset = () => {
    for (const key in categories) {
      if (key === "name") {
        dispatch({ key: key as keyof typeof categories, value: "" });
      } else {
        dispatch({
          key: key as keyof typeof categories,
          value: emptySelection,
        });
      }
    }
  };

  const handleSetOption = ({
    key,
    selectedValue,
  }: {
    key: keyof typeof categories;
    selectedValue: ValueLabelPair;
  }) => {
    dispatch({ key: key, value: selectedValue });
  };

  const handleSetName = (value: string) => {
    dispatch({ key: "name", value: value });
  };

  console.table(state); //See the values as they change

  return (
    <div className="form-wrapper">
      <h1>Sandwich order form</h1>
      <SearchableDropdown
        id={categories.breads.fieldLabel}
        fieldLabel={categories.breads.fieldLabel}
        options={categories.breads.options}
        onChange={(selected: ValueLabelPair) =>
          handleSetOption({ key: "breads", selectedValue: selected })
        }
        value={state.breads}
      />
      <SearchableDropdown
        id={categories.meats.fieldLabel}
        fieldLabel={categories.meats.fieldLabel}
        options={categories.meats.options}
        onChange={(selected: ValueLabelPair) =>
          handleSetOption({ key: "meats", selectedValue: selected })
        }
        value={state.meats}
        isDisabled={state.plantBasedEntrees.value !== ""}
      />
      <SearchableDropdown
        id={categories.plantBasedEntrees.fieldLabel}
        fieldLabel={categories.plantBasedEntrees.fieldLabel}
        options={categories.plantBasedEntrees.options}
        onChange={(selected: ValueLabelPair) =>
          handleSetOption({
            key: "plantBasedEntrees",
            selectedValue: selected,
          })
        }
        value={state.plantBasedEntrees}
        isDisabled={state.meats.value !== ""}
      />
      <SearchableDropdown
        id={categories.cheeses.fieldLabel}
        fieldLabel={categories.cheeses.fieldLabel}
        options={categories.cheeses.options}
        onChange={(selected: ValueLabelPair) =>
          handleSetOption({ key: "cheeses", selectedValue: selected })
        }
        value={state.cheeses}
        isMulti={true}
      />
      <SearchableDropdown
        id={categories.vegetables.fieldLabel}
        fieldLabel={categories.vegetables.fieldLabel}
        options={categories.vegetables.options}
        onChange={(selected: ValueLabelPair) =>
          handleSetOption({ key: "vegetables", selectedValue: selected })
        }
        value={state.vegetables}
        isMulti={true}
      />
      <TextInput
        id={"name"}
        label={"Name"}
        value={state.name}
        onChange={(e: any) => handleSetName(e.target.value)}
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
