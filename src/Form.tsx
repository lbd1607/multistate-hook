import React from "react";
import { emptySelection, categories } from "./data";
import TextInput from "./Input";
import SearchableDropdown, { ValueLabelPair } from "./SearchableDropdown";
import useMultistate from "./useMultistate";

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

  const handleSubmit = () => {
    //TODO: Put your submit behavior here
    handleReset();
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
    <form>
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
          isRequired={true}
        />
        <div className="btn-wrapper">
          <button onClick={handleReset} className="btn reset" type="reset">
            Reset
          </button>
          <button onClick={handleSubmit} className="btn submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
