import { Product } from "@/lib/data";

export const calculateTotalPrice = (basket: Array<Product>) =>
  basket.reduce((amount, item) => item.price * item.quantity + amount, 0);
