import React, { useState } from "react";
import { useExternalScript } from "../hooks/useExternalScript";

const TableauJSApi = () => {
  const [toolbarPosition] = React.useState("bottom");
  const viewsSources = [
    "https://public.tableau.com/views/DhanushsHelloWorld/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
    "https://public.tableau.com/views/KPICardwithDimensions/KPICard?:language=en-US&:display_count=n&:origin=viz_share_link",
    "https://public.tableau.com/views/AJAYDASHBOARD_16950052959310/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link",
  ];
  const [array] = useState(viewsSources);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tableauScript =
    "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
  const status = useExternalScript(tableauScript, "module");

  const handleChangeViews = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate the index of the previous value in a circular manner
      const newIndex = (prevIndex - 1 + array.length) % array.length;
      return newIndex;
    });
  };

  const renderButtons = () => (
    <div style={{ margin: "10px", display: "flex", justifyContent: "center" }}>
      <button
        style={{
          padding: "10px",
          fontWight: "600",
          backgroundColor: "black",
          color: "#fff",
          borderRadius: "4px",
          border: "1px solid white",
          cursor: "pointer",
        }}
        onClick={() => handleChangeViews()}
      >{` Change View`}</button>
    </div>
  );

  return status === "ready" ? (
    <React.Fragment>
      {renderButtons()}
      <div style={{ width: "100%" }}>
        <tableau-viz
          id="tableauViz"
          src={array[currentIndex]}
          toolbar={toolbarPosition}
          hide-tabs
        ></tableau-viz>
      </div>
    </React.Fragment>
  ) : (
    "loading..."
  );
};

export default TableauJSApi;

{
  /* <button
        onClick={() => handleChangeToolbarPosition()}
      >{` Change the position of toolbar - ${toolbarPosition} `}</button> */
}

// const [showTooltip, setShowTooltip] = React.useState(true);
// <viz-filter
// field="State/Province"
// value="California,Utah,Oregon,Washington"
// ></viz-filter>
// <custom-parameter name=":tooltip" value={showTooltip ? "yes" : 'no'}></custom-parameter>
// <custom-parameter name=":dataDetails" value="no"></custom-parameter>

// const handleChangeToolbarPosition = () => {
//   if (toolbarPosition === "top") {
//     setToolbarPosition("bottom");
//   } else {
//     setToolbarPosition("top");
//   }
// };
