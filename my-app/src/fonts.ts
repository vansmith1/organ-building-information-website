import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const cormorant = Cormorant_Garamond({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-cormorant",
});