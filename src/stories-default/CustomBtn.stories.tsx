import React from "react";
import { storiesOf } from "@storybook/react";

import CustomBtn from "./CustomBtn";

storiesOf("CustomBtn", module)
  .add("with primary", () => <CustomBtn label="Primary CustomBtn" />)
  .add("with outline", () => (
    <CustomBtn
      label="Ouline CustomBtn"
      style={{ background: "transparent", border: "3px solid #fecd43" }}
    />
  ))
  .add("with rounder corners", () => (
    <CustomBtn label="Rounded CustomBtn" style={{ borderRadius: "15px" }} />
  ))
  .add("disabled", () => (
    <CustomBtn
      disabled
      label="Disabled Button"
      style={{ background: "gray", border: "gray", cursor: "not-allowed" }}
    />
  ));
