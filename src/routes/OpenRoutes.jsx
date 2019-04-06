import React from "react";
import { Route } from "react-router-dom";

import Container from "./Container";

const OpenRoutes = () => (
  <div>
    <Route path="/" component={Container} />
  </div>
);

export default OpenRoutes;
