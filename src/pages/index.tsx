import Article from "@/components/article";
import Banner from "@/components/banner";
import Brands from "@/components/brands";
import Categories from "@/components/categories";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "../components/products"

export default function Home() {
  const productCategories = [
    { title: "Celular" },
    { title: "Acessórios" },
    { title: "Tablets" },
    { title: "Notebooks" },
    { title: "Tvs" },
    { title: "Ver todos" }
  ]

  return (
    <>
      <Header />
      <Banner />
      <Categories />

      <Products categoriesOptions={productCategories}
        seeAll={false}
      />

      <Article
        imageBackground={"primary"}
        title={"Parceiros"}
        description={"Lorem ipsum dolor sit amet, consectetur"}
      />

      <Products
        categoriesOptions={productCategories}
        seeAll={true}
      />

      <Article
        imageBackground={"alt"}
        title={"Produtos"}
        description={"Lorem ipsum dolor sit amet, consectetur"}
      />

      <Brands />

      <Products
        categoriesOptions={productCategories}
        seeAll={true}
        lastChild={true}
      />

      <Footer />
    </>
  )
}
