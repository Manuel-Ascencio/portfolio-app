import React from "react";

import { TitleContent, Content } from "./TitleStyles";

const Title = ({ title }) => {
  return (
    <TitleContent>
      <Content>{title}</Content>
    </TitleContent>
  );
};

export default Title;
