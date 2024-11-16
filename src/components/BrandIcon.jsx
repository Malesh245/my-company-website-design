import React from "react";

import logo from "../assets/logo.png";
import Button from "./Button";

function BrandIcon() {
  return (
    <Button className="" type="link" href="/">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="GenAIKit Logo" className="h-20 w-auto" />
      </div>
    </Button>
  );
}
export default BrandIcon;
