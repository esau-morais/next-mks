import { Dispatch, SetStateAction } from "react";

import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/hooks/basket";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromBasket,
  RootState,
} from "@/store/store";

import { Aside, BasketItem } from "./styles";

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { basket } = useAppSelector((state: RootState) => state.basket);
  const dispatch = useAppDispatch();

  const total = basket.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );

  return (
    <Aside open={isOpen}>
      <div>
        <h2>Carrinho de compras</h2>

        <span aria-label="close" onClick={() => setIsOpen(false)}>
          x
        </span>
      </div>

      <div className="product__basket">
        {basket.map((product) => (
          <BasketItem key={product.id}>
            <Image
              src={product.photo}
              alt={`${product.name} - ${product.brand}`}
              width={48}
              height={48}
            />

            <span>{product.name}</span>
            <div className="product__info">
              <div className="product__quantity">
                <button
                  type="button"
                  onClick={() => dispatch(decrementQuantity(product))}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  type="button"
                  onClick={() => dispatch(incrementQuantity(product.id))}
                >
                  +
                </button>
              </div>

              <span className="product__amount">
                R${product.price * product.quantity}
              </span>
            </div>

            <span
              className="product__remove"
              aria-label={`remove ${product.name} from basket`}
              // TODO: find later what is going on, because it is not working
              onClick={() => dispatch(removeFromBasket(product.id))}
            >
              x
            </span>
          </BasketItem>
        ))}
      </div>

      <div className="product__total">
        <span>Total:</span>
        <span>R${total}</span>
      </div>
      <button type="button" disabled className="product__checkout">
        Finalizar compra
      </button>
    </Aside>
  );
};

export default SideBar;
