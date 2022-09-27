import React from "react";

import { PageHeaderContainer, Title } from "./PageHeaderStyles";

const PageHeader = ({ title }) => {
  return (
    <PageHeaderContainer>
      <Title>{title}</Title>
    </PageHeaderContainer>
  );
};

export default PageHeader;
