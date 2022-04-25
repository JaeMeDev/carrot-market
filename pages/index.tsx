import type { NextPage } from "next";
import useSWR from "swr";
import Head from "next/head";
import Image from "next/image";
import client from "@libs/server/client";
import { Product } from "@prisma/client";
import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import tiger from "../public/tiger.jpeg";

export interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}

interface ProductsResponse {
  ok: boolean;
  products: ProductWithCount[];
}

const Home: NextPage<{ products: ProductWithCount[] }> = ({ products }) => {
  useUser();
  return (
    <Layout title="Home" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 divide-y">
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            hearts={product._count?.favs}
          />
        ))}
        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
      <Image src={tiger} alt="tiger" placeholder="blur" quality={10} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const products = await client.product.findMany({});
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Home;
