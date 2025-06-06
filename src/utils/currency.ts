import { MyBig } from "@/lib/big";

export const toSatang = (amount: number) =>
  new MyBig(amount).mul(100).round(2).toNumber();

export const fromSatang = (amount: number) =>
  new MyBig(amount).div(100).round(2).toNumber();

export const toCurrencyFromSatang = (amount: number) =>
  new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(fromSatang(amount));
