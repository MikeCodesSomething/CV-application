/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

export default function FieldSection({
  title,
  initialEditMode = true,
  fields,
}) {
  const [editMode, setEditMode] = useState(initialEditMode);
  let saveDetails = () => setEditMode(!editMode);

  return (
    <div className="details-container">
      {/* Render title if provided */ title && <h3>{title}</h3>}
      {fields.map((field, index) => {
        return (
          <label htmlFor={field.name} key={index}>
            {field.name}:
            <InputField name={field.name} index={index} editMode={editMode} />
          </label>
        );
      })}
      <Button clickFunction={saveDetails}>
        {editMode === true ? "Save" : "Edit"}
      </Button>
    </div>
  );
}
