/* eslint-disable react/prop-types */
export default function Button({
  color = "blue",
  textColor = "white",
  clickFunction = () => console.log("clicked"),
  children = "Button",
}) {
  return (
    <button
      onClick={clickFunction}
      style={{ backgroundColor: color, color: textColor }}
    >
      {children}
    </button>
  );
}
