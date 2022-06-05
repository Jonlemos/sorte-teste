import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link,
  TableFooter,
} from "@material-ui/core";
import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import NextLink from "next/link";
import Image from "next/image";
import { Store } from "../utils/Store";
import formatPrice from "../utils/formatPrice";
import { ButtonDelete, LinkProduct } from "../styles/cart/styled-cart";

export default function Cart() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout>
      {cartItems.length === 0 ? (
        <div>
          O carrinho está vazio, <NextLink href="/"> voltar a loja</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={12} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ minWidth: 200 }}>Product</TableCell>
                    <TableCell style={{ maxWidth: 50 }} align="right">
                      Quantity
                    </TableCell>
                    <TableCell style={{ maxWidth: 50 }} align="right">
                      Price
                    </TableCell>
                    <TableCell
                      style={{ maxWidth: 50 }}
                      align="right"
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <NextLink href={`/product/${item.id}`} passHref>
                          <LinkProduct>
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={80}
                              height={50}
                              style={{ marginRight: 5 }}
                            />
                            <Typography>{item.title}</Typography>
                          </LinkProduct>
                        </NextLink>
                      </TableCell>

                      <TableCell align="right">
                        <Typography>{item.quantity}</Typography>
                      </TableCell>
                      <TableCell style={{ maxWidth: 50 }} align="right">
                        {formatPrice(item.price)}
                      </TableCell>
                      <TableCell style={{ maxWidth: 30 }} align="right">
                        <ButtonDelete variant="contained">X</ButtonDelete>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell style={{ maxWidth: 50 }} align="right">
                      <Typography>
                        Total:
                        {formatPrice(
                          cartItems.reduce(
                            (a, c) => a + c.quantity * c.price,
                            0
                          )
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}
