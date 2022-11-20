import React from "react";
import Select, { StylesConfig } from "react-select";
import { ValueLabelPair } from "./Form";

const SearchableDropdown = ({
  fieldLabel,
  options,
  id,
  onChange,
  value,
  isMulti,
  isDisabled,
}: {
  fieldLabel: string;
  options: Array<ValueLabelPair>;
  id: string;
  onChange: any;
  value: ValueLabelPair;
  isMulti?: boolean;
  isDisabled?: boolean;
}) => {
  const customDropdownStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      width: "15rem",
    }),
  };
  return (
    <div className="formfield-wrapper">
      <label className="label" htmlFor={id}>
        {fieldLabel}
      </label>
      <Select
        className="dropdown"
        id="sandwiches"
        options={options}
        styles={customDropdownStyles}
        onChange={onChange}
        value={value.value !== "" && value}
        defaultValue={value}
        isMulti={isMulti}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default SearchableDropdown;
