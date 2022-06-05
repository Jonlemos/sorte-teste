import React, { useContext } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Badge, Link } from "@material-ui/core";
import { AppB, Toolb, Typogr, Logo, Grow, Containe, Footer } from "./styled";
import { Store } from "../../utils/Store";

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <div>
      <Head>
        <title>{title ? { title } : "Dev Store teste Sorte Online"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <AppB position="static">
        <Toolb>
          <Logo>DS</Logo>
          <NextLink href="/" passHref>
            <Link>
              <Typogr variant="h5">Dev Store</Typogr>
            </Link>
          </NextLink>
          <Grow>
            <NextLink href="/cart" passHref>
              <Link>
                {cart.cartItems.length > 0 ? (
                  <Badge color="secondary" badgeContent={cart.cartItems.length}>
                    Cart
                  </Badge>
                ) : (
                  <Typogr variant="h5">Cart</Typogr>
                )}
              </Link>
            </NextLink>
          </Grow>
        </Toolb>
      </AppB>
      <Containe>{children}</Containe>
      <Footer>
        <Typogr>Teste Sorte Online </Typogr>
      </Footer>
    </div>
  );
}
