import { Button, Link } from "@material-ui/core";
import styled from "styled-components";

const LinkProduct = styled(Link)`
  display: flex;
  align-items: center;
`;

const ButtonDelete = styled(Button)`
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
`;

export { LinkProduct, ButtonDelete };
