import localFont from "next/font/local";

const Lastica = localFont({
  src: [{ path: "../assets/fonts/lastica/lastica.ttf" }],
  variable: "--font-lastica",
});

const TTInterphases = localFont({
  src: [
    {
      path: "../assets/fonts/ttinterphases/TTInterfaces-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/ttinterphases/TTInterfaces-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/ttinterphases/TTInterfaces-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/ttinterphases/TTInterfaces-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/ttinterphases/TTInterfaces-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/ttinterphases/TTInterfaces-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-interphases",
});

export { Lastica, TTInterphases };
