import defaultTheme from "tailwindcss/defaultTheme";
import animations from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary-dark-gray": "#C4C4C4",
                "primary-dark-orange": "#FCA311",
                "primary-light-blue": "#339AF0",
            },
            fontFamily: {
                KeniaOne: ["KeniaOne", ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                "primary-dark": "#FCA311",
                "primary-light": "#339AF0",
            },
            keyframes: {
                reflection: {
                    "0%, 100%": { transform: "scaleX(1)" },
                    "50%": { transform: "scaleX(-1)" },
                },
            },
            animation: {
                reflection: 'reflection 0.5s ease-in-out',
              }
        },
    },
    plugins: [animations],
};
