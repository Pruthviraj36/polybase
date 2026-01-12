/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "../src/**/*.{js,ts,jsx,tsx}", // Include library source
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                aurora: {
                    from: { backgroundPosition: "50% 50%, 50% 50%" },
                    to: { backgroundPosition: "350% 50%, 350% 50%" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: 0.5, filter: "brightness(1) blur(10px)" },
                    "50%": { opacity: 1, filter: "brightness(1.5) blur(15px)" },
                },
                glitch: {
                    "0%": { transform: "translate(0)" },
                    "20%": { transform: "translate(-5px, 5px)" },
                    "40%": { transform: "translate(-5px, -5px)" },
                    "60%": { transform: "translate(5px, 5px)" },
                    "80%": { transform: "translate(5px, -5px)" },
                    "100%": { transform: "translate(0)" },
                },
                shine: {
                    "0%": { left: "-100%" },
                    "100%": { left: "100%" },
                },
                typing: {
                    from: { width: "0" },
                    to: { width: "100%" },
                },
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                aurora: "aurora 60s linear infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
                glitch: "glitch 0.2s ease-in-out infinite",
                shine: "shine 2s linear infinite",
                typing: "typing 3.5s steps(40, end)",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
}
