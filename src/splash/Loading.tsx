import React, { useState } from "react";

import "./Loading.css";

export const Loading = () => (
  <div className="pizza-container">
    <div className="pizza">
      <div className="basil">
        <div className="leaf"/>
      </div>
      <div className="onions" />
      <div className="pepperonis"/>
      <div className="olives"/>
      <div className="slices">
        <div className="slice slice-1"/>
        <div className="slice slice-2"/>
        <div className="slice slice-3"/>
        <div className="slice slice-4"/>
      </div>
    </div>
  </div>
);
