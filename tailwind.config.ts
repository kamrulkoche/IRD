import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],  // Add Poppins font family
        },
        extend: {
            colors: {
                first: {
                    //blue type
                    100: '#EBEEF2',
                    200: '#868686',
                    300: "#F7F7FA",
                    400: '#F3F4F6'
                },
                second: {
                    // green type
                    100: '#1FA45B',
                    200: '#111827',
                    300: '#404346',
                    400:'#CFE0E5',

                },
                third: {
                    // yellow type

                },
                fourth: {
                    // green type

                },
                fifth: {
                    // white
                    white: '#FFFFFF',
                    100: '#F1F3F5',
                    200:'#E8F0F5',
                },
                sixth: {
                    // black
                    black: '#000000',
                    100: '#393939'

                },
                seventh: {
                    // red
                    100: '#ef4a23',
                },
                eighth: {
                    //
                },
                nine: {

                },
                ten: {

                },

            },
        },
    },
    plugins: [],
};
export default config;
