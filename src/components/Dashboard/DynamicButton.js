import React from "react";


const DynamicButton = ({ regular, small }) => {
  return (
    <div className="dynamic-button">
      {regular}
      {small}
    </div>
  );
};

export default DynamicButton;
