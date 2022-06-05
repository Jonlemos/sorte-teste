import { CardActionArea, Grid, Card } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import { useContext } from "react";
import {
  CardMed,
  CardCont,
  TypoTitle,
  TypoDescription,
  CardAct,
  TypoPrice,
  ButtonCart,
  InCart,
  SpanPrice,
} from "../styles/home/styled-home";
import NextLink from "next/link";
import data from "../utils/data";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import formatPrice from "../utils/formatPrice";

export default function Home() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  let item = state.cart.cartItems;
  console.log(item);
  const addToCartHandler = (product) => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    // const { data } = product.id;
    // if (data) {
    //   window.alert("Sorry. Product is out of stock");
    // }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <>
      <Layout>
        <h1>Produtos</h1>
        <Grid container spacing={3}>
          {data.map((product) => (
            <Grid item md={4} key={product.id}>
              <Card>
                <NextLink href={`/product/${product.id}`} passHref>
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
                </NextLink>
                <CardAct>
                  <TypoPrice>
                    {" "}
                    {product.priceDiscount > 0 ? (
                      <>
                        {formatPrice(product.priceDiscount)}
                        <SpanPrice>{formatPrice(product.price)}</SpanPrice>
                      </>
                    ) : (
                      formatPrice(product.price)
                    )}{" "}
                    {}
                  </TypoPrice>
                  {state.cart.cartItems.find((x) => x.id === product.id) ? (
                    <InCart size="small">in the cart</InCart>
                  ) : (
                    <ButtonCart
                      size="small"
                      onClick={() => addToCartHandler(product)}
                    >
                      Add to Cart +
                    </ButtonCart>
                  )}
                </CardAct>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}
