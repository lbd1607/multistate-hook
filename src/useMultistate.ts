import { useState } from "react";

export default function useMultistate<OptionTypes>(initialValues: OptionTypes) {
  const [selectedValue, setState] = useState(initialValues);

  function setSelectedValue<ValueTypes>({
    key,
    value,
  }: {
    key: keyof OptionTypes;
    value: ValueTypes;
  }) {
    setState((prevVal: OptionTypes) => {
      return { ...prevVal, [key]: value };
    });
  }

  return [selectedValue, setSelectedValue] as const;
}
