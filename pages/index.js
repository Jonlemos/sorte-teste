import { CardActionArea, Grid, Card } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import {
  CardMed,
  CardCont,
  TypoTitle,
  TypoDescription,
  CardAct,
  TypoPrice,
  ButtonCart,
} from "../styles/home/home";
import data from "../utils/data";

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Produtos</h1>
        <Grid container spacing={3}>
          {data.map((product) => (
            <Grid item md={4} key={product.name}>
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
                  <ButtonCart size="small">Add to Cart +</ButtonCart>
                </CardAct>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}
