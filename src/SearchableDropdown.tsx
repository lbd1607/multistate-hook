import React from "react";
import Select, { StylesConfig } from "react-select";

export type ValueLabelPair = {
  value: string;
  label: string;
};

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
        id={id}
        options={options}
        styles={customDropdownStyles}
        onChange={onChange}
        value={value.value !== "" && value}
        defaultValue={value}
        isMulti={isMulti}
        isDisabled={isDisabled}
        closeMenuOnSelect={isMulti && false}
      />
    </div>
  );
};

export default SearchableDropdown;
