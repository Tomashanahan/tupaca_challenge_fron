import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    primary: {
      100: "#755BD7",
    },
    brand: {
      white: "#FFFFFF",
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  breakpoints: {
    xs: "355px", // Teléfonos móviles pequeños
    sm: "375px", // Teléfonos móviles
    md: "412px", // Tabletas
    lg: "688px", // Portátiles y monitores pequeños
    xl: "1024px", // Monitores de escritorio
    "2xl": "1321px", // Monitores de escritorio (Full HD - 1080p)
    "3xl": "2560px", // Monitores más grandes (1440p y 2K)
    "4xl": "3840px", // Monitores UltraWide (4K)
    "5xl": "5120px", // Monitores UltraWide (5K)
    "6xl": "7680px", // Monitores UltraWide (8K)
  },
});
