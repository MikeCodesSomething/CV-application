/* eslint-disable react/prop-types */
import { useState } from "react";

export default function InputField({ name, index, editMode }) {
  const [fieldValue, setFieldValue] = useState("");
  //returns an input if in editMode, a div if not
  return editMode ? (
    <input
      type="text"
      id={name}
      name={name}
      autoComplete="on"
      key={index}
      value={fieldValue}
      onChange={(evt) => setFieldValue(evt.target.value)}
    />
  ) : (
    <div id={name} key={index}>
      {fieldValue}
    </div>
  );
}
