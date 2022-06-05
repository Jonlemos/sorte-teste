import React, { useContext } from "react";
import { useRouter } from "next/router";
import { CardActionArea, Card } from "@material-ui/core";
import {
  CardMed,
  CardCont,
  TypoTitle,
  TypoDescription,
  CardAct,
  TypoPrice,
  ButtonCart,
} from "../../styles/home/styled-home";
import data from "../../utils/data";
import Layout from "../../components/Layout/Layout";
import NextLink from "next/link";
import { Link } from "@material-ui/core";
import { Store } from "../../utils/Store";

export default function ProductScreen() {
  const router = useRouter();
  const { id } = router.query;
  const product = data.find((a) => a.id == id);
  const { dispatch } = useContext(Store);

  console.log(product);
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const addToCartHandler = () => {
    const { data } = product.id;
    if (data) {
      console.log("produto inserido");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
    router.push("/cart");
  };

  return (
    <>
      <Layout title={product.title}>
        <NextLink href="/" passHref>
          <Link>Voltar</Link>
        </NextLink>
        <Card>
          <CardActionArea>
            <CardMed
              component="img"
              image={product.image}
              title={product.title}
            ></CardMed>
            <CardCont>
              <TypoTitle variant="h5">{product.title}</TypoTitle>
              <TypoDescription variant="body2">
                {product.description}
              </TypoDescription>
            </CardCont>
          </CardActionArea>
          <CardAct>
            <TypoPrice> $ {product.price}</TypoPrice>
            <ButtonCart size="small" onClick={addToCartHandler}>
              Add to Cart +
            </ButtonCart>
          </CardAct>
        </Card>
      </Layout>
    </>
  );
}
