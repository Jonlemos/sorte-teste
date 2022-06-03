import styled from "styled-components";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const AppB = styled(AppBar)`
  background: #ebebea;
`;

const Toolb = styled(Toolbar)`
  background: #ebebea;
`;
const Typogr = styled(Typography)`
  color: #b43574;
  font-weight: bold;
`;

const Logo = styled(Typography)`
  border: 1px solid #564d50;
  border-radius: 50px;
  padding: 10px;
  margin: 10px !important;
  color: #ad7f9d;
  box-shadow: 2px 1px 3px 1px #dab8cb;
`;

const Containe = styled(Container)`
  min-height: 80vh;
`;

const Footer = styled.footer`
  text-align: center;
`;
export { AppB, Toolb, Typogr, Logo, Containe, Footer };
