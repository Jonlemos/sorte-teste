import styled from "styled-components";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const CardMed = styled(CardMedia)`
  padding: 15px 40px;
`;
const CardCont = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TypoTitle = styled(Typography)`
  color: #b01c74;
  font-weight: 500 !important;
`;
const TypoDescription = styled(Typography)`
  color: #445264;
`;

const CardAct = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px !important;
`;
const TypoPrice = styled(Typography)`
  display: flex;
  font-weight: 600 !important;
`;
const ButtonCart = styled(Button)`
  background: #b43574 !important;
  color: #fff !important;
  text-transform: none !important;
`;

export {
  CardMed,
  CardCont,
  TypoTitle,
  TypoDescription,
  CardAct,
  TypoPrice,
  ButtonCart,
};
