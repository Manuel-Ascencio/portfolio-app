import React from "react";
import styled from "styled-components";

const PageHeader = ({ title, span }) => {
    return (
        <PageHeaderStyled>
            <h2>{title} <span>{span}</span> </h2>
        </PageHeaderStyled>
    )
}

const PageHeaderStyled = styled.div`

`;

export default PageHeader;