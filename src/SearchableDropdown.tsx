import React from "react";
import Select, { StylesConfig } from "react-select";

type ValueLabelPair = { value: string; label: string };

const SearchableDropdown = ({
  fieldLabel,
  options,
  id,
}: {
  fieldLabel: string;
  options: Array<ValueLabelPair>;
  id: string;
}) => {
  const customDropdownStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      width: "15rem",
    }),
  };
  return (
    <div className="selection-wrapper">
      <label className="label" htmlFor={id}>
        {fieldLabel}
      </label>
      <Select
        className="dropdown"
        id="ice-creams"
        options={options}
        styles={customDropdownStyles}
      />
    </div>
  );
};

export default SearchableDropdown;
