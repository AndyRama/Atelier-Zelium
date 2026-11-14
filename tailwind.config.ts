import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F2E7",
        sand: "#EFE5D4",
        ink: "#1C1A17",
        body: "#69665F",
        muted: "#8F8B83",
        gold: "#A67C3D",
        line: "#DDD3C1",
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
