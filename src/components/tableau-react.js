import Tableau from "tableau-react";

export default function TableauReact() {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  return (
    <div className="App">
      <Tableau
        url="https://public.tableau.com/shared/XTCDMZ8KF?:display_count=y&:origin=viz_share_link"
        options={options}
      />
    </div>
  );
}
