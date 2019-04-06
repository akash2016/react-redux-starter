/**
 * @author evivehealth on 14/03/19.
 */

import React, { useEffect } from "react";
import {
  Icon,
  Loader,
  Button,
  Label
} from "../../../shared/components";
import api from "../../../api";

const LandingContainer = () => {
  useEffect(() => {
    api
      .get("https://www.mocky.io/v2/5185415ba171ea3a00704eed")
      .then(res => console.log(res, "here"));
  }, []);
  return (
    <div>
      <Icon name="TICK" circular />
      <Loader size={5} />
      <Button appearance="normal">Here</Button>
      <Label>
        <span>Sasha Shackelford</span>
      </Label>
    </div>
  );
};

export default LandingContainer;
