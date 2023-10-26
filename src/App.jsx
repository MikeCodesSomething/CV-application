// import { useState } from 'react'
import "./App.css";
import FieldSection from "./components/FieldSection.jsx";

function App() {
  return (
    <>
    <FieldSection
        fields={[
          { name: "Name", value: "" },
          { name: "Current Job Title", value: "" },
          { name: "Phone Number", value: "" },
          { name: "Email Address", value: "" },
        ]}
      ></FieldSection>
      <FieldSection
        title="Work History"
        initialEditMode={false}
        fields={[
          { name: "Job Title", value: "" },
          { name: "Employer", value: "" },
          { name: "Start Date", value: "" },
          { name: "End Date", value: "" },
          { name: "Responsibilities", value: "" },
        ]}
      ></FieldSection>
      <FieldSection
        title="Education"
        initialEditMode={false}
        fields={[
          { name: "Course", value: "" },
          { name: "School", value: "" },
          { name: "Start Date", value: "" },
          { name: "End Date", value: "" },
        ]}
      ></FieldSection>
    </>
  );
}

export default App;
