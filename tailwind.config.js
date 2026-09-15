/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Cormorant Garamond", "Georgia", "serif"],
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ["Chivo", "Inter", "system-ui", "sans-serif"],
                mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
                devanagari: ["Vesper Libre", "Noto Serif Devanagari", "serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 1px)",
                sm: "calc(var(--radius) - 2px)",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    glow: "hsl(var(--primary-glow))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                brass: "hsl(var(--brass))",
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                success: "hsl(var(--success))",
                warning: "hsl(var(--warning))",
                raised: {
                    DEFAULT: "hsl(var(--raised))",
                    foreground: "hsl(var(--raised-foreground))",
                },
                utilized: {
                    DEFAULT: "hsl(var(--utilized))",
                    foreground: "hsl(var(--utilized-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
            backgroundImage: {
                "gradient-veil":
                    "linear-gradient(180deg, hsl(224 45% 8% / 0.15) 0%, hsl(224 45% 8% / 0.92) 100%)",
                "gradient-veil-s":
                    "linear-gradient(90deg, hsl(224 45% 8% / 0.92) 0%, hsl(224 45% 8% / 0.25) 100%)",
            },
            boxShadow: {
                soft: "0 2px 14px -8px hsl(224 60% 4% / 0.6)",
                elegant: "0 18px 44px -22px hsl(224 60% 4% / 0.7)",
                lift: "0 28px 64px -26px hsl(224 60% 4% / 0.75)",
                saffron: "0 0 0 1px hsl(var(--primary) / 0.5), 0 12px 34px -18px hsl(var(--primary) / 0.55)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "pulse-ring": {
                    "0%": { transform: "scale(0.8)", opacity: "0.7" },
                    "70%": { transform: "scale(2.2)", opacity: "0" },
                    "100%": { transform: "scale(2.2)", opacity: "0" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
                flicker: {
                    "0%,100%": { opacity: "0.85" },
                    "45%": { opacity: "1" },
                    "70%": { opacity: "0.7" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.4,0,0.6,1) infinite",
                marquee: "marquee 32s linear infinite",
                flicker: "flicker 4.5s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
