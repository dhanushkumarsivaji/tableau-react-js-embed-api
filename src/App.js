import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import TableauReact from "./components/tableau-react";
import TableauJSApi from "./components/tableau-js-api-3";


export default function App() {
  return (
    <React.Fragment>
     <Routes>
        <Route path='/' element={<TableauJSApi></TableauJSApi>} />
        <Route path='/2' element={<TableauReact></TableauReact>} />
     </Routes>
    </React.Fragment>
  );
}
