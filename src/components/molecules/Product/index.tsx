"use client";

import Image from "next/image";

import { ShoppingBagIcon } from "@/components";
import { useAppDispatch } from "@/hooks/basket";
import { Product as ProductData } from "@/lib/data";
import { addToBasket } from "@/store/store";
import { rgbDataURL } from "@/utils/image";

import { Item } from "./styles";

const Product = ({ data }: { data: ProductData }) => {
  const dispatch = useAppDispatch();

  return (
    <Item role="listitem">
      <Image
        src={data.photo}
        alt={`${data.name} - ${data.brand}`}
        width={111}
        height={138}
        loading="lazy"
        placeholder="blur"
        blurDataURL={rgbDataURL(255, 255, 255)}
      />

      <div>
        <span>{data.name}</span>

        <span>R${data.price}</span>
      </div>
      <p>{data.description}</p>

      <button type="button" onClick={() => dispatch(addToBasket(data))}>
        <span role="img" aria-label="shopping bag">
          <ShoppingBagIcon />
        </span>
        <span>Comprar</span>
      </button>
    </Item>
  );
};

export default Product;
