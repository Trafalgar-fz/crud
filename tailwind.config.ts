import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   "color1" : "#133E87",
    //   "color2" : "#DFF2EB",
    // },
    extend: {
      spacing: {
        "5px" : "5px",
        "15px" : "15px",
        "25px" : "25px",
        "10%": "10%",
        "20%": "20%",
        "60%": "60%",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         "color1" : "#133E87",
         "color2" : "#DFF2EB",
         "color3" : {
          "satu" : "#FFCC00",
          "dua"  : "FF0000",
         }
      },
    },
  },
  plugins: [require('daisyui'),
    
  ],
};
export default config;
