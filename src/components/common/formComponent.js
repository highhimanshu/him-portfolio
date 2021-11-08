import { TextField } from "@material-ui/core";
import React from "react";

const FormComponent = ({
  id,
  value,
  label,
  name,
  onChange,
  multiline,
  rows,
  variant,
}) => {
  return (
    <TextField
      id={id}
      value={value}
      label={label}
      color="secondary"
      name={name}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      variant={variant}
    />
  );
};

export default FormComponent;
