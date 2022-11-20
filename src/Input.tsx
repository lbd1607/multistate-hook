import React from "react";

const TextInput = ({
  id,
  label,
  value,
  onChange,
  isRequired,
}: {
  id: string;
  label: string;
  value: string;
  onChange: any;
  isRequired?: boolean;
}) => {
  return (
    <div className="formfield-wrapper">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={"Enter your name ..."}
        required={isRequired}
      />
    </div>
  );
};

export default TextInput;
