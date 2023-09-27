import React from "react";
import { useExternalScript } from "../hooks/useExternalScript";

const TableauJSApi = () => {
  const [toolbarPosition, setToolbarPosition] = React.useState("top");
  const [viewSrc, setViewSrc] = React.useState(true);

  const tableauScript =
    "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
  const status = useExternalScript(tableauScript, "module");

  const handleChangeToolbarPosition = () => {
    if (toolbarPosition === "top") {
      setToolbarPosition("bottom");
    } else {
      setToolbarPosition("top");
    }
  };

  const handleChangeViews = () => {
    setViewSrc(!viewSrc);
  };

  const renderButtons = () => (
    <React.Fragment>
      <button
        onClick={() => handleChangeToolbarPosition()}
      >{` Change the position of toolbar ${toolbarPosition} `}</button>
      <button onClick={() => handleChangeViews()}>{` Change View`}</button>
    </React.Fragment>
  );

  return status === "ready" ? (
    <React.Fragment>
      {renderButtons()}
      <div style={{ width: "100%" }}>
        <tableau-viz
          id="tableauViz"
          src={
            viewSrc
              ? "https://public.tableau.com/views/DhanushsHelloWorld/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
              : "https://public.tableau.com/views/AJAYDASHBOARD_16950052959310/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link"
          }
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
// const [showTooltip, setShowTooltip] = React.useState(true);
// <viz-filter
// field="State/Province"
// value="California,Utah,Oregon,Washington"
// ></viz-filter>
// <custom-parameter name=":tooltip" value={showTooltip ? "yes" : 'no'}></custom-parameter>
// <custom-parameter name=":dataDetails" value="no"></custom-parameter>
