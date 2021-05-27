/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../routes/routes";


export default function LayoutApp() {
  return (
    <BrowserRouter>
          <div>     
                 <Routes />              
          </div>
    </BrowserRouter>
  );
}
